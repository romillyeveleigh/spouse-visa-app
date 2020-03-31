import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAXDf2iNtfODm5znASXEsTvQ9pVvgsjXAk",
  authDomain: "visa-helper-3f74e.firebaseapp.com",
  databaseURL: "https://visa-helper-3f74e.firebaseio.com",
  projectId: "visa-helper-3f74e",
  storageBucket: "visa-helper-3f74e.appspot.com",
  messagingSenderId: 667872456937
});

export default app;

////
