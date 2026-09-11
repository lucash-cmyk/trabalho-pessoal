// ==============================
// CONFIGURAÇÕES
// ==============================
const startDate = new Date(2024, 4, 1, 0, 0, 0); // 01/05/2024
const youtubeId = "Af7ieNv0wXY";

const photos = [
  { src: "imagens/foto-1.jpeg", caption: "o começo de muitos momentos ❤️" },
  { src: "imagens/foto-2.jpeg", caption: "nós dois, do nosso jeitinho" },
  { src: "imagens/foto-3.jpeg", caption: "um dos nossos sorrisos" },
  { src: "imagens/foto-4.jpeg", caption: "onde eu só queria estar: com você" },
  { src: "imagens/foto-5.jpeg", caption: "mais um pedacinho da nossa história" },
  { src: "imagens/foto-6.jpeg", caption: "você faz tudo ficar melhor" },
  { src: "imagens/foto-7.jpeg", caption: "momentos que eu quero guardar" },
  { src: "imagens/foto-8.jpeg", caption: "até os dias simples são especiais" },
  { src: "imagens/foto-9.jpeg", caption: "que sorte a minha ter você" },
  { src: "imagens/foto-10.jpeg", caption: "nosso amor em cada detalhe" },
  { src: "imagens/foto-11.jpeg", caption: "mais uma memória pra nossa coleção" },
  { src: "imagens/foto-12.jpeg", caption: "e que venham muitos outros momentos ❤️" }
];

// ==============================
// CONTADOR
// ==============================
function updateCounter() {
  const now = new Date();

  // Anos e meses pelo calendário
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Totais corridos
  const totalSeconds = Math.floor((now - startDate) / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = Math.floor(totalDays / 7);

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = years * 12 + months;
  document.getElementById("weeks").textContent = totalWeeks;
  document.getElementById("days").textContent = totalDays;
  document.getElementById("hours").textContent = totalHours;
  document.getElementById("minutes").textContent = totalMinutes;
  document.getElementById("seconds").textContent = totalSeconds;
}

updateCounter();
setInterval(updateCounter, 1000);

// ==============================
// GALERIA
// ==============================
const image = document.getElementById("galleryImage");
const caption = document.getElementById("photoCaption");
const dotsContainer = document.getElementById("dots");
let currentPhoto = 0;
let slideshow;

photos.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (index === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Ir para foto ${index + 1}`);
  dot.addEventListener("click", () => {
    showPhoto(index);
    restartSlideshow();
  });
  dotsContainer.appendChild(dot);
});

function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;

  image.style.opacity = "0";

  setTimeout(() => {
    image.src = photos[currentPhoto].src;
    caption.textContent = photos[currentPhoto].caption;
    image.style.opacity = "1";
  }, 130);

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentPhoto);
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  showPhoto(currentPhoto - 1);
  restartSlideshow();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  showPhoto(currentPhoto + 1);
  restartSlideshow();
});

function restartSlideshow() {
  clearInterval(slideshow);
  slideshow = setInterval(() => showPhoto(currentPhoto + 1), 4500);
}

restartSlideshow();

// ==============================
// YOUTUBE / MÚSICA
// ==============================
const musicBtn = document.getElementById("musicBtn");
const player = document.getElementById("youtubePlayer");

musicBtn.addEventListener("click", () => {
  player.style.display = "block";
  player.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&rel=0"
      title="Nossa música"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
  musicBtn.textContent = "♫ Tocando";
});
