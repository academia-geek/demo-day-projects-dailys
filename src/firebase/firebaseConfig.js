import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALq-pvQzyTKAvPFGbe-aEFF6GE8GjeRU8",
  authDomain: "demodaydailys.firebaseapp.com",
  projectId: "demodaydailys",
  storageBucket: "demodaydailys.appspot.com",
  messagingSenderId: "231571589992",
  appId: "1:231571589992:web:b46614d3dddef7dcff64dd"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };