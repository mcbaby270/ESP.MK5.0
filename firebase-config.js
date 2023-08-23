// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq-IaAC5_aCEaQ950gkBgEpbHj_4hUVzI",
  authDomain: "aquafeeder-a9d68.firebaseapp.com",
  databaseURL: "https://aquafeeder-a9d68-default-rtdb.firebaseio.com",
  projectId: "aquafeeder-a9d68",
  storageBucket: "aquafeeder-a9d68.appspot.com",
  messagingSenderId: "387880372575",
  appId: "1:387880372575:web:6858ba479ae87902e18eea",
  measurementId: "G-J1E31CNE67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseConfig = { ... };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default firebaseConfig;
