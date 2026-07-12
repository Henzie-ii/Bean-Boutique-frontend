//========================
//  Index responsiveness
//=========================


// index slideshow responsiveness 
document.addEventListener("DOMContentLoaded", () => {

const wrapper = document.querySelector(".slideshow-wrapper")

const folderpath = "assets/images/ui/";
const images = ["equipment1.png", "screen3.jpg", "screen8.jpg", "screen9.jpg"];

let currentSlide = 0;
const slideInterval = 6000;

images.forEach((imageName, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if(index===0){
        slide.classList.add("active");
    }
    slide.style.backgroundImage = `url('${folderpath}${imageName}')`;
    wrapper.appendChild(slide);
});

const slides = document.querySelectorAll(".slide")

function nextSlide(){
    slides[currentSlide].classList.remove ('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, slideInterval);

}) ;