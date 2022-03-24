import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7TV8YN-htZiYtmzXfPXA6maXBuQosII0",
    authDomain: "fir-day-396a3.firebaseapp.com",
    projectId: "fir-day-396a3",
    storageBucket: "fir-day-396a3.appspot.com",
    messagingSenderId: "417314420929",
    appId: "1:417314420929:web:867fceee7f577c98b8bc40"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };