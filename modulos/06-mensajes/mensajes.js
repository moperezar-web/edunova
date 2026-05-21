document.getElementById('form-chat').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('input-mensaje');
  const texto = input.value.trim();
  if (!texto) return;

  const cajaMensajes = document.getElementById('caja-mensajes');

  // Obtener hora actual en formato de 12 horas
  const ahora = new Date();
  const horaEstilo = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Crear la burbuja del mensaje enviado dinámicamente
  const nuevoMensaje = document.createElement('div');
  nuevoMensaje.classList.add('mensaje', 'enviado');
  nuevoMensaje.innerHTML = `
    <p>${texto}</p>
    <span class="hora">${horaEstilo}</span>
  `;

  // Insertar en el chat y hacer auto-scroll
  cajaMensajes.appendChild(nuevoMensaje);
  cajaMensajes.scrollTop = cajaMensajes.scrollHeight;

  // Limpiar el input
  input.value = '';
});