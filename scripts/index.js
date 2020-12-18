const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const navbar = document.getElementById("navbar");
const backScreen = document.getElementById("backScreen");
const titleTop = document.getElementById("title-top");
const titleCovid = document.getElementById("title-covid");

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
  titleCovid.classList.remove("titleToggle");
  titleCovid.classList.remove("show");
  titleTop.classList.remove("close");
  slider01.classList.add("slider-active");
  slider02.classList.remove("slider-active");
});

slider02.addEventListener("click", () => {
  header.classList.replace("slider-image01", "slider-image02");
  titleCovid.classList.add("titleToggle");
  titleCovid.classList.add("show");
  titleTop.classList.add("close");
  slider01.classList.remove("slider-active");
  slider02.classList.add("slider-active");
});


setInterval(() => {
  if (header.className === "slider-image01") {
    header.classList.replace("slider-image01", "slider-image02");
    titleCovid.classList.add("titleToggle");
    titleCovid.classList.add("show");
    titleTop.classList.add("close");
    slider01.classList.remove("slider-active");
    slider02.classList.add("slider-active");
  } else if (header.className === "slider-image02") {
    header.classList.replace("slider-image02", "slider-image01");
    titleCovid.classList.remove("titleToggle");
    titleCovid.classList.remove("show");
    titleTop.classList.remove("close");
    slider01.classList.add("slider-active");
    slider02.classList.remove("slider-active");
  } else {
    console.log("Doesn't work sliders");
  }
}, 8000);