const hamburger = document.querySelector(".hamburger");

const body = document.querySelector("body");

const navMenu = document.querySelector(".nav-links");

const navLinks = document.querySelectorAll(".nav-item");

const header = document.querySelector("#header");

const blurBg = document.querySelector(".bg-blur");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("hamburger-open");
  navMenu.classList.toggle("open");

  navLinks.forEach((navLinks) => {
    navLinks.classList.toggle("fade");
  });
}

navLinks.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("hamburger-open");
  body.classList.remove("lock-scroll");
  navMenu.classList.remove("open");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("fade");
  });
}

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px 10px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

const projectsBtn = document.querySelector(".projectsBtn");
const staticProjects = document.querySelector(".staticProjects-content");

projectsBtn.addEventListener("click", () => {
  staticProjects.classList.toggle("show");
  if (staticProjects.classList.contains("show")) {
    projectsBtn.innerText = "Show Less";
  } else {
    projectsBtn.innerText = "Static Landing Pages";
  }
});

// const formBtn = document.querySelector(".formBtn");

// formBtn.addEventListener("click", validateInput);

// function validateInput(e) {
//   let output = "";
//   formInput.forEach(function () {
//     if (formInput.value === "") {
//       formInput.style.borderColor = "#ce1678";
//       output = `<h3>Please fill in the form correctly</h3>`;
//       formMessage.innerHTML = output;
//     }
//     e.preventDefault();
//   });
// }
