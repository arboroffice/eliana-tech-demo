
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, query, orderBy, limit } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

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

async function checkSubmissions() {
    console.log('Checking submissions for project:', firebaseConfig.projectId);
    try {
        const q = query(collection(db, 'audits'), orderBy('submittedAt', 'desc'), limit(5));
        const snapshot = await getDocs(q);
        console.log('Found', snapshot.size, 'submissions');
        snapshot.forEach(doc => {
            const data = doc.data();
            console.log(`- ID: ${doc.id}, Name: ${data.fullName}, Company: ${data.companyName}, Email: ${data.email}, Time: ${data.submittedAt}`);
        });
    } catch (e) {
        console.error('Error fetching submissions:', e);
    }
    process.exit(0);
}

checkSubmissions();
