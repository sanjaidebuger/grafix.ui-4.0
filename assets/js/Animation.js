let home = document.getElementById("home");
let service = document.getElementById("service");

window.addEventListener('scroll',function() {
var value = window.scrollY;

home.style.top = value * 0.1 + 'px';
service.style.top = value * 0.1 + 'px';

})