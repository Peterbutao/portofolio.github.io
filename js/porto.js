window.addEventListener('scroll', function (event) {
    event.preventDefault();
    var nav = document.querySelector('nav');
    console.log('scroll');
    nav.classList.toggle('pback', window.scrollY > 10);
    
});


