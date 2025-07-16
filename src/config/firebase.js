// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxKNDAzOMqvTL5_HLx6IgrPqT1EZ0AwkE",
  authDomain: "ohiogoldendoodles-5715a.firebaseapp.com",
  projectId: "ohiogoldendoodles-5715a",
  storageBucket: "ohiogoldendoodles-5715a.appspot.com",
  messagingSenderId: "90280093549",
  appId: "1:90280093549:web:30dc2538b128543bd3dc64",
  measurementId: "G-TSZJ7TWW90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { app, analytics, storage, ref, listAll, getDownloadURL, db, functions }; 