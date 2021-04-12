import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyA714l55Wt-hn9C7zIRXgkHk3JCw6mW2Ik",
    authDomain: "crowndb-e8742.firebaseapp.com",
    projectId: "crowndb-e8742",
    storageBucket: "crowndb-e8742.appspot.com",
    messagingSenderId: "84717204302",
    appId: "1:84717204302:web:351faa6253c0b69d6fe41f",
    measurementId: "G-PBJRVD4RC3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
