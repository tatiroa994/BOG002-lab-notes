import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA88xtKb4kdh_bhlTeuuSVEhXnHASjZ3RU",
  authDomain: "labnotes2021.firebaseapp.com",
  projectId: "labnotes2021",
  storageBucket: "labnotes2021.appspot.com",
  messagingSenderId: "232431916595",
  appId: "1:232431916595:web:4b1ef558abe7f8af897546",
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
