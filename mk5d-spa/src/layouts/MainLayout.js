export function renderMainLayout(content, activePage = 'home') {
    const isActive = (page) => page === activePage ? ' app-header__nav-link--active' : '';
    
    return `
        <header class="app-header">
            <div class="app-header__container">
                <a href="#/" class="app-header__logo-link" data-link>
                    <span class="app-header__logo-text">MK</span>
                </a>
                <nav class="app-header__nav">
                    <ul class="app-header__nav-list">
                        <li class="app-header__nav-item">
                            <a href="#/" class="app-header__nav-link${isActive('home')}" data-link>Главная</a>
                        </li>
                        <li class="app-header__nav-item">
                            <a href="#/landing" class="app-header__nav-link${isActive('portfolio')}" data-link>Портфолио</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <main class="container">
            ${content}
        </main>

        <footer class="app-footer">
            <div class="app-footer__container">
                <p class="app-footer__text">© 2026 MK Studio. Все права защищены.</p>
            </div>
        </footer>
    `;
}