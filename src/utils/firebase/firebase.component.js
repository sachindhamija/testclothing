import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInwWithPopup,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuExjpGrKQKkI7UPim7GqTQH1tWFYVPgs",
  authDomain: "clothing-db-ad39f.firebaseapp.com",
  projectId: "clothing-db-ad39f",
  storageBucket: "clothing-db-ad39f.appspot.com",
  messagingSenderId: "1021304841823",
  appId: "1:1021304841823:web:ccb3b84ef712e829245dea",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInwWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating at user", error.message);
    }
  }
  return userDocRef;
};
