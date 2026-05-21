document.querySelectorAll('.tarjeta-materia').forEach(tarjeta => {
  tarjeta.addEventListener('click', function() {
    const nombreMateria = this.querySelector('h3').textContent;
    console.log(`Abriendo contenido de: ${nombreMateria}`);
    alert(`Entrando al aula virtual de: ${nombreMateria}`);
  });
});