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

profileImage.addEventListener("click", (e) => {
  e.stopPropagation(); 
  flipCardInner.classList.add("flipped");
});

document.addEventListener("click", (e) => {
  const isClickInsideCard = e.target.closest(".profile-card");
  if (!isClickInsideCard && flipCardInner.classList.contains("flipped")) {
    flipCardInner.classList.remove("flipped");
  }
});
