import firebase from 'firebase';
import Rebase from 're-base';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOi3KCbZew-wcySM6JrT2s9cr6j8nYMGY",
    authDomain: "message-board-22823.firebaseapp.com",
    databaseURL: "https://message-board-22823.firebaseio.com",
    projectId: "message-board-22823",
    storageBucket: "",
    messagingSenderId: "638525910634",
    appId: "1:638525910634:web:171bb4d67e661f7b"
  });
  // Initialize Firebase
  const base = Rebase.createClass(firebaseApp.database());

  export {firebaseApp};
  
  export default base;