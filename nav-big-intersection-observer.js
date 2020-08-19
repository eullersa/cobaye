const navBig = document.querySelector('.nav-bar-big');
const navInterceptBig = document.querySelector('.nav-intercept');
const buttoms = document.querySelector('.buttoms');

<!-- DECLARAÇÕES DAS CONSTANTES -->

const optionsOneBig = {
    rootMargin: "-60px 0px 0px 0px"
};

const observerOneBig = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navBig.classList.add('inverseBig');
            buttoms.classList.add('inverseButtom');
        } else {
            navBig.classList.remove('inverseBig');
            buttoms.classList.remove('inverseButtom');
        }
    });
}, optionsOneBig);

observerOneBig.observe(navIntercept);