// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6N46enxIlmy6fozx3NGxTLge-GgG7aV0",
  authDomain: "firstapp0-df9f8.firebaseapp.com",
  projectId: "firstapp0-df9f8",
  storageBucket: "firstapp0-df9f8.appspot.com",
  messagingSenderId: "92251222829",
  appId: "1:92251222829:web:518e14a44dca11792e59a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};