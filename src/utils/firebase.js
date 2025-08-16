// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmtT0OtX14kUgXDtdZJZif8wsTl_BmnvM",
  authDomain: "video-gpt-cf939.firebaseapp.com",
  projectId: "video-gpt-cf939",
  storageBucket: "video-gpt-cf939.firebasestorage.app",
  messagingSenderId: "1096664783272",
  appId: "1:1096664783272:web:fa90239c5b60e3e2c0259d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()