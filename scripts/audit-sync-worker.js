const fs = require('fs');
const path = require('path');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, onSnapshot, orderBy, limit } = require('firebase/firestore');
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

let lastProcessedId = null;

onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            const auditData = change.doc.data();
            const auditId = change.doc.id;

            if (lastProcessedId === null) {
                lastProcessedId = auditId;
                console.log(`Ready for new submissions... (Found existing: ${auditData.companyName})`);
                return;
            }
            if (lastProcessedId === auditId) return;

            lastProcessedId = auditId;
            console.log(`\nNEW AUDIT RECEIVED: ${auditData.fullName} from ${auditData.companyName}`);

            processAudit(auditData);
        }
    });
});

async function processAudit(data) {
    try {
        // Generate Pitch Package
        console.log("Generating Pitch Package...");
        const jsonData = JSON.stringify(data).replace(/"/g, '\\"');
        execSync(`node scripts/generate-pitch-package.js "${jsonData}"`, { stdio: 'inherit' });

        console.log(`\nPitch package generated for ${data.companyName}.`);
        console.log("Watching for more audits...");

    } catch (err) {
        console.error("Error processing new audit:", err.message);
    }
}
