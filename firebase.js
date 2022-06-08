import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAFyl_FkN7AivPkwbCcN3iYJ42yw--GHsg",
  authDomain: "to-do-list-app-5e74d.firebaseapp.com",
  projectId: "to-do-list-app-5e74d",
  storageBucket: "to-do-list-app-5e74d.appspot.com",
  messagingSenderId: "608694591671",
  appId: "1:608694591671:web:650342bf467c89cd2aed32",
  measurementId: "G-QN5KLEWNTT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}