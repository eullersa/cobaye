const menu = document.querySelector('.menu');
const xis = document.querySelector('.xis');
const bodyDisplay = document.querySelector('body');

menu.addEventListener("click", function () {
    nav.classList.toggle('display');
    nav.classList.toggle('colorDisplay');
    bodyDisplay.classList.toggle('display');
});

xis.addEventListener("click", function () {
    nav.classList.toggle('display');
    nav.classList.toggle('colorDisplay');
    bodyDisplay.classList.toggle('display');
});