// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f4e5d.firebaseapp.com",
  projectId: "mern-estate-f4e5d",
  storageBucket: "mern-estate-f4e5d.appspot.com",
  messagingSenderId: "443103573877",
  appId: "1:443103573877:web:b8ab14000a1d43f5f3c53c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);