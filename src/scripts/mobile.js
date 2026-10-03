export function initMobileMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('header__nav--active');
        });
    }
}
