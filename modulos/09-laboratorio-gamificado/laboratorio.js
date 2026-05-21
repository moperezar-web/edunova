let xpActual = 1250;
let nivelActual = 3;
const limiteXP = 2000;

document.querySelectorAll('.boton-reclamar').forEach(boton => {
  boton.addEventListener('click', function() {
    const tarjeta = this.closest('.tarjeta-mision');
    const xpPremio = parseInt(tarjeta.getAttribute('data-xp'));

    // Deshabilitar la misión completada
    this.disabled = true;
    this.textContent = "✓ Completado";
    this.style.backgroundColor = "var(--lineas-borde)";
    this.style.color = "var(--texto-mutado)";
    this.style.cursor = "not-allowed";

    // Sumar XP
    xpActual += xpPremio;

    // Verificar si sube de nivel
    if (xpActual >= limiteXP) {
      nivelActual += 1;
      xpActual = xpActual - limiteXP; // Conservar residuo
      
      // Actualizar Interfaz por subida de nivel
      document.getElementById('num-nivel').textContent = nivelActual;
      
      // Desbloquear Medalla Oculta (Logro alcanzado)
      const iconoMedalla = document.getElementById('badge-ia-medalla');
      iconoMedalla.classList.remove('bloqueada');
      iconoMedalla.textContent = "🤖";
      
      alert(`🎉 ¡LEVEL UP! ¡Subiste al Nivel ${nivelActual}! Has desbloqueado la medalla "Estratega IA".`);
    }

    // Actualizar los textos numéricos del marcador superior
    document.getElementById('txt-xp').textContent = `${xpActual} / ${limiteXP} XP`;
  });
});