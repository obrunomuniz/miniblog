import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRgqBhnvkxLs5239HlQysQFC9PxIQtM50",
  authDomain: "miniblog-5a54e.firebaseapp.com",
  projectId: "miniblog-5a54e",
  storageBucket: "miniblog-5a54e.appspot.com",
  messagingSenderId: "467039427536",
  appId: "1:467039427536:web:6d78c7a0a1a66d4872f7d5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };