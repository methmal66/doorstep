// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgHIfT_33Wq3VUOKXzNR8YutJHSXopUwQ",
  authDomain: "doorstep-1de28.firebaseapp.com",
  databaseURL:
    "https://doorstep-1de28-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "doorstep-1de28",
  storageBucket: "doorstep-1de28.appspot.com",
  messagingSenderId: "1059779791456",
  appId: "1:1059779791456:web:97f156d4f62af228b3d105",
  measurementId: "G-NWKJ34SFMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
