// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDwqKwVtjaiPBHbv0flBYfTI61QphfqLto",
  authDomain: "reactwiki-ece57.firebaseapp.com",
  projectId: "reactwiki-ece57",
  storageBucket: "reactwiki-ece57.appspot.com",
  messagingSenderId: "990906086582",
  appId: "1:990906086582:web:15a6ae4f6575ebb385e217",
  measurementId: "G-214W1KMMSN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
