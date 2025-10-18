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
