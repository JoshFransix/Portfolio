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

const cursor = document.querySelector(".cursor");
// const allLinks = document.querySelectorAll("a");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// allLinks.addEventListener("mouseover", (e) => {
//   e.style.color = "red";
// });

// var scrollEventHandler = function () {
//   window.scroll(0, window.pageYOffset);
// };

// window.addEventListener("scroll", scrollEventHandler, false);

// return Math.round(Math.random()) - 0.5;
