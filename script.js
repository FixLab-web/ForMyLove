
// ========================================
// ELEMENTOS
// ========================================

const formulario = document.getElementById("login-form");
const mensajeError = document.getElementById("error-message");

const loginScreen = document.getElementById("login-screen");
const transitionScreen = document.getElementById("transition-screen");
const loadingText = document.getElementById("loading-text");

const loveScreen = document.getElementById("love-screen");
const continueButton = document.getElementById("continue-button");

const letterScreen = document.getElementById("letter-screen");
const nextLetterButton = document.getElementById("next-letter");

const letterSections = document.querySelectorAll(".letter-section");

let currentSection = 0;
let changingSection = false;


// ========================================
// CREDENCIALES
// ========================================

const usuarioCorrecto = "Anai";
const contrasenaCorrecta = "campo";


// ========================================
// LOGIN
// ========================================

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("password").value;


    if (
        usuario === usuarioCorrecto &&
        contrasena === contrasenaCorrecta
    ) {

        mensajeError.textContent = "";

        loginScreen.style.display = "none";

        transitionScreen.style.display = "flex";

        setTimeout(() => {
            transitionScreen.style.opacity = "1";
        }, 50);


        setTimeout(() => {
            loadingText.textContent =
                "Credenciales verificadas.";
        }, 1800);


        setTimeout(() => {
            loadingText.textContent =
                "Preparando contenido...";
        }, 3200);


        setTimeout(() => {
            loadingText.textContent =
                "Un momento...";
        }, 4600);


        setTimeout(() => {

            transitionScreen.style.opacity = "0";

            setTimeout(() => {

                transitionScreen.style.display = "none";

                loveScreen.style.display = "flex";

                setTimeout(() => {
                    loveScreen.style.opacity = "1";
                }, 100);

            }, 1000);

        }, 6000);


    } else {

        mensajeError.textContent =
            "Usuario o contraseña incorrectos.";

    }

});


// ========================================
// PASAR A LA CARTA
// ========================================

continueButton.addEventListener("click", function () {

    loveScreen.style.opacity = "0";

    setTimeout(() => {

        loveScreen.style.display = "none";

        letterScreen.style.display = "flex";

        setTimeout(() => {
            letterScreen.style.opacity = "1";
        }, 100);

    }, 1000);

});


// ========================================
// TRANSICIÓN ENTRE SECCIONES
// ========================================

nextLetterButton.addEventListener("click", function () {

    // Evita pulsaciones rápidas
    if (changingSection) {
        return;
    }

    // Si estamos en la última sección,
    // no hacemos nada.
    if (currentSection >= letterSections.length - 1) {
        return;
    }

    changingSection = true;


    // ========================================
    // DESAPARECER SECCIÓN ACTUAL
    // ========================================

    const current = letterSections[currentSection];

    current.style.opacity = "0";
    current.style.transform = "translateY(-15px)";


    // ========================================
    // ESPERAR ANTES DE MOSTRAR LA SIGUIENTE
    // ========================================

    setTimeout(() => {

        current.classList.remove("active");

        current.style.transform = "translateY(15px)";


        currentSection++;

        const next = letterSections[currentSection];

        next.classList.add("active");


        // La nueva sección comienza ligeramente abajo
        // y transparente.

        next.style.opacity = "0";
        next.style.transform = "translateY(15px)";


        // Forzar un pequeño cambio antes de animar
        setTimeout(() => {

            next.style.opacity = "1";
            next.style.transform = "translateY(0)";

            changingSection = false;

        }, 50);


        // Cambiar texto del botón al llegar al final

        if (currentSection === letterSections.length - 1) {

            nextLetterButton.textContent = "♡";

        }

    }, 700);

});
