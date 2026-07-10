
//slideshow function 
const slideshow = document.querySelectorAll('.hero-content')
let currentSlide = 0;
const slideInterval = 4000;

slideshow.forEach( slide => {
    const slideImg = slide.getAttribute('slides');
    if(slideImg){
        slide.style.backgroundImage = `url('${slides}')`;
    }
});

function nextSlide(){
    slideshow[currentSlide].classList.remove ('active')
    currentSlide = currentSlide(currentSlide + 1) % slide.length;
    slideshow[currentSlide].classList.add('active')
}

setInterval(nextSlide, slideInterval);