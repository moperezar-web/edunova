document.querySelectorAll('.fila-nota').forEach(fila => {
  fila.addEventListener('click', function() {
    const curso = this.querySelector('.nombre-materia').textContent;
    const nota = this.querySelector('.valor-nota').textContent;
    console.log(`Detalle de competencias consultado para: ${curso}`);
    alert(`Módulo de evaluación offline:\nHas alcanzado la calificación [${nota}] en ${curso}.`);
  });
});