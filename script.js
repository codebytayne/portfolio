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

// Adiciona evento de clique e arrasto no desktop
scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3; // Ajuste a sensibilidade
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Adiciona suporte para toque (mobile)
scrollContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3;
    scrollContainer.scrollLeft = scrollLeft - walk;
});

scrollContainer.addEventListener('touchend', () => {
    isDown = false;
});

// Botões de navegação 
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

// Impede que imagens sejam arrastadas
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.setAttribute('draggable', false);
});
