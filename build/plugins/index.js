// initializing wow
new WOW().init();

// owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn:'flipInX',
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    });
});

// menu nav control

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const slideList = document.querySelector('.nav-list');
const slideIcon = document.querySelector('.nav-close');


let showMenu = false;

menuBtn.addEventListener('click',()=>{
    if (!showMenu){
        hamburger.classList.add('open');
        // hamburger.classList.add("blue")
        slideList.classList.add('open');
        showMenu = true;
        
    }
    else{
        hamburger.classList.remove('open');
        // hamburger.classList.remove('blue');
        slideList.classList.remove('open')
        showMenu = false;
    }
});
        
// Tab links
const dropBtn = document.querySelector('.dropdown-btn');
const dropContainer = document.querySelector('.dropdown-container')
dropBtn.addEventListener('click', ()=>{
    if(!showMenu){
        dropBtn.classList.add('rotate');
        dropContainer.classList.add('open-dropdown')
        showMenu = true;
    }
    else{
        dropBtn.classList.remove('rotate');
        dropContainer.classList.remove('open-dropdown')

        showMenu = false;
    }
})
// support icon function
const supportIcon = document.querySelector('.support-dropdown-btn');
const supportContent = document.querySelector('.support-content')
supportIcon.addEventListener('click', ()=>{
    if (!showMenu){
        supportIcon.classList.add('rotate');
        supportContent.classList.add('open-support');
        showMenu = true;
    }
    else{
        supportIcon.classList.remove('rotate');
        supportContent.classList.remove('open-support');
        showMenu = false;
    }
})






