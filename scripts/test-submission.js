const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');
const fs = require('fs');
const path = require('path');

// Load env
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
}

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

async function submitTestAudit() {
    console.log("🚀 Submitting a new test audit to trigger automation...");
    
    const testAudit = {
        fullName: "Sarah Tech",
        companyName: "Eliana Global",
        websiteUrl: "https://www.elianatech.com",
        email: "sarah@technova.com",
        businessType: "saas",
        specificIndustry: "SaaS for Law Firms",
        currentRevenue: "500k-1m",
        revenueTrend: "Growing",
        teamSize: "10-25",
        auditScore: 35,
        biggestTimeWaste: "Manually onboarding every new client and custom coding integrations",
        contentCreationHours: "20+",
        supportHoursPerWeek: "10-20",
        hoursPerWeek: 40,
        percentAutomated: "under-30",
        tools: ["Intercom", "Jira", "Excel", "Slack"],
        bottleneck: "Onboarding speed and manual feature requests",
        painLevel: 9,
        keepsUpAtNight: "Potential customers leaving because we take 3 weeks to set up their account",
        next12MonthsGoal: "Reach $5M ARR while reducing onboarding time to 24 hours",
        createdAt: serverTimestamp()
    };

    try {
        const docRef = await addDoc(collection(db, 'audits'), testAudit);
        console.log(`✅ Success! New audit submitted with ID: ${docRef.id}`);
        console.log("The sync worker should pick this up in a few seconds...");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

submitTestAudit().catch(console.error);
