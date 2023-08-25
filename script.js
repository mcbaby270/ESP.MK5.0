// script.js
import { app, database } from './firebase-config.js';

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
            const scheduledRef = push(ref(database, "feedings"));
            set(scheduledRef, { time: selectedTime });
            console.log("Scheduled feeding:", selectedTime);
        }
    }
});

