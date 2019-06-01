import firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "megan-bailey-portfolio.firebaseapp.com",
    databaseURL: "https://megan-bailey-portfolio.firebaseio.com",
    projectId: "megan-bailey-portfolio",
    storageBucket: "megan-bailey-portfolio.appspot.com",
    messagingSenderId: "530455761432",
    appId: "1:530455761432:web:5ff6b06f7331cf1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;