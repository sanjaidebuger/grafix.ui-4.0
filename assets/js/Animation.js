let bg = document.getElementById("bg");



window.addEventListener('scroll',function() {
var value = window.scrollY;

bg.style.top = value * 0.5 + 'px';
})