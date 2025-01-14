// navbar
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.pageYOffset > 0);
});

// side window
const toggleButton = document.getElementById('toggleButton');
const sideWindow = document.getElementById('sideWindow');
const closeButton = document.getElementById('closeButton');
const overlay = document.getElementById('overlay');

// Open/Close the side window when the toggle button is clicked
toggleButton.addEventListener('click', () => {
    sideWindow.classList.toggle('open');
    overlay.classList.toggle('active');
});

// Close the side window when the close button is clicked
closeButton.addEventListener('click', () => {
    sideWindow.classList.remove('open');
    overlay.classList.remove('active');
});

// Close the side window when clicking on the overlay
overlay.addEventListener('click', () => {
    sideWindow.classList.remove('open');
    overlay.classList.remove('active');
});

// Optional: Close side window when clicking outside (on document)
document.addEventListener('click', (event) => {
    if (!sideWindow.contains(event.target) && !toggleButton.contains(event.target) && !overlay.contains(event.target)) {
        sideWindow.classList.remove('open');
        overlay.classList.remove('active');
    }
});


// carousel

const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds

// Show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

// Move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Automatic slide movement
setInterval(nextSlide, slideInterval);

// Initialize the first slide
showSlide(currentSlide);