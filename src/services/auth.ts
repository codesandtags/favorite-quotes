import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/firebase';

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredentials = signInWithEmailAndPassword(auth, email, password);
    console.log({ userCredentials });
    // Handle successful login
  } catch (error) {
    // Handle errors
    console.log({ error });
  }
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    // Handle successful registration
    console.log({ message: 'Registering user with email', email, password });
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // Handle errors
  }
};

export const signOut = async () => {
  try {
    // Handle successful sign out
    console.log({ message: 'Signing out user' });
    auth.signOut();
  } catch (error) {
    // Handle errors
  }
};
