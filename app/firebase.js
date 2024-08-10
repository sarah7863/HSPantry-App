// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSMUk0WCcAIei8SOIMWOTb1EQCOZxt8iQ",
  authDomain: "hspantryapp-64276.firebaseapp.com",
  projectId: "hspantryapp-64276",
  storageBucket: "hspantryapp-64276.appspot.com",
  messagingSenderId: "857150537811",
  appId: "1:857150537811:web:b6e6caccfb75dd109146a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}