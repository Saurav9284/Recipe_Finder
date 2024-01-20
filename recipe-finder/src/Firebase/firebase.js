// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxYzNPjmCqyZcxSngI8av9FmJyMSA1iA",
  authDomain: "recipe-finder-75c57.firebaseapp.com",
  projectId: "recipe-finder-75c57",
  storageBucket: "recipe-finder-75c57.appspot.com",
  messagingSenderId: "562036774551",
  appId: "1:562036774551:web:f52f3eb7f827ed4833bbd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app)
 export {auth};