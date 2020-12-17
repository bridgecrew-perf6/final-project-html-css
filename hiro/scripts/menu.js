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


// For menu
const lunchTab = document.getElementById("lunchTab");
const dinnerTab = document.getElementById("dinnerTab");
const happyHourTab = document.getElementById("happyHourTab");

const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const happyHour = document.getElementById("happyHour");

lunchTab.addEventListener("click", () => {
  lunch.classList.replace("hidden", "show");
  lunchTab.classList.add("focus");
  dinner.classList.replace("show", "hidden");
  dinnerTab.classList.remove("focus");
  happyHour.classList.replace("show", "hidden");
  happyHourTab.classList.remove("focus");
});

dinnerTab.addEventListener("click", () => {
  lunch.classList.replace("show", "hidden");
  lunchTab.classList.remove("focus");
  dinner.classList.replace("hidden", "show");
  dinnerTab.classList.add("focus");
  happyHour.classList.replace("show", "hidden");
  happyHourTab.classList.remove("focus");
});

happyHourTab.addEventListener("click", () => {
  lunch.classList.replace("show", "hidden");
  lunchTab.classList.remove("focus");
  dinner.classList.replace("show", "hidden");
  dinnerTab.classList.remove("focus");
  happyHour.classList.replace("hidden", "show");
  happyHourTab.classList.add("focus");
});