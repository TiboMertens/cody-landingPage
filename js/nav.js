// when dom is loaded
document.addEventListener("DOMContentLoaded", function () {
  // get the hamburger menu
  const hamburger = document.querySelector(".nav-hamburger");
  // get the dropdown menu
  const dropdown = document.querySelector(".nav-mobile-dropdown");

  // add click event listener to the hamburger menu
  hamburger.addEventListener("click", function () {
    // toggle the class 'active' on the dropdown menu
    dropdown.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
