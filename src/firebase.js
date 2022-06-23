// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import 'firebase/compat/auth';
//import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFMB2lpcZUdqjMz7NLQQFt_sv2ZtPqevw",
  authDomain: "tesla-clone-yt-3c609.firebaseapp.com",
  projectId: "tesla-clone-yt-3c609",
  storageBucket: "tesla-clone-yt-3c609.appspot.com",
  messagingSenderId: "129509848110",
  appId: "1:129509848110:web:a3221042d8d6dfcd729bbf"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }