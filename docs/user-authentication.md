# Add user Authentication to the project

## 1. Setting Up Firebase

Before starting with the code, make sure you have a Firebase project set up. If not, follow these steps:

Go to the Firebase Console.
Create a new project (or select an existing one).
In the Firebase project dashboard, go to the "Authentication" section.
Enable the sign-in methods you'd like to use (e.g., Email/Password, Google, Facebook, etc.).

## 2. Installing Firebase SDK
In your Next.js project, you need to install Firebase SDK:

```sh
npm install firebase
```


## 3. Initializing Firebase in Your Application
Create a file (e.g., firebaseClient.js) to initialize Firebase with your project's configuration:

```javascript
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // ... other configuration keys
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
```

Make sure you replace the configuration with your actual Firebase project settings.

## 4. Creating Authentication Functions
In the same file or a separate service file, create functions to handle authentication:



```javascript
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    // Handle successful login
  } catch (error) {
    // Handle errors
  }
};

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    // Handle successful registration
  } catch (error) {
    // Handle errors
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    // Handle successful sign out
  } catch (error) {
    // Handle errors
  }
};
```

## 5. Integrating Authentication in UI
In your React components, use the above functions to enable users to sign in, register, or sign out. For instance:

```javascript
import { logInWithEmailAndPassword, registerWithEmailAndPassword, signOut } from './firebaseClient';

// Use these functions in your components to handle user authentication.

```



## 6. Handling Auth State
Firebase provides a listener to handle authentication state changes. You can use this to manage user sessions:

```javascript
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in
  } else {
    // User is signed out
  }
});
```

## 7. Protecting Routes
For pages that require authentication, use Next.js's getServerSideProps or getInitialProps to check if the user is authenticated and redirect if not:

```javascript
export const getServerSideProps = async (context) => {
  const user = await getUserFromSession(context.req);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { user } };
};
```


The getUserFromSession function should extract the user's session from the request, which can be done using cookies or Firebase's server-side authentication methods.

## 8. Environment Variables
Ensure your Firebase project keys in .env.local are correctly set up and are being loaded into your Firebase configuration.

Final Thoughts
This is a basic implementation. Depending on your application's needs, you may need to add more features like password reset, email verification, third-party authentication providers, etc. Always ensure you handle user data securely and follow best practices for authentication and authorization.