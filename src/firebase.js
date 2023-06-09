// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWdc1szmh5-ovFcVHQqif8MObyJEjyh9I",
  authDomain: "clone-2c571.firebaseapp.com",
  projectId: "clone-2c571",
  storageBucket: "clone-2c571.appspot.com",
  messagingSenderId: "854493785550",
  appId: "1:854493785550:web:6c65bac0709233fe5c4f9f",
  measurementId: "G-CDWCNPCPX0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
