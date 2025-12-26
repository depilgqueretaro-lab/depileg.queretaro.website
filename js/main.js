document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md', 'bg-white/95');
            navbar.classList.remove('bg-white/90'); // Adjust transparency
        } else {
            navbar.classList.remove('shadow-md', 'bg-white/95');
            navbar.classList.add('bg-white/90');
        }
    });
});
