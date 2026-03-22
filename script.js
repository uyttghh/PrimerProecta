/* --- JS LOGIC --- */

// Mobile Menu Toggle
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Modal Logic
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('.open-modal-btn');
const closeBtn = document.querySelector('.close-modal');

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Simple Slider Logic
let currentSlide = 0;
const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}