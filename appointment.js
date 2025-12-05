let toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";  // Show sun for light mode
  } else {
    toggleBtn.textContent = "🌙";  // Show moon for dark mode
  }
});
