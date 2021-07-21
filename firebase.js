// // import * as firebase from "firebase";
// import "firebase/firebase-firestore";
// import firebase from "firebase/app";

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCW_XQcz6PiDUYL_lM8JAiEY4RCfD9bFeI",
//     authDomain: "chapsnat-ssoto.firebaseapp.com",
//     projectId: "chapsnat-ssoto",
//     storageBucket: "chapsnat-ssoto.appspot.com",
//     messagingSenderId: "398462105152",
//     appId: "1:398462105152:web:9fe052b15eab082f37d1a5"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// let firestore = firebase.firestore();

// export default firestore;

import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";


// Your web app's Firebase configuration, which you copy-pasted from Step 6
const firebaseConfig = {
  apiKey: "AIzaSyC7CQwBSzjC_tlEiMd2Mc8Sh9Fb_Cwc1p8",
  authDomain: "chapsnat-3f4f7.firebaseapp.com",
  projectId: "chapsnat-3f4f7",
  storageBucket: "chapsnat-3f4f7.appspot.com",
  messagingSenderId: "239440555368",
  appId: "1:239440555368:web:d7d431a3733e778d273add",
  measurementId: "G-W4Y70B8JL2",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;