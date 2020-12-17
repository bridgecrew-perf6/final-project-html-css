// For header
const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const navbar = document.getElementById("navbar");
const backScreen = document.getElementById("backScreen");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("toggle");
  backScreen.classList.toggle("toggle");

  menuIcon.classList.toggle("menu-toggle");
  closeIcon.classList.toggle("close-toggle");
});

closeIcon.addEventListener("click", () => {
  navbar.classList.toggle("toggle");
  backScreen.classList.toggle("toggle");

  menuIcon.classList.toggle("menu-toggle");
  closeIcon.classList.toggle("close-toggle");
});

backScreen.addEventListener("click", () => {
  navbar.classList.toggle("toggle");
  backScreen.classList.toggle("toggle");

  menuIcon.classList.toggle("menu-toggle");
  closeIcon.classList.toggle("close-toggle");
});