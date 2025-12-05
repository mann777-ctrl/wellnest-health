// Select all doctor cards
let doctorCards = document.querySelectorAll(".doctor-cards .card");

doctorCards.forEach(function (card) {
  card.classList.add("scale-item");

  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});
