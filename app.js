const navIcon = document.querySelector(".burger");
const nav = document.querySelector(".navbar__list");
const navItems = document.querySelectorAll(".navbar__item");

navIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
  //anim links
  navItems.forEach(function (link, index) {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinks .7s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});

//AOS
//AOS
AOS.init();
