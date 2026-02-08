const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heart = document.getElementById("heart");
const card = document.querySelector(".card");
const title = card.querySelector("h1");

let btnX = 0;
let btnY = 0;

noBtn.style.position = "relative";

// reagujemy na RUCH MYSZY W KARCIE
card.addEventListener("mousemove", (e) => {
  const btnRect = noBtn.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const titleRect = title.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // środek przycisku
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  // dystans kursora od przycisku
  const distanceX = mouseX - btnCenterX;
  const distanceY = mouseY - btnCenterY;
  const distance = Math.hypot(distanceX, distanceY);

  const TRIGGER_DISTANCE = 120; // jak blisko trzeba być

  if (distance < TRIGGER_DISTANCE) {
    // kierunek ucieczki (od kursora)
    let moveX = distanceX > 0 ? -1 : 1;
    let moveY = distanceY > 0 ? -1 : 1;

    const STEP = 40;

    let newX = btnX + moveX * STEP;
    let newY = btnY + moveY * STEP;

    // GRANICE KARTY
    const padding = 20;

    const minX = cardRect.left - btnRect.left + padding;
    const maxX = cardRect.right - btnRect.right - padding;

    const minY = cardRect.top - btnRect.top + padding;
    const maxY = cardRect.bottom - btnRect.bottom - padding;

    // BLOKADA NACHODZENIA NA PYTANIE
    const futureTop = btnRect.top + newY;
    if (futureTop < titleRect.bottom + 20) {
      newY += STEP * 2; // ucieczka w dół
    }

    // jeśli brak miejsca → losowy teleport
    if (newX < minX || newX > maxX) {
      newX = Math.random() * (maxX - minX) + minX;
    }

    if (newY < minY || newY > maxY) {
      newY = Math.random() * (maxY - minY) + minY;
    }

    btnX = newX;
    btnY = newY;

    noBtn.style.transform = `translate(${btnX}px, ${btnY}px)`;
  }
});

// KLIK "TAK"
yesBtn.addEventListener("click", () => {
  heart.classList.add("show");
  yesBtn.textContent = "💖 ZAWSZE 💖";
  noBtn.style.display = "none";
});
