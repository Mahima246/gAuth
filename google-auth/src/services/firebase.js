import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKdZkcRqYTzvMuODS08sGw85z86Tvu4_0",
    authDomain: "aistylist-ff7e4.firebaseapp.com",
    projectId: "aistylist-ff7e4",
    storageBucket: "aistylist-ff7e4.appspot.com",
    messagingSenderId: "371865221985",
    appId: "1:371865221985:web:308b3cc5a3963237222320"
  };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);