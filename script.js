
const currentTimeElement = document.getElementById("current-time");

function updateTime() {
  const now = new Date();

  // getting the current time in milliseconds
  const milliseconds = now.getTime();

  currentTimeElement.textContent = `Current Time: ${milliseconds} ms`;
}

// to update every 1 second
setInterval(updateTime, 1000);

updateTime();


const profileCard = document.getElementById("profileCard");
const detailCard = document.getElementById("detailCard");
const showBtn = document.getElementById("showDetails");

// When clicking "Show Details" → shrink profile card & reveal details
showBtn.addEventListener("click", () => {
  profileCard.classList.add("shrink");
  detailCard.classList.add("show");
});

// When clicking image on detail card → reverse it back
detailCard.querySelector("img").addEventListener("click", () => {
  profileCard.classList.remove("shrink");
  detailCard.classList.remove("show");
});

