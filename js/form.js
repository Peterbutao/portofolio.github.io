console.log('Form is online');

const warn = document.querySelector('.warning');
const form = document.querySelector('#form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const button = document.querySelector('.btn');

form.addEventListener('submit', function onsubmit(event) {

    event.preventDefault();
    
    if(name.value === ''){
        warn.classList.add('error');
        warn.innerHTML = 'Please Enter Name Field'

        setTimeout(() => warn.remove(), 4000);
        
    }else {
        console.log('valid name input')
    };
    if(email.value === ''){
        warn.classList.add('error');
        warn.innerHTML = 'Please Enter Email Field'

        setTimeout(() => warn.remove(), 4000);
        
    }else {
        console.log('valid email input')
    };
    
});

window.addEventListener('scroll', function (event) {
    event.preventDefault();
    var nav = document.querySelector('nav');
    console.log('srcoll');
    nav.classList.toggle('back', window.scrollY > 10);
    
});