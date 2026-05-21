const inputArchivo = document.getElementById('input-archivo-local');
const contenedor = document.getElementById('contenedor-transferencias');
const zonaDrop = document.getElementById('zona-arrastre');

// Manejar la selección del archivo
inputArchivo.addEventListener('change', function(e) {
  if (this.files.length === 0) return;
  const archivo = this.files[0];
  inyectarArchivoEnRed(archivo.name);
});

// Simular el arrastre visual
zonaDrop.addEventListener('dragover', (e) => { e.preventDefault(); zonaDrop.classList.add('arrastrando'); });
zonaDrop.addEventListener('dragleave', () => zonaDrop.classList.remove('arrastrando'));
zonaDrop.addEventListener('drop', (e) => {
  e.preventDefault();
  zonaDrop.classList.remove('arrastrando');
  if (e.dataTransfer.files.length > 0) {
    inyectarArchivoEnRed(e.dataTransfer.files[0].name);
  }
});

function inyectarArchivoEnRed(nombreArchivo) {
  const nuevoItem = document.createElement('div');
  nuevoItem.classList.add('item-transferencia');
  nuevoItem.innerHTML = `
    <span>📁 ${nombreArchivo}</span>
    <span class="meta-p2p" style="color: var(--primary);">Esparciendo en la Intranet...</span>
  `;
  
  contenedor.insertBefore(nuevoItem, contenedor.firstChild);

  // Simular que viaja por la red coaxial e inunda las demás PCs en 2 segundos
  setTimeout(() => {
    nuevoItem.querySelector('.meta-p2p').textContent = 'Compartido con éxito P2P';
    nuevoItem.querySelector('.meta-p2p').style.color = 'var(--success)';
  }, 2000);
}