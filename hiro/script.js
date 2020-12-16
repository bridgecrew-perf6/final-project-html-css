const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const navbar = document.getElementById("navbar");
const backScreen = document.getElementById("backScreen");

// const isCheckWidth = () => {
//   if (window.innerWidth == 670) {
//     menuIcon.classList.remove("menu-toggle");
//     closeIcon.classList.remove("close-toggle");
//     navbar.classList.remove("navbar");
//     backScreen.classList.remove("backScreen");
//     console.log("test")
//   }
// }
// window.onresize = isCheckWidth;

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

// slider click
const slider01 = document.getElementById("slider01");
const slider02 = document.getElementById("slider02");
const header = document.getElementById("header");

slider01.addEventListener("click", () => {
  header.classList.replace("slider-image02", "slider-image01");
});

slider02.addEventListener("click", () => {
  header.classList.replace("slider-image01", "slider-image02");
});


setInterval(() => {
  if (header.className === "slider-image01") {
    header.classList.replace("slider-image01", "slider-image02");
  } else if (header.className === "slider-image02") {
    header.classList.replace("slider-image02", "slider-image01");
  } else {
    console.log("Doesn't work sliders");
  }
}, 6000);