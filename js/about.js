window.addEventListener('scroll', function (event) {
    event.preventDefault();
    var nav = document.querySelector('nav');
    console.log('scroll');
    nav.classList.toggle('back', window.scrollY > 10);
    
});


