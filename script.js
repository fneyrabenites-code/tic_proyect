// Crea el botón y lo agrega a la página
const boton = document.createElement("button");
boton.id = "subir";
boton.textContent = "↑";
document.body.appendChild(boton);

// Lo muestra solo cuando bajas más de 400px
window.addEventListener("scroll", () => {
  boton.style.display = window.scrollY > 400 ? "block" : "none";
});

// Al hacer clic, sube suavemente
boton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});