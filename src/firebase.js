import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_ucy7yhZjtpgin3Drvm_2IjTVFFXKme0",
  authDomain: "trailflix.firebaseapp.com",
  databaseURL: "https://trailflix.firebaseio.com",
  projectId: "trailflix",
  storageBucket: "trailflix.appspot.com",
  messagingSenderId: "500601627326",
  appId: "1:500601627326:web:3849f04c0bd5348e0074ef",
  measurementId: "G-NT2NB88Y7L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
