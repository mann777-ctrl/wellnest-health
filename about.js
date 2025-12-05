// Select all items that should scale
let scaleItems = document.querySelectorAll(
  ".platform-images img, .team-card"
);

scaleItems.forEach(function (item) {
  item.classList.add("scale-item");

  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});
