// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_NbogE-XCbS17FjaRWwpJLAEiYXXAfKg",
  authDomain: "form-context-auth.firebaseapp.com",
  projectId: "form-context-auth",
  storageBucket: "form-context-auth.firebasestorage.app",
  messagingSenderId: "1014566230027",
  appId: "1:1014566230027:web:3d0a9f435259b02afd0f0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
