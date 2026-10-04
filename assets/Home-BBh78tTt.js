function d(e="home"){const a=s=>s===e?" header__nav-link--active":"";return`
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
    `}function i(){return`
        <footer class="footer">
            <div class="footer__container">
                <p class="footer__text">© 2026 MK Studio. Все права защищены.</p>
            </div>
        </footer>
    `}function r(){return`
        ${d("home")}
        <div class="container">
            <h1></h1>
            <p class="subtitle"></p>
            <div class="cards">
                <a href="https://disk.mk5d.ru" class="card">
                    <div class="card-icon"></div>
                    <div class="card-title">Облачный диск</div>
                    <div class="card-desc">Filebrowser — файлы, загрузка, скачивание</div>
                </a>
                <a href="#/landing" class="card" data-link>
                    <div class="card-icon"></div>
                    <div class="card-title">Landing pages</div>
                    <div class="card-desc">Практика по вёрстке</div>
                </a>
            </div>
        </div>
       ${i()}
    `}export{r as renderHome};
