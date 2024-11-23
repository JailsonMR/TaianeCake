let count = 1;
const totalSlides = 5;

// Inicia o slide no primeiro
document.getElementById("radio1").checked = true;

// Define o intervalo para mudar os slides automaticamente
let slideInterval = setInterval(function() { 
    nextImage();
}, 4000); // Troca de slide a cada 4 segundos

// Função para mover para o próximo slide automaticamente
function nextImage() {
    count++;
    if (count > totalSlides) {
        count = 1; // Volta ao primeiro slide após o último
    }
    updateSlide(count); // Chama a função que move o slide
}

// Função para mover o slide correspondente ao número
function updateSlide(slideNumber) {
    const slideContainer = document.getElementById("slides");
    document.getElementById("radio" + slideNumber).checked = true; // Atualiza o radio
    slideContainer.style.marginLeft = `-${(slideNumber - 1) * 100}%`; // Move o slide
}

// Adiciona eventos de clique nos radio buttons para navegação manual
for (let i = 1; i <= totalSlides; i++) {
    document.getElementById("radio" + i).addEventListener("click", function() {
        clearInterval(slideInterval); // Para a auto-transição ao clicar manualmente
        count = i; // Atualiza o contador para o slide correspondente
        updateSlide(count); // Move o slide para o que foi clicado

        // Reinicia o intervalo após a navegação manual
        slideInterval = setInterval(function() { 
            nextImage();
        }, 4000);
    });
}

// Função para mover ao próximo slide ao clicar no botão "next"
document.getElementById("btn-next").addEventListener("click", function() {
    clearInterval(slideInterval);
    count++;
    if (count > totalSlides) {
        count = 1;
    }
    updateSlide(count);
    resetInterval();
});

// Função para mover ao slide anterior ao clicar no botão "previous"
document.getElementById("btn-previous").addEventListener("click", function() {
    clearInterval(slideInterval);
    count--;
    if (count < 1) {
        count = totalSlides;
    }
    updateSlide(count);
    resetInterval();
});

// Reinicia o intervalo de auto-transição
function resetInterval() {
    slideInterval = setInterval(function() { 
        nextImage();
    }, 4000);
}