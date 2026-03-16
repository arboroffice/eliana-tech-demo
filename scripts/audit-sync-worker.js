const fs = require('fs');
const path = require('path');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, where, onSnapshot, orderBy, limit, doc, updateDoc } = require('firebase/firestore');
const { execSync } = require('child_process');

// 1. Load Environment Variables from .env.local
function loadEnv() {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        envFile.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split('=');
            if (key && valueParts.length > 0) {
                const value = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
                process.env[key.trim()] = value;
            }
        });
        console.log("Environment variables loaded from .env.local");
    } else {
        console.warn(".env.local not found. Ensure keys are set in your environment.");
    }
}

loadEnv();

// 2. Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Eliana Pitch-Bot is LIVE. Watching for new audits...");

// 3. Watch for New Audits
const auditsRef = collection(db, 'audits');
const q = query(auditsRef, orderBy('createdAt', 'desc'), limit(1));

// Keep track of processed audits to avoid re-processing old ones on start
let lastProcessedId = null;

onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            const auditData = change.doc.data();
            const auditId = change.doc.id;

            // Skip if it's the one we found on startup or already processed
            if (lastProcessedId === null) {
                lastProcessedId = auditId;
                console.log(`Ready for new submissions... (Found existing: ${auditData.companyName})`);
                return;
            }
            if (lastProcessedId === auditId) return;

            lastProcessedId = auditId;
            console.log(`\nNEW AUDIT RECEIVED: ${auditData.fullName} from ${auditData.companyName}`);

            processAudit(auditData, auditId);
        }
    });
});

async function processAudit(data, auditId) {
    try {
        const companyId = data.companyName.replace(/[^a-z0-9]/gi, '_').toLowerCase();

        // Step 1: Generate Pitch Package
        console.log("Generating Pitch Package...");
        const jsonData = JSON.stringify(data).replace(/"/g, '\\"');
        execSync(`node scripts/generate-pitch-package.js "${jsonData}"`, { stdio: 'inherit' });

        // Step 2: Create NotebookLM notebook via API (no browser needed)
        console.log("Creating NotebookLM notebook via API...");
        try {
            const briefPath = path.join(process.cwd(), 'prospect_pitches', companyId, 'notebooklm_research_brief.md');

            if (fs.existsSync(briefPath)) {
                const briefContent = fs.readFileSync(briefPath, 'utf8');

                // Call our own API endpoint to create the notebook
                const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
                const res = await fetch(`${baseUrl}/api/audit/notebook`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        companyName: data.companyName,
                        fullName: data.fullName,
                        websiteUrl: data.websiteUrl,
                        researchBrief: briefContent,
                    }),
                });

                const result = await res.json();

                if (result.success) {
                    console.log(`NotebookLM notebook created: ${result.notebookUrl}`);

                    // Store notebook URL back in Firestore
                    if (auditId) {
                        const auditRef = doc(db, 'audits', auditId);
                        await updateDoc(auditRef, {
                            notebookUrl: result.notebookUrl,
                            notebookId: result.notebookId,
                        });
                        console.log("Notebook URL saved to Firestore.");
                    }
                } else {
                    console.warn(`NotebookLM API returned error: ${result.error}`);
                }
            }
        } catch (notebookErr) {
            console.warn(`NotebookLM creation failed (non-blocking): ${notebookErr.message}`);
        }

        console.log(`\nPitch package + notebook generated for ${data.companyName}.`);
        console.log("Watching for more audits...");

    } catch (err) {
        console.error("Error processing new audit:", err.message);
    }
}
