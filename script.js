// Contador de días hasta la boda
const fechaBoda = new Date("2026-04-21");
const contador = document.getElementById("contador");

function actualizarContador() {
  const hoy = new Date();
  const diferencia = fechaBoda - hoy;
  const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  contador.textContent = `${dias} días para nuestra boda 💍`;
}

actualizarContador();
setInterval(actualizarContador, 1000 * 60 * 60 * 24);

// Mostrar "Gracias" tras enviar el formulario
const form = document.getElementById("rsvp-form");
const gracias = document.getElementById("gracias");

form.addEventListener("submit", function(e){
  e.preventDefault(); // evita recarga
  gracias.style.display = "block";
  form.style.display = "none";

  // enviar datos a Formspree
  const action = form.action;
  const data = new FormData(form);

  fetch(action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    // opcional: manejar respuesta
  }).catch(error => {
    console.error('Error al enviar:', error);
  });
});

// Galería slider
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  if(index < 0) index = slides.length - 1;
  if(index >= slides.length) index = 0;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

// Inicializa
showSlide(0);

// Swipe touch para móviles
let startX = 0;
slidesContainer.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slidesContainer.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if(endX - startX > 50) {
    showSlide(currentIndex - 1); // swipe derecha
  } else if(startX - endX > 50) {
    showSlide(currentIndex + 1); // swipe izquierda
  }
});