function isIPhone() {
  return /iPhone/.test(navigator.userAgent) && !window.MSStream;
}

if (isIPhone()) {
  document.querySelector(".btn-container").style.display = "none";
  document.querySelector(".app-store-container").style.display = "block";
  // select s-hero::before
  const styleSheet = document.styleSheets[0];

  // Find the rule you want to modify
  for (let i = 0; i < styleSheet.cssRules.length; i++) {
    const rule = styleSheet.cssRules[i];

    if (rule.selectorText === ".s-hero::before") {
      // Modify the height and top properties
      rule.style.height = "30%";
      rule.style.top = "70%";
      break;
    }
  }
}
