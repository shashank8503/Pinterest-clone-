import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBecch4m5BRRyCvkBT2y9CLf4-oxSGudIs",
    authDomain: "pinterest-18ce1.firebaseapp.com",
    databaseURL: "https://pinterest-18ce1-default-rtdb.firebaseio.com",
    projectId: "pinterest-18ce1",
    storageBucket: "pinterest-18ce1.appspot.com",
    messagingSenderId: "635079626720",
    appId: "1:635079626720:web:24b2f99939563bcbc62585",
    measurementId: "G-1JR2P90GR5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =  firebase.auth();
  export {db ,auth};