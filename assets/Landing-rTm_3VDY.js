function a(){return`
        <header class="header">
            <!-- Добавляем data-link для перехода без перезагрузки -->
            <a href="#/" class="header__logo-link" data-link>
                <span class="header__logo-text">MK</span>
            </a>
        </header>
        <main class="main">
            <section class="portfolio">
                <h1>Наши работы</h1>
                <div class="portfolio__grid">
                    <!-- Меняем пути на хеш-маршруты и добавляем data-link -->
                    <a href="#/l1" class="portfolio-card" data-link>
                        Компьютерная помощь
                    </a>
                    <a href="#/l2" class="portfolio-card" data-link>
                        Онлайн-игра
                    </a>
                </div>
            </section>
        </main>
    `}export{a as renderLanding};
