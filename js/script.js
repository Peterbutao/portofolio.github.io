console.log('script.js is online')


const navLinks = document.querySelector('.nav-links');
const menu = document.querySelector('.menu');
const hambr = document.querySelector('.hambr');


menu.addEventListener('click', function(event) {
    console.log('clicked');
    navLinks.classList.toggle("open");
    event.preventDefault();
});

hambr.addEventListener('click', function(event) {
    console.log('clicked');
    navLinks.classList.toggle("open");
    event.preventDefault();
});


