import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  orderBy,
  Timestamp,
  runTransaction,
  where,
  addDoc,
} from 'firebase/firestore';
import { db } from './firebase';

console.log('🙈 connecting to firestore');
