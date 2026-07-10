//========================
//  Index responsiveness
//=========================


//slideshow responsiveness 
document.addEventListener("DOMContentLoaded", () => {
const slideShow = document.querySelectorAll('.hero-content');
let currentSlide = 0;
const slideInterval = 4000;

slideshow.forEach(slide => {
    const backgroundImages = slide.getAttribute('slides');
    if(backgroundImages){
        slide.style.backgroundImage = `url('${backgroundImages}')`;
    }
});

function nextSlide(){
    slideShow[currentSlide].classList.remove ('active');
    currentSlide = currentSlide(currentSlide + 1) % slide.length;
    slideShow[currentSlide].classList.add('active');
}

setInterval(nextSlide, slideInterval);

}) ;