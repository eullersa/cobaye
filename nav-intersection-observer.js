const nav = document.querySelector('.nav-bar');
const navIntercept = document.querySelector('.nav-intercept');
const banner = document.querySelector('.banner-center-lang');

<!-- DECLARAÇÕES DAS CONSTANTES -->

const optionsOne = {
    rootMargin: "-60px 0px 0px 0px"
};

const optionsTwo = {
    rootMargin: "-35px 0px 0px 0px"
};

const observerOne = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add('inverse');
        } else {
            nav.classList.remove('inverse');
        }
    });
}, optionsOne);

const observerTwo = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add('color');
        } else {
            nav.classList.remove('color');
        }
    });
}, optionsTwo);

observerOne.observe(navIntercept);
observerTwo.observe(banner);