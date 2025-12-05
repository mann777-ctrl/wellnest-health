let scaleItems = document.querySelectorAll(
  ".contact-box, .social-media img, .contact-form input, .contact-form textarea, .contact-form button"
);

// Add hover scale effect
scaleItems.forEach(function (item) {
  item.classList.add("scale-item");

  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});