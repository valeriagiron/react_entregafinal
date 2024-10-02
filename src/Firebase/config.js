// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB8mUHHD4_sueGGWM5Xne0284lRm5z-pc",
  authDomain: "coderhouse-487c2.firebaseapp.com",
  projectId: "coderhouse-487c2",
  storageBucket: "coderhouse-487c2.appspot.com",
  messagingSenderId: "1058923196391",
  appId: "1:1058923196391:web:03056161535b7ee1e89742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializamos la BD
export const db = getFirestore(app);
export default db;