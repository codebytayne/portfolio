document.getElementById("en-btn").addEventListener("click", function() {
    console.log("Botão EN clicado");
    window.location.href = "indexEn.html";
});

document.getElementById("pt-btn").addEventListener("click", function() {
    console.log("Botão PT clicado");
    window.location.href = "index.html";
});

// Resto do seu código

const scrollContainer = document.querySelector('.box-main');
let isDown = false;
let startX;
let scrollLeft;
let startY;
let isScrollingVertically = false;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    startY = e.pageY; // Pega a posição Y inicial

    // Desativa o scroll vertical da página enquanto arrasta
    document.body.style.overflow = 'hidden';
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    // Restaura o scroll da página
    document.body.style.overflow = 'auto';
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    // Restaura o scroll da página
    document.body.style.overflow = 'auto';
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3; // Sensibilidade do scroll

    // Detecta movimento vertical
    if (Math.abs(e.pageY - startY) > 10) {
        isScrollingVertically = true;
    }

    if (!isScrollingVertically) {
        e.preventDefault(); // Previne o scroll da página se o movimento for horizontal
        scrollContainer.scrollLeft = scrollLeft - walk;
    }
});

// Detecta o scroll da página para o efeito sticky funcionar corretamente
scrollContainer.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
        isScrollingVertically = true; // Detecta scroll vertical
    }
});

scrollContainer.addEventListener('mouseleave', () => {
    isScrollingVertically = false;
    // Restaura o scroll da página
    document.body.style.overflow = 'auto';
});

scrollContainer.addEventListener('mouseup', () => {
    isScrollingVertically = false;
    // Restaura o scroll da página
    document.body.style.overflow = 'auto';
});

// Suporte para toques no mobile
scrollContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    startY = e.touches[0].pageY; // Pega a posição Y inicial

    document.body.style.overflow = 'hidden';
});

scrollContainer.addEventListener('touchend', () => {
    isDown = false;
    isScrollingVertically = false;
    document.body.style.overflow = 'auto'; // Restaura o scroll da página
});

scrollContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;

    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3;

    // Detecta movimento vertical no toque
    if (Math.abs(e.touches[0].pageY - startY) > 10) {
        isScrollingVertically = true;
    }

    if (!isScrollingVertically) {
        e.preventDefault(); // Previne o scroll da página se o movimento for horizontal
        scrollContainer.scrollLeft = scrollLeft - walk;
    }
});

// Navegação pelos botões
document.getElementById('next').addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 300, 
        behavior: 'smooth'
    });
});

document.getElementById('prev').addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -300, 
        behavior: 'smooth'
    });
});

// Impede que as imagens sejam arrastadas
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.setAttribute('draggable', false);
});
