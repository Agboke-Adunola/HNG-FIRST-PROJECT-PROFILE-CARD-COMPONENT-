const currentTimeElement = document.getElementById("current-time");

function updateTime() {
  const now = new Date();
  const milliseconds = now.getTime();
  currentTimeElement.textContent = `Current Time: ${milliseconds} ms`;
}

setInterval(updateTime, 1000);
updateTime();

// Flip functionality
const flipCardInner = document.querySelector(".flip-card-inner");
const profileImage = document.querySelector(".profile-image img");
const cardBack = document.querySelector(".card-back");

// Flip open when image clicked
profileImage.addEventListener("click", (e) => {
  e.stopPropagation();
  flipCardInner.classList.add("flipped");
});

cardBack.addEventListener("click", (e) => {
  // Check if click target is NOT a button, link, or interactive element
  const isInteractive = e.target.closest("button, a, input, textarea, select");
  if (!isInteractive) {
    flipCardInner.classList.remove("flipped");
  }
});

// Flip back when clicking outside the card
document.addEventListener("click", (e) => {
  const isClickInsideCard = e.target.closest(".profile-card");
  if (!isClickInsideCard && flipCardInner.classList.contains("flipped")) {
    flipCardInner.classList.remove("flipped");
  }
});
