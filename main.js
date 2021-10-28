const hamburger = document.querySelector(".hamburger");

const body = document.querySelector("body");

const navLinks = document.querySelector(".nav-links");

const links = document.querySelectorAll(".nav-links li");

const header = document.querySelector("#header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-open");
  // lines.classList.toggle("line-open");
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

// const cursor = document.querySelector(".cursor");
// // const allLinks = document.querySelectorAll("a");
// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
// });

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
