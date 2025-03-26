document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
    const alarmInput = document.getElementById("alarmTime");
    const setAlarmButton = document.getElementById("setAlarm");
    const stopwatchDisplay = document.getElementById("stopwatchDisplay");
    const startStopwatchButton = document.getElementById("startStopwatch");
    const pauseStopwatchButton = document.getElementById("pauseStopwatch");
    const resetStopwatchButton = document.getElementById("resetStopwatch");
    const timerMinutesInput = document.getElementById("timerMinutes");
    const timerSecondsInput = document.getElementById("timerSeconds");
    const startTimerButton = document.getElementById("startTimer");
    const countdownDisplay = document.getElementById("countdownDisplay");
    const progressBar = document.getElementById("progressBar");
  
    let alarmTimes = [];
    let stopwatchInterval, stopwatchTime = 0, stopwatchRunning = false;
    let timerInterval, countdownTime = 0;
  
    // Update Clock
    function updateClock() {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
      dateElement.textContent = now.toDateString();
  
      // Check Alarms
      alarmTimes.forEach((alarm, index) => {
        if (alarm === `${hours}:${minutes} ${ampm}`) {
          alert("Alarm ringing!");
          alarmTimes.splice(index, 1); // Remove the triggered alarm
        }
      });
    }
    setInterval(updateClock, 1000);
  
    // Alarm System
    setAlarmButton.addEventListener("click", () => {
      const alarmTime = alarmInput.value;
      if (alarmTime) {
        alarmTimes.push(alarmTime.toUpperCase());
        alert(`Alarm set for ${alarmTime}`);
      }
    });
  
    // Stopwatch
    function updateStopwatch() {
      stopwatchTime++;
      const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
      const seconds = String(stopwatchTime % 60).padStart(2, '0');
      stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
  
    startStopwatchButton.addEventListener("click", () => {
      if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 1000);
      }
    });
  
    pauseStopwatchButton.addEventListener("click", () => {
      stopwatchRunning = false;
      clearInterval(stopwatchInterval);
    });
  
    resetStopwatchButton.addEventListener("click", () => {
      stopwatchRunning = false;
      clearInterval(stopwatchInterval);
      stopwatchTime = 0;
      stopwatchDisplay.textContent = "00:00:00";
    });
  
    // Countdown Timer
    function updateTimer() {
      if (countdownTime > 0) {
        countdownTime--;
        const minutes = String(Math.floor(countdownTime / 60)).padStart(2, '0');
        const seconds = String(countdownTime % 60).padStart(2, '0');
        countdownDisplay.textContent = `${minutes}:${seconds}`;
        progressBar.style.width = `${(countdownTime / (countdownTime + 1)) * 100}%`;
      } else {
        clearInterval(timerInterval);
        alert("Time's up!");
      }
    }
  
    startTimerButton.addEventListener("click", () => {
      const minutes = parseInt(timerMinutesInput.value, 10) || 0;
      const seconds = parseInt(timerSecondsInput.value, 10) || 0;
      countdownTime = minutes * 60 + seconds;
  
      if (countdownTime > 0) {
        countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        progressBar.style.width = "100%";
        timerInterval = setInterval(updateTimer, 1000);
      } else {
        alert("Please enter a valid time!");
      }
    });
  
    // Theme Switcher Functionality
    const themeButtons = document.querySelectorAll(".theme-btn");
    themeButtons.forEach(button => {
      button.addEventListener("click", () => {
        const theme = button.dataset.theme;
  
        // Remove existing theme classes from the body
        document.body.classList.remove("light", "dark", "neon", "custom");
  
        // Add the selected theme class to the body
        document.body.classList.add(theme);
      });
    });
  });
// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById("clock");
  
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
  
    // Update the clock every second
    setInterval(updateClock, 1000);
  
    // Initialize the clock immediately
    updateClock();
  });
  document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
  
    function updateClock() {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      const formattedDate = now.toDateString(); // Format the date
  
      clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
      dateElement.textContent = formattedDate;
    }
  
    // Update the clock every second
    setInterval(updateClock, 1000);
  
    // Initialize the clock immediately
    updateClock();
  });
  document.addEventListener("DOMContentLoaded", () => {
    const alarmInput = document.getElementById("alarmTime");
    const setAlarmButton = document.getElementById("setAlarm");
    let alarmTime = null;
  
    // Function to check and trigger the alarm
    function checkAlarm() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const currentTime = `${hours}:${minutes}`;
  
      if (alarmTime === currentTime) {
        alert("Alarm ringing!");
        setAlarmButton.classList.add("shake"); // Add shake animation to the button
  
        // Automatically stop the shake animation after 3 seconds
        setTimeout(() => {
          setAlarmButton.classList.remove("shake");
        }, 3000);
      }
    }
  
    // Set the alarm
    setAlarmButton.addEventListener("click", () => {
      if (alarmTime) {
        // If an alarm is already set, clicking will reset it
        alarmTime = null;
        alarmInput.value = ""; // Clear the alarm input field
        alert("Alarm disabled!");
      } else {
        // If no alarm is set, clicking will set a new alarm
        alarmTime = alarmInput.value; // Get the alarm time
        if (alarmTime) {
          alert(`Alarm set for ${alarmTime}`);
        } else {
          alert("Please set a valid time for the alarm.");
        }
      }
    });
  
    // Check the alarm every second
    setInterval(checkAlarm, 1000);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
    const themeButtons = document.querySelectorAll(".theme-btn");
  
    // Clock Update Functionality
    function updateClock() {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
      dateElement.textContent = now.toDateString();
    }
    setInterval(updateClock, 1000);
    updateClock();
  
    // Theme Switcher Functionality
    themeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const theme = button.dataset.theme;
  
        // Remove existing theme classes
        document.body.classList.remove("light", "dark", "neon", "custom");
  
        if (theme === "custom") {
          // Prompt the user for a custom color
          const customColor = prompt("Enter a hex color code or color name (e.g., #ff5733 or blue):");
          if (customColor) {
            document.body.style.backgroundColor = customColor; // Apply the custom color
          } else {
            alert("No color entered! Keeping the current theme.");
          }
        } else {
          document.body.classList.add(theme);
          document.body.style.backgroundColor = ""; // Reset custom color if another theme is selected
        }
      });
    });
  });
  
  
  