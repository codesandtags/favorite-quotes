import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase';

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const token = await user.getIdToken();
    document.cookie = `token=${token}; path=/`;

    return token;
  } catch (error) {
    console.error('Error signing in with email and password', error);
  }
};

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const userlogged = await signInWithPopup(auth, provider);
    document.cookie = `token=${await userlogged.user.getIdToken()}; path=/`;
    console.log({
      userlogged,
    });

    console.log(document.cookie);

    return userlogged;
  } catch (error) {
    console.error('Error signing in with Google', error);
  }

  return null;
}

export async function signOut() {
  try {
    document.cookie = 'token=; path=/';

    return auth.signOut();
  } catch (error) {
    console.error('Error signing out with Google', error);
  }
}

// Export the authenticated App user
export async function getAuthenticatedAppUser() {
  return auth.currentUser;
}
