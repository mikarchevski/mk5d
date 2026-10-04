import { initSlider } from './scripts/slider.js';
import { initFaq } from './scripts/faq.js';
import { initMobileMenu } from './scripts/mobile.js';

// Просто загружаем модули, не вызывая функции сразу
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
    
    // Индикатор загрузки
    app.innerHTML = '<div style="text-align:center; padding: 50px;">Загрузка страницы...</div>';

    try {
        // 1. Загружаем модуль
        const module = await routes[path]();
        
        // 2. Явно выбираем нужную функцию рендера в зависимости от пути
        let renderFunction;
        if (path === '/' || path === '') {
            renderFunction = module.renderHome;
        } else if (path === '/landing') {
            renderFunction = module.renderLanding;
        } else if (path === '/l1') {
            renderFunction = module.renderL1;
        } else if (path === '/l2') {
            renderFunction = module.renderL2;
        }

        // 3. ПРОВЕРКА: является ли найденное функцией
        if (typeof renderFunction !== 'function') {
            throw new Error(`Функция рендера не найдена для пути "${path}". Проверьте, что в файле страницы написано точно: export function render...()`);
        }

        // 4. Вызываем функцию и получаем HTML-строку
        const htmlString = renderFunction();
        
        // 5. Вставляем HTML на страницу
        app.innerHTML = htmlString;
        
        // 6. Инициализируем интерактив
        
        requestAnimationFrame(() => {
            initMobileMenu();
            initSlider();
            initFaq();
            updateActiveLink(path); // <-- Добавили вызов, который у вас был, но не использовался
        });
        // 7. Вешаем обработчики и скроллим вверх
        attachLinkListeners();
        window.scrollTo(0, 0);
        
    } catch (error) {
        console.error('❌ КРИТИЧЕСКАЯ ОШИБКА РОУТЕРА:', error);
        app.innerHTML = `
            <div style="text-align:center; padding: 50px; color: #d32f2f;">
                <h1>Ошибка загрузки страницы</h1>
                <p><strong>${error.message}</strong></p>
                <p>Откройте консоль браузера (F12), чтобы увидеть детали.</p>
                <br>
                <a href="#/" data-link style="color: #1976d2; text-decoration: underline; font-size: 18px;">← Вернуться на главную</a>
            </div>
        `;
        attachLinkListeners();
    }
}

function attachLinkListeners() {
    document.querySelectorAll('a[data-link]').forEach(link => {
        // Клонируем, чтобы удалить старые слушатели и избежать дублирования
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
    // Очищаем app полностью
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '';
        // Небольшая задержка перед рендером
        setTimeout(() => router(), 0);
    }
});