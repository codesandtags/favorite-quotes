// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  connectAuthEmulator,
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config';
import { getAnalytics } from 'firebase/analytics';

// Check if Firebase is already initialized
const alreadyCreatedAps = getApps();

if (alreadyCreatedAps.length > 0) {
  console.log(firebaseConfig);
  console.log('🚨 Firebase already initialized');
}

// Initialize Firebase
export const firebaseApp =
  alreadyCreatedAps.length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const analytics =
  !process.env.NEXT_PUBLIC_FIREBASE_EMULATOR && getAnalytics(firebaseApp);

// Enable emulators if environment variable is set
if (process.env.NEXT_PUBLIC_FIREBASE_EMULATOR) {
  try {
    console.log('🔥 Using Firebase emulators');
    connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
  } catch (error) {
    console.error('Error connecting to Firebase emulators', error);
  }
}
