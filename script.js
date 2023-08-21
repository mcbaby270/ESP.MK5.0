import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './firebase-config.js'; // Import the Firebase configuration

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = firebase.database();

document.addEventListener("DOMContentLoaded", () => {
    const feedNowButton = document.getElementById("feedNowButton");
    const feedTimeInput = document.getElementById("feedTime");
    const scheduleButton = document.getElementById("scheduleButton");
  
    // Handle "Feed Now" button click
    feedNowButton.addEventListener("click", () => {
      feedNow();
    });
  
    // Handle "Schedule Feeding" button click
    scheduleButton.addEventListener("click", () => {
      const selectedTime = feedTimeInput.value;
      if (selectedTime) {
        scheduleFeeding(selectedTime);
      }
    });
  
    function feedNow() {
      // Send a command to ESP8266 to trigger feeding immediately
      // Implement your communication logic here (e.g., using HTTP requests)
      // Example: Use fetch() to send a request to your ESP8266 endpoint
      // fetch("ESP8266_FEED_NOW_ENDPOINT");
    }
  
    function scheduleFeeding(time) {
      // Store the scheduled feeding time in Firebase
      const scheduledRef = database.ref("feedings").push();
      scheduledRef.set({
        time: time
      });
    }
});
