let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('nav .nav-btn');
const indicator = document.getElementById('slide-indicator');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Sembunyikan semua slide
    slides.forEach(slide => slide.classList.remove('active'));
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Tampilkan slide dengan jeda singkat untuk efek transisi mulus
    setTimeout(() => {
        slides[currentSlide].classList.add('active');
        navButtons[currentSlide].classList.add('active');
        indicator.innerText = `${currentSlide + 1} / ${slides.length}`;
    }, 50);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Navigasi Keyboard (Panah Kanan / Kiri)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});
