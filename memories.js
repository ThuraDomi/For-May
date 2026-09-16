const cards = document.querySelectorAll(".memory-card");
window.addEventListener("DOMContentLoaded", () => {
  cards.forEach(card => card.classList.add("ready"));
});
