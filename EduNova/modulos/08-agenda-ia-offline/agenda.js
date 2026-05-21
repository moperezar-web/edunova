const checkboxes = document.querySelectorAll('.ia-trigger');
const medidorTexto = document.getElementById('valor-estres');
const medidorContenedor = document.querySelector('.circulo-progreso-ia');
const recomendacion = document.getElementById('recomendacion-ia');

checkboxes.forEach(box => {
  box.addEventListener('change', calcularCargaAcademica);
});

function calcularCargaAcademica() {
  let estresTotal = 0;

  // Sumar el peso de todas las tareas seleccionadas
  checkboxes.forEach(box => {
    if (box.checked) {
      estresTotal += parseInt(box.getAttribute('data-peso'));
    }
  });

  // Evaluar estados predictivos basados en el resultado acumulado
  if (estresTotal === 0) {
    medidorTexto.textContent = "Mínimo";
    medidorContenedor.style.borderColor = "var(--lineas-borde)";
    recomendacion.textContent = "Selecciona tus tareas pendientes abajo para activar el análisis predictivo.";
  } 
  else if (estresTotal > 0 && estresTotal <= 30) {
    medidorTexto.textContent = "Ligero";
    medidorContenedor.style.borderColor = "var(--primary)";
    recomendacion.textContent = "🔋 Carga ideal. Te sugerimos avanzar hoy un 20% del trabajo de Arte para mantener tu agenda despejada.";
  } 
  else if (estresTotal > 30 && estresTotal <= 65) {
    medidorTexto.textContent = "Moderado";
    medidorContenedor.style.borderColor = "var(--warning)";
    recomendacion.textContent = "⚠️ Tu fin de semana se puede saturar. Te recomendamos Priorizar Álgebra primero, ya que consume mayor demanda cognitiva.";
  } 
  else {
    medidorTexto.textContent = "¡Sobrecarga!";
    medidorContenedor.style.borderColor = "var(--danger)";
    recomendacion.textContent = "🚨 Alerta de congestión escolar. No empieces más tareas nuevas. Te recomendamos usar la Red Local P2P para coordinar un grupo de estudio.";
  }
}