const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
const navDots = document.querySelectorAll(".slider-nav a");
let currentIndex = 0;
const slideInterval = 3000; // Change image every 3 seconds

function updateNavDots() {
    navDots.forEach((dot, index) => {
        dot.style.opacity = index === currentIndex ? "1" : "0.5"; // Active dot full opacity
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to first slide
    const newPosition = slides[currentIndex].offsetLeft;
    slider.scrollTo({ left: newPosition, behavior: "smooth" });
    updateNavDots();
}

// Auto-slide every few seconds
setInterval(nextSlide, slideInterval);

// Initial state update
updateNavDots();