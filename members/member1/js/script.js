document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                const navLinks = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                navLinks.classList.remove('nav-active');
                burger.classList.remove('nav-active');
            }
        });
    });

    // Scroll reveal animations
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150; // Adjust this value as needed

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active'); // Optional: Remove active class when out of view
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load to show elements already in view

    // Navbar toggle for mobile
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('nav-active'); // Animates the burger icon
    });
});