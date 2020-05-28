import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDXGgiayqWYi_71WxwZHxQtrt3qggQWLB4",
    authDomain: "crwn-db-a5db4.firebaseapp.com",
    databaseURL: "https://crwn-db-a5db4.firebaseio.com",
    projectId: "crwn-db-a5db4",
    storageBucket: "crwn-db-a5db4.appspot.com",
    messagingSenderId: "129199701439",
    appId: "1:129199701439:web:3eefdd768c375af9abb50a",
    measurementId: "G-8D7RXX8XMD"
  };

  export const createUserProfileDocument = async(userAuth,additionalData) =>{
    if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); 

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;

  }
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


export default firebase;