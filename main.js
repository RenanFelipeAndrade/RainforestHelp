const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const section = document.querySelector("section");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  opacity.forEach((element) => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  });

  big_title.style.opacity = -scroll / (header_height / 2) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;

  content.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * 50 - 50
  }px)`;
  image_container.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;

  border.style.width = `${(scroll / (sectionY.top + section_height)) * 30}%`;
});

// Navbar
const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-list");
  const navList = document.querySelectorAll(".nav-list li");

  // Toggle nav
  burguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate list
    navList.forEach((list, index) => {
      if (list.style.animation) {
        list.style.animation = "";
      } else {
        list.style.animation = `navListFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // Burguer animation
    burguer.classList.toggle("toggle");
  });
};

navSlide();

// slider automatic

let counter = 0;
setInterval(function () {
  if (counter < 3) {
    document.querySelector(".carousel").scrollBy(300, 0);
    counter++;
  } else {
    document.querySelector(".carousel").scrollBy(-1200, 0);
    counter = 0;
  }
}, 5000);

document.querySelector(".carousel").addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    event.target.scrollBy(300, 0);
  } else {
    event.target.scrollBy(-300, 0);
  }
});
