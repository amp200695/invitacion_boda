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
