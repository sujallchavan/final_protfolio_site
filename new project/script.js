function updateClock() {
  const now = new Date();

  // Get hours, minutes, and seconds
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Update the time in the DOM
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Update the date
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    weekday: "short",
  };
  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-US",
    options
  );
}

// Initialize the clock and update every second
updateClock();
setInterval(updateClock, 1000);
