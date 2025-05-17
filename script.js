// Toggle mobile nav
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Sticky Navbar Scroll Effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Hujan Karakter Jepang
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const japaneseChars =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンあいうえおかきくけこさしすせそたちつてとなにぬねの";
const chars = japaneseChars.split("");
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrixRain() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // transparan putih

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#444"; // abu gelap

  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.999) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  requestAnimationFrame(drawMatrixRain);
}
drawMatrixRain();

document.getElementById("year").textContent = new Date().getFullYear();
