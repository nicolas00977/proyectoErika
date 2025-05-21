function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}
