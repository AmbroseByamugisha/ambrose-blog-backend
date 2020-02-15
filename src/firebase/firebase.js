import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "ambrose-blog-1.firebaseapp.com",
    databaseURL: "https://ambrose-blog-1.firebaseio.com",
    projectId: "ambrose-blog-1",
    storageBucket: "ambrose-blog-1.appspot.com",
    messagingSenderId: "614331767713",
    appId: "1:614331767713:web:ffde7ef5985c3e3a7e89e0",
    measurementId: "G-PMVL8FYDNV"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;