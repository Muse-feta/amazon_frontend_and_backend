// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhWsOhooaPTRnKIsq4IR7cSJIHWCECy1c",
  authDomain: "clone-beecf.firebaseapp.com",
  projectId: "clone-beecf",
  storageBucket: "clone-beecf.appspot.com",
  messagingSenderId: "560505388989",
  appId: "1:560505388989:web:f7bab7d28da7a981f41cd4",
  measurementId: "G-6020K4B534",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export {auth, db};
// const analytics = getAnalytics(app);
