document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efecto Typing para "Daniel y Angel Said"
    const textoAEscribir = "Daniel y Angel Said";
    const elementoTexto = document.getElementById("typing-text");
    let indice = 0;

    function escribirNombre() {
        if (elementoTexto && indice < textoAEscribir.length) {
            elementoTexto.textContent += textoAEscribir.charAt(indice);
            indice++;
            setTimeout(escribirNombre, 120); // Velocidad de escritura por letra
        }
    }

    // Iniciar animación
    escribirNombre();

    // 2. Scroll suave hacia la sección de la FAMILIA (Papás y Padrinos)
    const btnScroll = document.getElementById("btn-scroll");
    if (btnScroll) {
        btnScroll.addEventListener("click", () => {
            const siguienteSeccion = document.getElementById("familia-sec");
            if (siguienteSeccion) {
                siguienteSeccion.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // 3. Confirmación vía WhatsApp
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", () => {
            const telefono = "522217636914"; // Tu número configurado
            const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia para la Primera Comunión de Daniel y Angel Said ✨");
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
        });
    }
});