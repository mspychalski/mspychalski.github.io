const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heart = document.getElementById("heart");

// UCIEKANIE PRZYCISKU "NIE"
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// KLIKNIĘCIE "TAK"
yesBtn.addEventListener("click", () => {
  heart.classList.add("show");
  yesBtn.textContent = "💖 ZAWSZE 💖";
  noBtn.style.display = "none";
});
