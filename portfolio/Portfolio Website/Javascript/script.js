// Sticky Navigation Menu JS 
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button");

window.onscroll = function(){
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
        scrollBtn.style.display="block"
    }
    else{
        nav.classList.remove('sticky');
        scrollBtn.style.display="none"
    }
}

// Side Menu Hide & Show JS  
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.onclick = function(){
    navbar.classList.add('active');
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    body.style.overflow="hidden";
    scrollBtn.style.display='none'
}
console.log(body);
cancelBtn.onclick = function(){
    navbar.classList.remove('active');
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    body.style.overflow="auto";
}

// Side Navigation Bar Close While We click on Navigation Link 
let navLinks = document.querySelectorAll('.menu li a');
navLinks.forEach(function(link){
    link.onclick = function(){
        navbar.classList.remove('active');
        menuBtn.style.opacity="1";
        menuBtn.style.pointerEvents="auto";
        body.style.overflow="auto";
    } 
});