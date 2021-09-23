const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
// const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-open");
  // lines.classList.toggle("line-open");
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

// var scrollEventHandler = function () {
//   window.scroll(0, window.pageYOffset);
// };

// window.addEventListener("scroll", scrollEventHandler, false);

// return Math.round(Math.random()) - 0.5;
