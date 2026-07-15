document.addEventListener('DOMContentLoaded', async function(){

    main_carousel();

    const menuBtn = document.querySelector('.header__menu-icon');
    const menuCloseBtn = document.querySelector('.menu__close-icon');
    const menuDiv = document.querySelector('.menu');
    
    menuBtn.addEventListener('click', function(){
        console.log("here")
        menuDiv.classList.add('is-active'); 
        console.log(menuDiv)
        menuBtn.setAttribute('aria-expanded', 'true'); 
        menuCloseBtn.focus();
    });

    menuCloseBtn.addEventListener('click', function(){
        menuDiv.classList.remove('is-active'); 
        menuBtn.setAttribute('aria-expanded', 'false'); 
        menuBtn.focus();
    });

});

function main_carousel(){
    const track = document.querySelector('#main-carousel-track');
    const images = document.querySelectorAll('.carousel__img');
    const prevBtn = document.querySelector('#main-carousel-btn-prev');
    const nextBtn = document.querySelector('#main-carousel-btn-next');

    let currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++; 
        } else {
            currentIndex = 0; 
        }
        updateCarousel();
        updateText(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1; 
        }
        updateCarousel();
        updateText(currentIndex);
    });
}

function updateText(currentIndex){

    const title = document.querySelector('.discover__title');
    const description = document.querySelector('.discover__description');

    title.classList.add('fade-out');
    description.classList.add('fade-out');

    setTimeout(() => {

        switch(currentIndex){
            case 0:
                title.textContent = "Discover innovative ways to decorate"
                description.textContent =  `We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.`
                break;
            case 1:
                title.textContent = "We are available all across the globe"
                description.textContent =  `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                    store locator. Any questions? Don't hesitate to contact us today.`
                break;
            case 2: 
                title.textContent = "Manufactured with the best materials"
                description.textContent =  `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                    experience in this industry, we understand what customers want for their home and office.`

                break;
            default:
                title.textContent = "Discover innovative ways to decorate"
                description.textContent =  `We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.`
                break;
        }

        title.classList.remove('fade-out');
        description.classList.remove('fade-out');
        
    }, 300);
}