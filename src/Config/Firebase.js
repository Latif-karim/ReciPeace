// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMQqZ8WVsPGxzOTwoWlkhMkA8nT44onss",
  authDomain: "project-65819.firebaseapp.com",
  projectId: "project-65819",
  storageBucket: "project-65819.appspot.com",
  messagingSenderId: "60117881112",
  appId: "1:60117881112:web:3da80c43a781fa5fa5ce6d",
  measurementId: "G-69S47FQ23F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)
export const google = new GoogleAuthProvider()
export const db = getFirestore(app)
export const analytics = getAnalytics(app);