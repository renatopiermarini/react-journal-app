import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHj5IjiV6pKgELrAG4MKjEQVqSZQ7tSeA",
  authDomain: "react-app-cursos-fa528.firebaseapp.com",
  projectId: "react-app-cursos-fa528",
  storageBucket: "react-app-cursos-fa528.appspot.com",
  messagingSenderId: "341917501730",
  appId: "1:341917501730:web:6bf0b4e3a5910efbd67d7b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
