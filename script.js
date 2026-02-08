const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heart = document.getElementById("heart");
const card = document.querySelector(".card");
const title = card.querySelector("h1");

let posX = 0;
let posY = 0;

noBtn.style.position = "relative";

card.addEventListener("mousemove", (e) => {
  const btnRect = noBtn.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const titleRect = title.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  const dx = btnCenterX - mouseX;
  const dy = btnCenterY - mouseY;
  const distance = Math.hypot(dx, dy);

  const TRIGGER = 140;      // dystans reakcji
  const SPEED = 6;          // płynność (im mniejsze tym lepiej)

  if (distance < TRIGGER) {
    // normalizacja wektora
    const nx = dx / distance;
    const ny = dy / distance;

    let newX = posX + nx * SPEED;
    let newY = posY + ny * SPEED;

    // GRANICE KARTY
    const padding = 20;

    const minX = cardRect.left - btnRect.left + padding;
    const maxX = cardRect.right - btnRect.right - padding;

    const minY = cardRect.top - btnRect.top + padding;
    const maxY = cardRect.bottom - btnRect.bottom - padding;

    // BLOKADA PYTANIA
    const futureTop = btnRect.top + newY;
    if (futureTop < titleRect.bottom + 20) {
      newY += SPEED * 2;
    }

    // CLAMP (zamiast teleportu)
    posX = Math.max(minX, Math.min(maxX, newX));
    posY = Math.max(minY, Math.min(maxY, newY));

    noBtn.style.transform = `translate(${posX}px, ${posY}px)`;
  }
});

// KLIK "TAK"
yesBtn.addEventListener("click", () => {
  heart.classList.add("show");
  yesBtn.textContent = "💖 ZAWSZE 💖";
  noBtn.style.display = "none";
});
