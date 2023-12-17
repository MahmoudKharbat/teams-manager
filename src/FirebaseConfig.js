// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIka0xwxAD0GXLCnh-cfAShpyME_bRaXs",
  authDomain: "teams-manager-ee4dc.firebaseapp.com",
  projectId: "teams-manager-ee4dc",
  storageBucket: "teams-manager-ee4dc.appspot.com",
  messagingSenderId: "283547376101",
  appId: "1:283547376101:web:b4cb194b57d5c7b5d2f70c",
  measurementId: "G-41G0430LDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);