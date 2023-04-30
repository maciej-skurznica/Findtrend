// @ts-nocheck
// navbar
const navbar = document.querySelector(".navbar");
const navbarTop = document.querySelector(".navbar-top");
const dropdownBtn = document.querySelector(".navbar-dropdown-btn");
const navbarMenu = document.querySelector(".navbar-dropdown-menu");
const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close");
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
  menuBtn.hidden = !menuBtn.hidden;
  closeBtn.hidden = !closeBtn.hidden;
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
