// Base de Datos Local de EduNova
const usuariosDB = [
  // Perfiles de Alumnos
  { usuario: 'mateo12', contrasena: 'alumno2026', rol: 'alumno', nombre: 'Mateo' },
  { usuario: 'sofia_mr', contrasena: 'estudiante', rol: 'alumno', nombre: 'Sofía' },
  
  // Perfiles de Profesores
  { usuario: 'carlos_mza', contrasena: 'profemath', rol: 'profesor', nombre: 'Prof. Carlos Mendoza' },
  { usuario: 'ana_rod', contrasena: 'ciencias26', rol: 'profesor', nombre: 'Prof. Ana Rodríguez' }
];

// Aquí usamos 'formulario-login' que es el id real de tu línea 21
document.getElementById('formulario-login').addEventListener('submit', function(e) {
  e.preventDefault(); 

  // Ajustado a los IDs reales de tus líneas 24 y 29
  const usuarioInput = document.getElementById('usuario').value.trim();
  const contrasenaInput = document.getElementById('password').value;
  const mensajeError = document.getElementById('mensaje-error');

  console.log("-> Intentando ingresar en EduNova con:", usuarioInput);

  // Buscar coincidencia
  const usuarioEncontrado = usuariosDB.find(u => u.usuario === usuarioInput && u.contrasena === contrasenaInput);

  if (usuarioEncontrado) {
    if (mensajeError) mensajeError.classList.add('error-oculto');
    
    localStorage.setItem('usuarioNombre', usuarioEncontrado.nombre);
    console.log("-> Acceso concedido para el rol:", usuarioEncontrado.rol);

    // Redirección
    if (usuarioEncontrado.rol === 'alumno') {
      window.location.href = "../02-panel-principal/dashboard.html";
    } else if (usuarioEncontrado.rol === 'profesor') {
      window.location.href = "../02-panel-profesor/profesor.html";
    }
  } else {
    console.warn("-> Credenciales incorrectas.");
    if (mensajeError) {
      mensajeError.textContent = 'Usuario o contraseña incorrectos.';
      mensajeError.classList.remove('error-oculto');
    }
  }
});