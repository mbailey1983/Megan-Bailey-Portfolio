import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: 'megan-bailey-portfolio',
  storageBucket: 'megan-bailey-portfolio.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSGSENDINGID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};
// Initialize Firebase
firebase.initializeApp(config);
export default firebase;
