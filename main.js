const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-open");
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
