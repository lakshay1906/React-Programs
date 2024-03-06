document.addEventListener("DOMContentLoaded", function () {
  var shadow = document.querySelector(".shadow");
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll down
      shadow.style.opacity = "1"; // Make shadow visible
    } else {
      // Scroll up
      shadow.style.opacity = "0"; // Hide shadow
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});
