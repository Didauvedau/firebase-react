// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/firestore";

import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-iD8AQ-K52iOjS2k3-7RZ4L9k1iQmglo",
  authDomain: "todo-list-redux-next.firebaseapp.com",
  projectId: "todo-list-redux-next",
  storageBucket: "todo-list-redux-next.appspot.com",
  messagingSenderId: "176532326606",
  appId: "1:176532326606:web:1e76849d95721ef1df289f",
  measurementId: "G-Z49ZBXZMYW",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
