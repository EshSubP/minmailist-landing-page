import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin SDK
const firebaseAdminConfig = {
    credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Handle newlines in private key from env var
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
};

// Avoid re-initializing in development (hot reload)
const app = getApps().length === 0 ? initializeApp(firebaseAdminConfig) : getApps()[0];
const db = getFirestore(app);

// Users collection reference
export const usersCollection = db.collection('Users');

// User document type
export interface User {
    id: string;
    email: string;
    createdAt: Date;
    status: 'waitlist' | 'active' | 'churned';
    source: 'landing_page' | 'referral' | 'twitter' | 'other';
}

export { db };
