const cord = document.getElementById("cord");
const cordTop = document.getElementById("cordTop");
const light = document.getElementById("light");
const helpMessage = document.getElementById("helpMessage");
const sliderContainer = document.getElementById("sliderContainer");
const slider = document.getElementById("slider");

let isDragging = false;
let startY = 0;
let currentY = 0;

// Inicializa o botão em uma posição aleatória
moveRandomly(sliderContainer);

// Evento para puxar a cordinha
cord.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    cord.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    if (deltaY >= 0 && deltaY <= 100) {
        currentY = deltaY;
        cord.style.height = `${150 + deltaY}px`;
    }
});

document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    if (currentY >= 80) {
        light.classList.add("show");
        helpMessage.classList.add("show");

        // Esconde a luz e o texto após 5 segundos
        setTimeout(() => {
            light.classList.remove("show");
            helpMessage.classList.remove("show");
            light.classList.add("hidden");
            helpMessage.classList.add("hidden");
        }, 5000);
    }

    cord.style.transition = "height 0.5s cubic-bezier(0.25, 1.5, 0.5, 1)";
    cord.style.height = "150px";
});

// Função para mover o botão para uma posição aleatória
function moveRandomly(element) {
    const randomTop = Math.random() * (window.innerHeight - 50);
    const randomLeft = Math.random() * (window.innerWidth - 50);
    element.style.top = `${randomTop}px`;
    element.style.left = `${randomLeft}px`;
}

// Torna o botão visível se o mouse passar por cima
sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.classList.add("visible");
});

// Evento para o botão deslizante
slider.addEventListener("click", () => {
    slider.classList.toggle("active");
    sliderContainer.classList.toggle("active");

    if (slider.classList.contains("active")) {
        // Redireciona para a página "login.html" após ativação
        window.location.href = "login.html";
    }
});