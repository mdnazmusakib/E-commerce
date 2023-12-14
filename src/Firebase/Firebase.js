// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ0miotNZw02b5IaATpGwHdoJqcB2zTiM",
  authDomain: "test-login-f68ba.firebaseapp.com",
  projectId: "test-login-f68ba",
  storageBucket: "test-login-f68ba.appspot.com",
  messagingSenderId: "682992475756",
  appId: "1:682992475756:web:c7a0e9cad75fdb50f10249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export {auth};