const sliderContainer = document.querySelector('.slider-container');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const horizontalStrip = document.querySelector('.horizontal-strip');

let currentIndex = 0;
function updateSlider() {
    const newPosition = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${newPosition}vw)`;
}

//auto slide
function autoSlide() {
    currentIndex = (currentIndex + 1) % radioButtons.length;
    updateSlider();
    showHorizontalStrip();
}

setInterval(autoSlide, 3000);

radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        currentIndex = index;
        updateSlider();
        showHorizontalStrip();
    });
});

//to next page
function goToMainPage() {
    window.location.href = 'main-page.html';
}
