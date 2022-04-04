import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = { 
  apiKey: "AIzaSyA5VTTxsdR8V0f0n65e2eRwiaiLE2jf4aA", 
  authDomain: "demodaydailys-5df5f.firebaseapp.com", 
  projectId: "demodaydailys-5df5f", 
  storageBucket: "demodaydailys-5df5f.appspot.com", 
  messagingSenderId: "87743376396", 
  appId: "1:87743376396:web:7a9749957f9037d4545229" 
};
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const authentication = getAuth(app);
const db = getFirestore();

export { app, google, facebook, db, authentication };