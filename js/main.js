
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


//popup modal
window.addEventListener("DOMContentLoaded", () =>{
    const loadModal = document.getElementById('getModal') 
    const closeBtn = document.querySelector('.close-modal');

    const closeModal = () =>{
        if(loadModal){
            loadModal.style.display = 'none';
            sessionStorage.setItem('shownpopup')
        }
    };

    const popupseen = sessionStorage.getItem('shownpopup')

    if(!localStorage.getItem('shownpopup' && loadModal)){
        loadModal.style.display = 'flex';
    }

    if(!popupseen && loadModal){
        loadModal.style.display = 'flex';
    }

    if(closeBtn){
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (event) =>{
        if(event.target === loadModal){
            closeModal();
        }
    });

});



//cart interactivity
document.addEventListener("DOMContentLoaded", ()=>{

const cartBadge = document.querySelector('.cart-badge');
const cartList = document.querySelector('.cart-list')

function updateCartBadge(){
    if(!cartBadge) return;

    let totalItems = 0;

    const qtyspans = document.querySelectorAll('.cart-list .item-quantity');

    qtyspans.forEach(span =>{
        totalItems += parseInt(span.textContent) || 0;
    });

    cartBadge.textContent = totalItems;

    if(totalItems > 0){
        cartBadge.style.display = 'inline-block';
    }else{
        cartBadge.style.display = 'none';
    }
}

document.addEventListener('click', (event) =>{
    const addTOCartBtn = event.target.closest('.add-to-cart-btn');

    if(addTOCartBtn){
        let currentNum = parseInt(cartBadge.textContent) || 0;
        currentNum += 1;
        cartBadge.textContent = currentNum; 
        cartBadge.style.display = 'inline-block';

        addTOCartBtn.textContent = 'added'
        setTimeout(() =>{
            addTOCartBtn.textContent = 'Add to Cart'
        }, 4000);
    }
});

updateCartBadge();

});