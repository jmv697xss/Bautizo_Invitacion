document.addEventListener("DOMContentLoaded", () => {
    // 1. EFECTO TYPING SECUENCIAL CON APARICIÓN DE BOTÓN
    const textos = [
        { id: "type-title-1", text: "Mi Bautizo" },
        { id: "type-name-1", text: "Daniel" },
        { id: "type-title-2", text: "Mi Primera Comunión y Confirmación" },
        { id: "type-name-2", text: "Angel Said" },
        { id: "type-subtext", text: "Una fecha sagrada para compartir en familia." }];
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
                    setTimeout(escribirSecuencia, 200);}
            } else {
                textoIndex++;
                charIndex = 0;
                escribirSecuencia();}
        } else {
            // Muestra el botón de la portada una vez finalizado todo el texto
            const btnScroll = document.getElementById("btn-scroll");
            if (btnScroll) {
                btnScroll.classList.remove("btn-hidden");}}}
    escribirSecuencia();
    // 2. NAVEGACIÓN ENTRE SECCIONES (SCROLL SUAVE)
    const scrollMap = [
        { btnId: "btn-scroll", targetId: "mensajes-sec" },
        { btnId: "btn-to-family", targetId: "familia-sec" },
        { btnId: "btn-to-location", targetId: "ubicacion-sec" },
        { btnId: "btn-to-confirm", targetId: "confirmacion-sec" }];
    scrollMap.forEach(item => {
        const btn = document.getElementById(item.btnId);
        if (btn) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const target = document.getElementById(item.targetId);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });}});}});
    // 3. CONFIRMACIÓN POR WHATSAPP
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", (e) => {
            e.preventDefault();
            const telefono = "522229208594"; // Formato internacional con clave de país (+52 México)
            const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia para el Bautizo de Daniel y la Primera Comunión de Angel Said ✨");
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");});}
    document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");
    const verInvitacionBtn = document.querySelector(".card-content button, .card-content a"); // Ajusta al selector de tu botón "Ver invitación"
    let isPlaying = false;
    function playAudio() {
        if (!isPlaying) {
            music.play().then(() => {
                isPlaying = true;
                musicBtn.classList.add("playing");
                musicBtn.textContent = "🎵";
            }).catch(error => {
                console.log("El navegador bloqueó el autoplay inicial:", error);});}}
   document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");
    // Todos los botones que pueden iniciar interacción
    const actionButtons = document.querySelectorAll(".gold-btn, #music-toggle");
    let isPlaying = false;
    // Función para intentar reproducir audio
    function playAudio() {
        if (music && !isPlaying) {
            music.play().then(() => {
                isPlaying = true;
                if (musicBtn) {
                    musicBtn.classList.add("playing");
                    musicBtn.textContent = "🎵";}
            }).catch(error => {
                console.log("Esperando interacción del usuario para reproducir audio:", error);});}}
    // 1. Intentar reproducir al hacer primer clic o tap en cualquier parte de la pantalla
    document.body.addEventListener("click", playAudio, { once: true });
    document.body.addEventListener("touchstart", playAudio, { once: true });
    // 2. Control manual con el botón flotante 🎵 / 🔇
    if (musicBtn) {
        musicBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // Evita conflictos con el clic global
            if (isPlaying) {
                music.pause();
                isPlaying = false;
                musicBtn.classList.remove("playing");
                musicBtn.textContent = "🔇";
            } else {
                music.play();
                isPlaying = true;
                musicBtn.classList.add("playing");
                musicBtn.textContent = "🎵";}});}});});});