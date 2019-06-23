import firebase from 'firebase';
import Rebase from 're-base';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  });
  // Initialize Firebase
  const base = Rebase.createClass(firebaseApp.database());

  export {firebaseApp};
  
  export default base;
