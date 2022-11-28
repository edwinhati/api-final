// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJF32Bz-CPtOg7kK_n1n6aBhQUSOU-jPM",
  authDomain: "mad-final-e91ee.firebaseapp.com",
  databaseURL: "https://mad-final-e91ee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mad-final-e91ee",
  storageBucket: "mad-final-e91ee.appspot.com",
  messagingSenderId: "110195333006",
  appId: "1:110195333006:web:62fd721126e299afef36df",
  measurementId: "G-T7DL0LPT12"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = firebase;