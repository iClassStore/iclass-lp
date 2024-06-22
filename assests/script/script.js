// Header Fixed
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});


// Smooth Scroll
const linksInternos = document.querySelectorAll("header .container a");

const scrollToSection = (event) => {
    event.preventDefault();

    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
});
