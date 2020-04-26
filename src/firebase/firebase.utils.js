import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCMqO4jtMPN7skENqElKZ6cB5VdyErXoYI',
    authDomain: "e-comm-dbr.firebaseapp.com",
    databaseURL: "https://e-comm-dbr.firebaseio.com",
    projectId: "e-comm-dbr",
    storageBucket: "e-comm-dbr.appspot.com",
    messagingSenderId: "820021714476",
    appId: "1:820021714476:web:8e8c68b92f22d01fa9fb89",
    measurementId: "G-9XF6MZ5NH3"
  };


  export const createUserProfileDocument= async(userAuth, additionalData )=>{
    if(!userAuth) return;

      const userRef= firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const{displayName, email} = userAuth;
        const createAt=new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData
          })
        }catch(error){
          console.log('error creating user', error.message)
        }

      }

      return userRef;

  }


  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//   google autent
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;