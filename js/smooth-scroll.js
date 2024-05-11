document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling when clicking on links with class "smooth-scroll"
  let smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  smoothScrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Get the target element's ID from the href attribute
      let targetId = this.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);

      // Smooth scroll to the target element
      if (targetElement) {
        let targetOffsetTop = targetElement.offsetTop;
        let duration = 500;
        smoothScrollTo(targetOffsetTop, duration);
      }
    });
  });

  // Smooth scroll function
  function smoothScrollTo(targetPosition, duration) {
    let startPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    let startTime = null;

    function scrollTo(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let percentage = Math.min(progress / duration, 1);
      window.scrollTo(
        0,
        startPosition + (targetPosition - startPosition) * percentage
      );

      if (progress < duration) {
        requestAnimationFrame(scrollTo);
      }
    }

    requestAnimationFrame(scrollTo);
  }
});
