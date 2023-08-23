import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from './firebase-config.js';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener("DOMContentLoaded", () => {
  const feedNowButton = document.getElementById("feedNowButton");
  const feedTimeInput = document.getElementById("feedTime");
  const scheduleButton = document.getElementById("scheduleButton");

  feedNowButton.addEventListener("click", feedNow);
  scheduleButton.addEventListener("click", scheduleFeeding);

  function feedNow() {
    // Implement your feedNow logic here
    console.log("Feed Now clicked");
  }

  function scheduleFeeding() {
    const selectedTime = feedTimeInput.value;
    if (selectedTime) {
      const scheduledRef = database.ref("feedings").push();
      scheduledRef.set({ time: selectedTime });
      console.log("Scheduled feeding:", selectedTime);
    }
  }
});
