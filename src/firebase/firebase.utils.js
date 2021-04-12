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
  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(! snapshot.exists)
    {
        const {displayName, email} =userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error)
        {
            console.error('error creating user', error.message);
        }
    }
    return userRef;
  }
  export default firebase;
