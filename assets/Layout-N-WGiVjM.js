function r(e="home"){const a=n=>n===e?" header__nav-link--active":"";return`
        <header class="header">
            <div class="header__container">
                <a href="#/" class="header__logo-link" data-link>
                    <span class="header__logo-text">MK</span>
                </a>
                <nav class="header__nav">
                    <ul class="header__nav-list">
                        <li class="header__nav-item">
                            <a href="#/" class="header__nav-link${a("home")}" data-link>Главная</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#/landing" class="header__nav-link${a("portfolio")}" data-link>Портфолио</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#/contacts" class="header__nav-link${a("contacts")}" data-link>Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    `}function s(){return`
        <footer class="footer">
            <div class="footer__container">
                <p class="footer__text">© 2026 MK Studio. Все права защищены.</p>
            </div>
        </footer>
    `}export{s as a,r};
