document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".boton");
  if (boton) {
    boton.addEventListener("click", function () {
      alert("¡Gracias por tu interés en CaféYa! ☕");
    });
  }
});