// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7toRH3QN5YGI8BzSX6OFVIuOuWu4UVNQ",
  authDomain: "pokemon-2b242.firebaseapp.com",
  projectId: "pokemon-2b242",
  storageBucket: "pokemon-2b242.appspot.com",
  messagingSenderId: "1031156455516",
  appId: "1:1031156455516:web:23709de2a36423f9a02e99",
  measurementId: "G-83KBXBQZ5F",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {};
