// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDmfURG_6tDw7RirnYcEsCpfE32N4drv8",
  authDomain: "exam-form-137ab.firebaseapp.com",
  projectId: "exam-form-137ab",
  storageBucket: "exam-form-137ab.firebasestorage.app",
  messagingSenderId: "473226211207",
  appId: "1:473226211207:web:c84f331a5a5e005a5fad22",
  measurementId: "G-NPC047NGEG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);