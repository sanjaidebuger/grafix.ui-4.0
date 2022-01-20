let home = document.getElementById("home");



window.addEventListener('scroll',function() {
var value = window.scrollY;

home.style.top = value * 0.5 + 'px';
})