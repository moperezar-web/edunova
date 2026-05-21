// Recuperar el nombre del docente que inició sesión
const nombreProfesor = localStorage.getItem('usuarioNombre') || 'Profesor Interconectado';

// Pintar el nombre en la interfaz
document.getElementById('nombre-profe-pantalla').textContent = `👤 ${nombreProfesor}`;
document.getElementById('saludo-docente').textContent = `Panel de Control: ${nombreProfesor}`;

// Registro de Calificaciones
document.getElementById('btn-guardar-nota').addEventListener('click', function() {
  const alumno = document.getElementById('select-alumno').value;
  const nota = document.getElementById('select-nota').value;

  if (!alumno) {
    alert("Por favor, selecciona un alumno de la lista.");
    return;
  }

  alert(`⚙️ Registro Exitoso:\nSe ha subido la nota [${nota}] para el alumno ${alumno} en el servidor central de EduNova.`);
});

// Lanzamiento de misiones
let retosContador = 2;
document.getElementById('btn-lanzar-mision').addEventListener('click', function() {
  const titulo = document.getElementById('input-mision-titulo').value.trim();
  const xp = document.getElementById('input-mision-xp').value;

  if (!titulo || !xp) {
    alert("Completa los datos del reto.");
    return;
  }

  retosContador++;
  document.getElementById('contador-retos-profe').textContent = retosContador;

  alert(`🚀 Reto P2P Enviado:\nLa misión "${titulo}" (+${xp} XP) ya está disponible en la interfaz de los alumnos conectados.`);
  
  document.getElementById('input-mision-titulo').value = '';
  document.getElementById('input-mision-xp').value = '';
});