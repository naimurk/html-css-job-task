const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


// document.addEventListener("scroll", function () {
//     const navbar = document.getElementById("navbar");
//     if (window.scrollY > 50) {
//       navbar.classList.remove("navbar-default");
//       navbar.classList.add("navbar-scroll");
//     } else {
//       navbar.classList.remove("navbar-scroll");
//       navbar.classList.add("navbar-default");
//     }
//   });
  