document.getElementById('buscador-libros').addEventListener('input', function(e) {
  const busqueda = e.target.value.toLowerCase().trim();
  const libros = document.querySelectorAll('.tarjeta-libro');

  libros.forEach(libro => {
    const textoLibro = libro.getAttribute('data-titulo');
    
    // Si el texto del buscador coincide con los datos del libro, lo muestra, si no, lo oculta
    if (textoLibro.includes(busqueda)) {
      libro.style.display = 'flex';
    } else {
      libro.style.display = 'none';
    }
  });
});

// Mensaje interactivo al abrir un documento
document.querySelectorAll('.boton-descargar').forEach(boton => {
  boton.addEventListener('click', function() {
    const titulo = this.closest('.libro-detalles').querySelector('h3').textContent;
    alert(`Abriendo el lector local integrado para:\n"${titulo}"`);
  });
});