/**
 * Interactive Mouse-tracking Radial Glow Effect for Cards
 */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".bento-card, .hero-interactive-card, .skill-category-card, .timeline-card");

  cards.forEach(card => {
    // Add glow layer if not present
    if (!card.querySelector(".card-glow-layer")) {
      const glowLayer = document.createElement("div");
      glowLayer.className = "card-glow-layer";
      card.appendChild(glowLayer);
    }

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});
