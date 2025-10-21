
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(link =>
    link.addEventListener("click", () => navMenu.classList.remove("active"))
  );

