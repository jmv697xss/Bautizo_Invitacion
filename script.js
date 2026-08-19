document.addEventListener("DOMContentLoaded", () => {

    // 1. EFECTO TYPING SECUENCIAL CON APARICIÓN DE BOTÓN
    const textos = [
        { id: "type-title-1", text: "Mi Bautizo" },
        { id: "type-name-1", text: "Daniel" },
        { id: "type-title-2", text: "Mi Primera Comunión y Confirmación" },
        { id: "type-name-2", text: "Angel Said" },
        { id: "type-subtext", text: "Una fecha sagrada para compartir en familia." }
    ];

    let textoIndex = 0;
    let charIndex = 0;

    function escribirSecuencia() {
        if (textoIndex < textos.length) {
            const actual = textos[textoIndex];
            const elemento = document.getElementById(actual.id);

            if (elemento) {
                if (charIndex < actual.text.length) {
                    elemento.textContent += actual.text.charAt(charIndex);
                    charIndex++;
                    setTimeout(escribirSecuencia, 80);
                } else {
                    textoIndex++;
                    charIndex = 0;
                    setTimeout(escribirSecuencia, 200);
                }
            } else {
                textoIndex++;
                charIndex = 0;
                escribirSecuencia();
            }
        } else {
            // Muestra el botón de la portada una vez finalizado todo el texto
            const btnScroll = document.getElementById("btn-scroll");
            if (btnScroll) {
                btnScroll.classList.remove("btn-hidden");
            }
        }
    }

    escribirSecuencia();

    // 2. NAVEGACIÓN ENTRE SECCIONES
    const scrollMap = [
        { btnId: "btn-scroll", targetId: "mensajes-sec" },
        { btnId: "btn-to-family", targetId: "familia-sec" },
        { btnId: "btn-to-location", targetId: "ubicacion-sec" },
        { btnId: "btn-to-confirm", targetId: "confirmacion-sec" }
    ];

    scrollMap.forEach(item => {
        const btn = document.getElementById(item.btnId);
        if (btn) {
            btn.addEventListener("click", () => {
                const target = document.getElementById(item.targetId);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    });

    // 3. CONFIRMACIÓN POR WHATSAPP
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", () => {
            const telefono = "12229208594"; 
            const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia para el Bautizo de Daniel y la Primera Comunión de Angel Said ✨");
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
        });
    }
});
