const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heart = document.getElementById("heart");

// UCIEKANIE "NIE"
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 150 - 75;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// KLIK "TAK"
yesBtn.addEventListener("click", () => {
  heart.classList.add("show");
  yesBtn.textContent = "💖 ZAWSZE 💖";
  noBtn.style.display = "none";
});
