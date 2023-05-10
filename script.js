// @ts-nocheck
// navbar
const navbar = document.querySelector(".navbar");
const navbarTop = document.querySelector(".navbar-top");
const dropdownBtn = document.querySelector(".navbar-dropdown-btn");
const navbarMenu = document.querySelector(".navbar-dropdown-menu");
const icon = document.querySelector(".hamburger-icon");
const allMenuItems = document.querySelectorAll(".navbar-links a, .navbar-btns button");
// section-4-table
const table = document.querySelector(".section-4-table");
// section-5-platforms-icons
const socialPlatformsContainer = document.querySelector(".section-5-platforms-icons");
// section-6
const toggleBtn = document.querySelector(".toggle-wrapper input");
const card1Price = document.querySelector("#card-1");
const card2Price = document.querySelector("#card-2");
const card3Price = document.querySelector("#card-3");

// navbar
const handleDropdownClick = () => {
  navbar.classList.toggle("full-height");
  navbarTop.classList.toggle("navbar-top-active");
  navbarMenu.classList.toggle("navbar-dropdown-menu-active");
  icon.classList.toggle("hamburger-transform");
};

dropdownBtn.addEventListener("click", () => handleDropdownClick());

allMenuItems.forEach((link) => {
  link.addEventListener("click", () => handleDropdownClick());
});

// section-4-table
for (let i = 0; i < 16; i++) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("table-wrapper");

  const img = document.createElement("img");
  img.src = `./assets/images/brand${i + 1}.png`;
  img.alt = `brand${i + 1}`;

  wrapper.appendChild(img);
  table.appendChild(wrapper);
}

// section-5-platforms-icons
const onIconWrapperClick = (event) => {
  const currentHighlighted = document.querySelector(".icon-wrapper.highlighted");
  if (currentHighlighted) currentHighlighted.classList.remove("highlighted");
  event.currentTarget.classList.add("highlighted");
};

for (let i = 8; i > 0; i--) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("icon-wrapper");
  if (i === 7) wrapper.classList.add("highlighted");

  const img = document.createElement("img");
  img.src = `./assets/images/social media${i}.png`;
  img.alt = `platform${i}`;

  wrapper.addEventListener("click", onIconWrapperClick);
  wrapper.appendChild(img);
  socialPlatformsContainer.appendChild(wrapper);
}

// section-6
const handleToggleClick = () => {
  if (toggleBtn.checked) {
    card1Price.innerHTML = "$86.40 <span>/Year</span>";
    card2Price.innerHTML = "$216 <span>/Year</span>";
    card3Price.innerHTML = "$518.40 <span>/Year</span>";
  } else {
    card1Price.innerHTML = "$8 <span>/Month</span>";
    card2Price.innerHTML = "$20 <span>/Month</span>";
    card3Price.innerHTML = "$48 <span>/Month</span>";
  }
};

toggleBtn.addEventListener("click", () => handleToggleClick());

// animations
// global
gsap.utils
  .toArray("h2:not(.section-1-h2), p:not(.section-1-paragraphs p)")
  .forEach((h2) => {
    gsap.from(h2, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.5,
      scrollTrigger: {
        trigger: h2,
        start: "top 80%",
      },
    });
  });

ScrollTrigger.create({
  trigger: ".section-3",
  start: "top top",
  pin: true,
  pinSpacing: false,
});

// section-1 animations
const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0, ease: "power1.out" } });
tl.from(".section-1-h2", { y: 50, stagger: 0.5 })
  .from(".section-1-paragraphs p span", { stagger: 0.1 }, 0.75)
  .from(".button-wrapper-gsap", { y: -130 }, 0);

gsap.from(".section-1-tab", {
  duration: 1,
  opacity: 0,
  y: 50,
  scale: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section-1-tab",
    start: "top 85%",
    end: "bottom 30%",
  },
});

gsap.to(".section-1-tab", {
  x: 3000,
  rotate: 100,
  stagger: 0.2,
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".section-1-tab",
    start: "top 28%",
    scrub: 2,
    toggleActions: "restart none none reverse",
  },
});

// section-4 animations
gsap.from(".table-wrapper", {
  duration: 0.5,
  scale: 0,
  opacity: 0,
  y: 60,
  scrollTrigger: {
    trigger: ".table-wrapper",
    start: "top 60%",
  },
});

// section-6 animations
gsap.from(".section-6-card", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "back",
  scrollTrigger: {
    trigger: ".section-6-card",
    start: "top 70%",
  },
});
