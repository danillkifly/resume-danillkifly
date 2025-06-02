const githubBtn = document.getElementById("githubLink");

githubBtn.addEventListener("click", () => {
  window.open("https://github.com/danillkifly/resume-me", "_blank");
});

// Clock
setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // <-- 24 jam format
  });
  document.getElementById("clock").textContent = time;
}, 1000);

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkToggle");
  const html = document.documentElement;

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    toggle.classList.toggle("fa-sun");
    toggle.classList.toggle("fa-moon");
  });
});

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

let stars = [];

const colors = ["yellow", "white", "#00BFFF"]; // kuning, putih, biru (DeepSkyBlue)

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.2 + 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const star of stars) {
    ctx.fillStyle = star.color;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
      star.color = colors[Math.floor(Math.random() * colors.length)];
    }
  }
  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
drawStars();

const playToggle = document.querySelector(".fa-play");
const audio = document.getElementById("bgMusic");

let isPlaying = false;

playToggle.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playToggle.classList.remove("fa-play");
    playToggle.classList.add("fa-pause");
  } else {
    audio.pause();
    playToggle.classList.remove("fa-pause");
    playToggle.classList.add("fa-play");
  }
  isPlaying = !isPlaying;
});

const texts = document.querySelectorAll(".hoverText");
const images = document.querySelectorAll(".hoverImage");

texts.forEach((text, i) => {
  const img = images[i];

  text.addEventListener("mouseenter", () => {
    gsap.to(img, {
      duration: 0.4,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    });
  });

  text.addEventListener("mouseleave", () => {
    gsap.to(img, {
      duration: 0.3,
      opacity: 0,
      scale: 0.8,
      ease: "power2.in",
    });
  });

  text.addEventListener("mousemove", (e) => {
    const rect = text.getBoundingClientRect();
    const x = e.clientX - rect.right;
    const y = e.clientY - rect.top;

    gsap.to(img, {
      x: x + 20,
      y: y + 20,
      duration: 0.2,
      ease: "power2.out",
    });
  });
});
