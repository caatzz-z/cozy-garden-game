const flowerEmojis = ["🌸", "🌼", "🌻", "🌷", "💐", "🌹", "🌺"];
const garden = document.getElementById("garden");
const confettiContainer = document.getElementById("confetti");
const toggleBtn = document.getElementById("toggleDayNightBtn");

let flowerCount = 0;

function plantFlower(event) {
  const rect = garden.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent =
    flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
  flower.style.left = `${x - 10}px`;
  flower.style.top = `${y - 10}px`;

  garden.appendChild(flower);

  flowerCount++;
  if (flowerCount % 10 === 0) {
    triggerConfetti();
  }
}

function clearGarden() {
  garden.innerHTML = "";
  flowerCount = 0;
}

function triggerConfetti() {
  const pieces = 30;
  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");
    piece.style.left = `${Math.random() * window.innerWidth}px`;
    piece.style.top = `-10px`;
    piece.style.backgroundColor = randomColor();
    piece.style.animationDelay = `${Math.random()}s`;
    piece.style.width = `${5 + Math.random() * 5}px`;
    piece.style.height = piece.style.width;
    confettiContainer.appendChild(piece);

    piece.addEventListener("animationend", () => {
      piece.remove();
    });
  }
}

function randomColor() {
  const colors = ["#ff80aa", "#ffca80", "#80ffc9", "#80aaff", "#e080ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");
  if (document.body.classList.contains("night")) {
    toggleBtn.textContent = "☀️ turn on day mode!";
  } else {
    toggleBtn.textContent = "🌙 turn on night mode!";
  }
});
