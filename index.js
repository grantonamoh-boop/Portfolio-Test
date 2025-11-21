// =============================
// INDEX PAGE JS (Automatic background slideshow + parallax + Back-to-top)
// =============================

const layers = document.querySelectorAll('.parallax-bg');
let current = 0;
const total = layers.length;

// Initialize layers: only the first visible
layers.forEach((layer, index) => {
    layer.style.opacity = index === 0 ? '1' : '0';
    layer.style.transition = 'opacity 1.5s ease-in-out';
});

// Automatic background slider every 5 seconds
setInterval(() => {
    layers[current].style.opacity = '0';
    current = (current + 1) % total;
    layers[current].style.opacity = '1';
}, 5000);

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    layers.forEach(layer => {
        const speed = parseFloat(layer.dataset.speed);
        layer.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // Show/hide back-to-top button
    const backBtn = document.getElementById('backToTop');
    if(scrollY > 300) backBtn.classList.add('show');
    else backBtn.classList.remove('show');
});

// Back-to-top button smooth scroll
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
