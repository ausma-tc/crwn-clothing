import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
 getFirestore,
 doc,
 getDoc,
 setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCGxwL5dnrtdo3Q5tXGXKZQwJE7yNP2-5E",
  authDomain: "crwn-clothing-614cd.firebaseapp.com",
  projectId: "crwn-clothing-614cd",
  storageBucket: "crwn-clothing-614cd.appspot.com",
  messagingSenderId: "419085504791",
  appId: "1:419085504791:web:722d1f9473169423c0e752",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
  
}