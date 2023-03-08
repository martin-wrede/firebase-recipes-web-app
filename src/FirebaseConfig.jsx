import firebase from "firebase";

/*
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

*/
const config = {
    apiKey: "AIzaSyAFeYP2kb7SjkasLqR8eYmal1xW_VQMaaI",
    authDomain: "fir-recipes-9a215.firebaseapp.com",
    projectId: "fir-recipes-9a215",
    storageBucket: "fir-recipes-9a215.appspot.com",
    messagingSenderId: "552004081965",
    appId: "1:552004081965:web:6d67599261fe6598ad9ba4",
    measurementId: "G-M2ZDV4Y4Q1"
  };

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

export default firebase