// initializing wow
new WOW().init();

// owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
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
        slideList.classList.add('open');
        showMenu = true;
        
    }
    else{
        hamburger.classList.remove('open');
        slideList.classList.remove('open')
        showMenu = false;
    }
});
        
       
        
        





