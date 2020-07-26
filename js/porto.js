

console.log('porto js online')
//portofolio
const item = document.querySelector('.porto-item-wr');
const word = document.querySelector('.subtitle');



word.addEventListener('mouseover', function(event) {
    event.preventDefault();
    console.log(item.value);
    item.classList.add("color");
})

item.addEventListener('mouseout', function(event) {
    event.preventDefault();
    console.log(item.value);
    item.classList.remove("bg-darken");
})