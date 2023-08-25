// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your Firebase configuration object
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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };

