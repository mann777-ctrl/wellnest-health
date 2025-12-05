// Select all service cards
let cards = document.querySelectorAll(".service-cards .card");

cards.forEach(function (card) {
  card.classList.add("scale-item");

  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});
