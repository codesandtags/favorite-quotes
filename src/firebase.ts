// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-R0ysO2tkNmlHIAH9p_STLLRmMfqKbTA',
  authDomain: 'favorite-quotes-001.firebaseapp.com',
  databaseURL: 'https://favorite-quotes-001-default-rtdb.firebaseio.com',
  projectId: 'favorite-quotes-001',
  storageBucket: 'favorite-quotes-001.appspot.com',
  messagingSenderId: '281483937529',
  appId: '1:281483937529:web:d483d30efa435cae6c8428',
  measurementId: 'G-JQBSY1T10C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Enable analytics
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
