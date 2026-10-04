import { initSlider } from './scripts/slider.js';
import { initFaq } from './scripts/faq.js';
import { initMobileMenu } from './scripts/mobile.js';

const routes = {
    '/': () => import('./pages/Home.js'),
    '/landing': () => import('./pages/Landing.js'),
    '/l1': () => import('./pages/L1.js'),
    '/l2': () => import('./pages/L2.js'),
};

function updateActiveLink(path) {
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.classList.remove('header__nav-link--active');
        const href = link.getAttribute('href');
        if (href === '#/' && (path === '/' || path === '')) {
            link.classList.add('header__nav-link--active');
        } else if (href === `#${path}`) {
            link.classList.add('header__nav-link--active');
        }
    });
}

export async function router() {
    const path = window.location.hash.slice(1) || '/';
    const app = document.getElementById('app');
    
    app.innerHTML = '<div style="text-align:center; padding: 50px;">Загрузка...</div>';

    try {
        const module = await routes[path]();
        
        let renderFunction;
        if (path === '/' || path === '') renderFunction = module.renderHome;
        else if (path === '/landing') renderFunction = module.renderLanding;
        else if (path === '/l1') renderFunction = module.renderL1;
        else if (path === '/l2') renderFunction = module.renderL2;

        if (typeof renderFunction !== 'function') {
            throw new Error(`Функция рендера не найдена`);
        }

        app.innerHTML = renderFunction();
        
        requestAnimationFrame(() => {
            initMobileMenu();
            initSlider();
            initFaq();
            updateActiveLink(path);
        });
        
        attachLinkListeners();
        window.scrollTo(0, 0);
        
    } catch (error) {
        console.error('❌ ОШИБКА:', error);
    }
}

function attachLinkListeners() {
    document.querySelectorAll('a[data-link]').forEach(link => {
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        newLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState(null, '', newLink.getAttribute('href'));
            router();
        });
    });
}

window.addEventListener('popstate', () => {
    setTimeout(() => router(), 50);
});