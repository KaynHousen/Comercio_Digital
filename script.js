document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  document.getElementById("respuesta").textContent = `Gracias por tu mensaje, ${nombre}!`;
  this.reset();
});
