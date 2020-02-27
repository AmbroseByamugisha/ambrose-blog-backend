export const firebase = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "ambrose-blog-1.firebaseapp.com",
    databaseURL: "https://ambrose-blog-1.firebaseio.com",
    projectId: "ambrose-blog-1",
    storageBucket: "ambrose-blog-1.appspot.com",
    messagingSenderId: "614331767713",
    appId: "1:614331767713:web:ffde7ef5985c3e3a7e89e0",
    measurementId: "G-PMVL8FYDNV"
  }
  
  export const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Store in Firestore instead of Real Time DB
    enableLogging: false
  }
  
  export default { firebase, rrfConfig }