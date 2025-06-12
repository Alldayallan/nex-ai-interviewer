
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBUd6pwJu6CdFHS_jtU4iA04D0cYXPvllE",
    authDomain: "prepped-8dd29.firebaseapp.com",
    projectId: "prepped-8dd29",
    storageBucket: "prepped-8dd29.firebasestorage.app",
    messagingSenderId: "871011367842",
    appId: "1:871011367842:web:a9f689c119d0e591fbd0fb",
    measurementId: "G-74MY9D8DRZ"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
