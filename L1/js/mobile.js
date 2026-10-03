document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isActive = nav.classList.toggle('header__nav--active');
            menuToggle.classList.toggle('header__menu-toggle--active');
            menuToggle.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Закрываем меню при клике на ссылку
        const navLinks = nav.querySelectorAll('.header__nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('header__nav--active');
                menuToggle.classList.remove('header__menu-toggle--active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Закрываем при клике вне меню
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('header__nav--active');
                menuToggle.classList.remove('header__menu-toggle--active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
});