// Referencias globales
const video = document.getElementById("video");
const inputCode = document.getElementById("inputCode");
const btnContinuar = document.getElementById("btnContinuar");
const modal = document.getElementById("passwordModal");
const modalPasswordInput = document.getElementById("modalPasswordInput");
const submitPasswordBtn = document.getElementById("submitPasswordBtn");

let currentAudioIndex = null;

// Arrays de contraseñas y audios
const passwords = ["clave1", "clave2", "clave3"];
const audioFiles = ["accesoPermitido.mp3", "audio2.mp3", "audio3.mp3"];

// Mostrar modal al hacer click en íconos
document.querySelectorAll(".audio-icon-container").forEach((icon, index) => {
    icon.addEventListener("click", () => {
        currentAudioIndex = index;
        modal.style.display = "flex";
        modalPasswordInput.value = "";
        modalPasswordInput.focus();
    });
});

submitPasswordBtn.addEventListener("click", () => {
    const userInput = modalPasswordInput.value.toLowerCase(); // Convertir a minúscula
    const expectedPassword = passwords[currentAudioIndex].toLowerCase(); // Convertir también

    if (userInput === expectedPassword) {
        modalPasswordInput.style.border = "2px solid green";
        const audio = new Audio(audioFiles[currentAudioIndex]);
        audio.play();
        modal.style.display = "none";
        modalPasswordInput.style.border = ""; // Limpiar
    } else {
        modalPasswordInput.style.border = "2px solid red";
        playAccessDeniedSound();
        setTimeout(() => {
            modalPasswordInput.style.border = "";
        }, 2000);
    }
});

// Cerrar modal con Esc
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

// Video click play
document.addEventListener("click", () => {
    if (video.paused) video.play();
});

// Mostrar botón si hay texto
inputCode.addEventListener("input", () => {
    btnContinuar.style.display = inputCode.value ? "block" : "none";
});

// Validar clave principal
function validateInput() {
    if (inputCode.value.toUpperCase() === "LATIMED") {
        const successBlock = document.getElementById("successBlock");
        const successBlock1 = document.getElementById("successBlock1");
        successBlock1.style.opacity = "1";
        inputCode.style.border = "3px solid green";
        inputCode.style.boxShadow = "0px 0px 25px green";
        inputCode.style.background = "green";
        inputCode.style.color = "black";

        setTimeout(() => {
            playAccessGrantedSound();
            successBlock.style.display = "flex";
        }, 2000);
    } else {
        const errorBlock = document.getElementById("errorBlock");
        errorBlock.style.opacity = "1";
        inputCode.style.border = "4px solid red";
        playAccessDeniedSound();
        inputCode.style.boxShadow = "0px 0px 25px red";

        setTimeout(() => {
            errorBlock.style.opacity = "0";
            inputCode.style.border = "2px solid #ccc";
            inputCode.style.boxShadow = "0px 0px 25px #88888888";
        }, 3000);
    }
}

function playAccessDeniedSound() {
    const audio = new Audio("accesoDenegado.mp3");
    audio.play();
}

function playAccessGrantedSound() {
    const audio = new Audio("accesoPermitido.mp3");
    audio.play();
}

btnContinuar.addEventListener("click", validateInput);

window.onload = () => {
    inputCode.setAttribute("autocomplete", "off");
};

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validateInput();
    }
});

const closeModalBtn = document.querySelector(".close-modal");

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
