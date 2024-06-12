function isIPhone() {
  return /iPhone/.test(navigator.userAgent) && !window.MSStream;
}

if (isIPhone()) {
  document.querySelector(".btn-container").style.display = "none";
  document.querySelector(".app-store-container").style.display = "block";
}
