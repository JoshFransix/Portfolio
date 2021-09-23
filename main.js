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

// return Math.round(Math.random()) - 0.5;
