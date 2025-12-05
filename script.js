
var bookBtn = document.querySelector(".book-btn");

if (bookBtn) {
  // Mouse hover effect
  bookBtn.addEventListener("mouseover", function() {
    console.log("User hovering over Book Appointment button");
    this.textContent = "Click to Book Now! 📅";
  });
  
  bookBtn.addEventListener("mouseout", function() {
    this.textContent = "Book an Appointment";
  })};
  


// 7. DOM MANIPULATION - Add interactive hover to service cards
var serviceCards = document.querySelectorAll(".service-cards .card");

serviceCards.forEach(function(card, index) {
  card.addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s";
    console.log("Hovering on service card:", index + 1);
  });
  
  card.addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
  });
});



