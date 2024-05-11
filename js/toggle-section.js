function toggleSwitch(type) {
  // Remove 'active' class from all switch items
  document.querySelectorAll(".switch-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' class to the clicked switch item
  document.querySelector(".switch-item." + type).classList.add("active");

  // Hide all 'how-it-works' divs
  document
    .querySelectorAll(".how-it-works-owner, .how-it-works-company")
    .forEach((item) => {
      item.style.display = "none";
    });

  // Show the corresponding 'how-it-works' div
  document.querySelector(".how-it-works-" + type).style.display = "block";
}
