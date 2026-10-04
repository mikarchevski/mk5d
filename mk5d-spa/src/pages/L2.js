// Динамический импорт стилей: Vite загрузит l2.css только при открытии этой страницы
import '../assets/l2.css';

export function renderL2() {
    return `
        <!-- Шапка -->
        <header class="header">
            <div class="header__container">
                <button class="header__menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a href="#/" class="header__logo-link" data-link>
                    <img class="header__logo" src="/L2img/logo-gamepad.png" alt="Логотип">
                </a>
                <nav class="header__nav">
                    <ul class="header__nav-list">
                        <li class="header__nav-item">
                            <a href="#hero" class="header__nav-link">Главная</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#about" class="header__nav-link">О компании</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#services" class="header__nav-link">Услуги</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#features" class="header__nav-link">Преимущества</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#contacts" class="header__nav-link">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <!-- Hero секция -->
        <section class="hero" id="hero">
            <div class="hero__container">
                <div class="hero__content">
                    <h1 class="hero__title">Сайт компьютерной онлайн-игры</h1>
                    <p class="hero__description">
                        Наша студия создаст для вас идеальный экшен. Мы с радостью предложим захватывающий тактический шутер на современном движке или отточенный хардкорный экшен для истинных ценителей жанра.
                    </p>
                    <a href="#services" class="hero__button button button--primary" data-link>Подробнее</a>
                </div>
                <div class="hero__image-wrapper">
                    <img class="hero__image" src="/L2img/hero-game.jpg" alt="Игровой скриншот">
                </div>
            </div>
        </section>

        <!-- О компании -->
        <section class="about" id="about">
            <div class="about__container">
                <div class="about__images">
                    <div class="about__image-wrapper about__image-wrapper--large">
                        <img class="about__image" src="/L2img/about-team.jpg" alt="Команда разработчиков">
                    </div>
                    <div class="about__image-wrapper about__image-wrapper--small">
                        <img class="about__image" src="/L2img/about-gamepad.jpg" alt="Геймпад">
                    </div>
                    <div class="about__image-wrapper about__image-wrapper--small">
                        <img class="about__image" src="/L2img/about-gamer.jpg" alt="Игрок">
                    </div>
                </div>
                <div class="about__content">
                    <h2 class="about__title">О компании</h2>
                    <p class="about__text">
                        Мы — команда увлечённых разработчиков, объединённых одной идеей: создать шутер, в который нам самим захочется играть годами.
                    </p>
                    <p class="about__text">
                        Наша философия проста: игрок и его опыт — всегда на первом месте. Мы не гонимся за сиюминутными трендами, а строим прочный фундамент — отзывчивый, честный геймплей, глубокую тактическую составляющую и технологическую базу, которая не подведёт в самый ответственный момент. Мы верим, что настоящая игра рождается в диалоге с комьюнити, поэтому открытость, поддержка и совместное развитие — наши ключевые принципы с самого первого дня.
                    </p>
                    <p class="about__text">
                        Это наш первый крупный проект как независимой команды. Для нас это не просто «ещё один шутер» — это заявление о том, каким, по нашему мнению, должен быть современный экшен.
                    </p>
                </div>
                <div class="about__accent"></div>
            </div>
        </section>

        <!-- Почему стоит поиграть -->
        <section class="features" id="features">
            <div class="features__container">
                <div class="features__content">
                    <h2 class="features__title">Почему стоит поиграть в нашу игру</h2>
                    <div class="features__divider"></div>
                    <ul class="features__list">
                        <li class="features__item">
                            <div class="features__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <p class="features__text">Забудьте о pay-to-win. Наша игра построена на чистом мастерстве: отточенной стрельбе.</p>
                        </li>
                        <li class="features__item">
                            <div class="features__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <p class="features__text">Мы не выпустим игру и не забудем о ней. Наша система регулярных обновлений приносит в игру контент.</p>
                        </li>
                        <li class="features__item">
                            <div class="features__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <p class="features__text">Мы не просто делаем игру для вас — мы делаем её вместе с вами. Активная обратная связь, прозрачные патч-ноты.</p>
                        </li>
                    </ul>
                </div>
                <div class="features__image-wrapper">
                    <img class="features__image" src="/L2img/features-gamer.jpg" alt="Игрок за компьютером">
                </div>
                <div class="features__accent"></div>
            </div>
        </section>

        <!-- Наши услуги -->
        <section class="services" id="services">
            <div class="services__container">
                <h2 class="services__title">Наши услуги</h2>
                <div class="services__list">
                    <article class="service-card">
                        <div class="service-card__image-wrapper">
                            <img class="service-card__image" src="/L2img/service-restore.jpg" alt="Восстановление аккаунта">
                        </div>
                        <div class="service-card__content">
                            <h3 class="service-card__title">Восстановление аккаунта и предметов</h3>
                            <p class="service-card__text">Услуга по расследованию и восстановлению доступа к аккаунту или утраченных внутриигровых предметов в случае взлома или технического сбоя.</p>
                            <p class="service-card__price">От 4 790 руб.</p>
                            <a href="#contacts" class="service-card__button button button--outline" data-link>Заказать</a>
                        </div>
                    </article>
                    <article class="service-card service-card--reverse">
                        <div class="service-card__image-wrapper">
                            <img class="service-card__image" src="/L2img/service-support.jpg" alt="Техническая поддержка">
                        </div>
                        <div class="service-card__content">
                            <h3 class="service-card__title">Приоритетная очередь в технической поддержке</h3>
                            <p class="service-card__text">Гарантированный приоритет при рассмотрении ваших запросов в службу поддержки по любым техническим или игровым вопросам.</p>
                            <p class="service-card__price">От 7 400 руб.</p>
                            <a href="#contacts" class="service-card__button button button--outline" data-link>Заказать</a>
                        </div>
                    </article>
                    <article class="service-card">
                        <div class="service-card__image-wrapper">
                            <img class="service-card__image" src="/L2img/service-tournament.jpg" alt="Приватный турнир">
                        </div>
                        <div class="service-card__content">
                            <h3 class="service-card__title">Проведение приватного турнира</h3>
                            <p class="service-card__text">Организация и администрирование компанией приватного турнира для вашего клана или сообщества с настройкой правил, призами и таблицей результатов.</p>
                            <p class="service-card__price">От 2 750 руб.</p>
                            <a href="#contacts" class="service-card__button button button--outline" data-link>Заказать</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Тёмная секция услуг -->
        <section class="services-dark">
            <div class="services-dark__container">
                <div class="services-dark__grid">
                    <article class="service-dark-card service-dark-card--level-1">
                        <div class="service-dark-card__image-wrapper">
                            <img class="service-dark-card__image" src="/L2img/service-audit.jpg" alt="Аудит игрового баланса">
                        </div>
                        <div class="service-dark-card__content">
                            <h3 class="service-dark-card__title">Аудит и консультация по игровому балансу</h3>
                            <p class="service-dark-card__text">Услуга для команд, где гейм-дизайнеры или аналитики проекта проводят разбор баланса конкретных карт/составов и дают рекомендации.</p>
                            <p class="service-dark-card__price">От 2 850 руб.</p>
                            <a href="#contacts" class="service-dark-card__button button button--outline-dark" data-link>Заказать</a>
                        </div>
                    </article>

                    <article class="service-dark-card service-dark-card--level-2">
                        <div class="service-dark-card__image-wrapper">
                            <img class="service-dark-card__image" src="/L2img/service-map.jpg" alt="Создание пользовательской карты">
                        </div>
                        <div class="service-dark-card__content">
                            <h3 class="service-dark-card__title">Создание пользовательской карты</h3>
                            <p class="service-dark-card__text">Помощь нашим моддерам в интеграции их карты в игровые списки, техническая поддержка и консультации по использованию SDK.</p>
                            <p class="service-dark-card__price">От 4 400 руб.</p>
                            <a href="#contacts" class="service-dark-card__button button button--outline-dark" data-link>Заказать</a>
                        </div>
                    </article>

                    <article class="service-dark-card service-dark-card--level-3">
                        <div class="service-dark-card__image-wrapper">
                            <img class="service-dark-card__image" src="/L2img/service-merch.jpg" alt="Кастомный мерч">
                        </div>
                        <div class="service-dark-card__content">
                            <h3 class="service-dark-card__title">Кастомный мерч и интеграция в игру</h3>
                            <p class="service-dark-card__text">Услуга для партнёров и крупных сообществ: создание эксклюзивного внутриигрового предмета (нашивка, скин) с вашей символикой.</p>
                            <p class="service-dark-card__price">От 3 290 руб.</p>
                            <a href="#contacts" class="service-dark-card__button button button--outline-dark" data-link>Заказать</a>
                        </div>
                    </article>

                    <article class="service-dark-card service-dark-card--level-4">
                        <div class="service-dark-card__image-wrapper">
                            <img class="service-dark-card__image" src="/L2img/service-clan.jpg" alt="Резервирование имени клана">
                        </div>
                        <div class="service-dark-card__content">
                            <h3 class="service-dark-card__title">Резервирование имени клана или тега</h3>
                            <p class="service-dark-card__text">Возможность зарезервировать уникальное название для вашего клана до момента запуска системы кланов в игре.</p>
                            <p class="service-dark-card__price">От 2 810 руб.</p>
                            <a href="#contacts" class="service-dark-card__button button button--outline-dark" data-link>Заказать</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Статистика стримерам -->
        <section class="stats">
            <div class="stats__container">
                <div class="stats__content">
                    <h2 class="stats__title">Предоставление статистики стримерам</h2>
                    <p class="stats__text">
                        Мы предоставляем эксклюзивный профессиональный сервис, разработанный специально для контент-мейкеров, стримеров и создателей медиа. Данная услуга открывает прямой, безопасный доступ к нашему специальному API, который в реальном времени агрегирует и предоставляет расширенную, детализированную статистику по игрокам и матчам.
                    </p>
                    <p class="stats__price">От 4 080 руб.</p>
                    <a href="#contacts" class="stats__button button button--dark" data-link>Заказать</a>
                </div>
                <div class="stats__image-wrapper">
                    <img class="stats__image" src="/L2img/stats-monitor.jpg" alt="Монитор со статистикой">
                </div>
            </div>
        </section>

        <!-- Нижние услуги -->
        <section class="services-bottom">
            <div class="services-bottom__container">
                <div class="services-bottom__grid">
                    <article class="service-bottom-card">
                        <img class="service-bottom-card__image" src="/L2img/service-meeting.jpg" alt="Организация встречи">
                        <h3 class="service-bottom-card__title">Организация встречи с разработчиками</h3>
                        <p class="service-bottom-card__text">Услуга для крупного сообщества или медиа: организация закрытой онлайн-встречи вашей аудитории с ведущими разработчиками игры</p>
                        <p class="service-bottom-card__price">От 4 400 руб.</p>
                        <a href="#contacts" class="service-bottom-card__button button button--outline-dark" data-link>Заказать</a>
                    </article>
                    <article class="service-bottom-card">
                        <img class="service-bottom-card__image" src="/L2img/service-thanks.jpg" alt="Именная благодарность">
                        <h3 class="service-bottom-card__title">Услуга «Именная благодарность в титрах»</h3>
                        <p class="service-bottom-card__text">Размещение вашего ника или имени в специальном разделе благодарностей игры за особый вклад в развитие сообщества</p>
                        <p class="service-bottom-card__price">От 4 400 руб.</p>
                        <a href="#contacts" class="service-bottom-card__button button button--outline-dark" data-link>Заказать</a>
                    </article>
                    <article class="service-bottom-card">
                        <img class="service-bottom-card__image" src="/L2img/service-server.jpg" alt="Аренда сервера">
                        <h3 class="service-bottom-card__title">Аренда сервера для матчмейкинга</h3>
                        <p class="service-bottom-card__text">Для киберспортивных организаций: развёртывание и поддержка выделенного игрового сервера с низким пингом в определённом регионе.</p>
                        <p class="service-bottom-card__price">От 3 400 руб.</p>
                        <a href="#contacts" class="service-bottom-card__button button button--outline-dark" data-link>Заказать</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- CTA секция -->
        <section class="cta">
            <div class="cta__container">
                <div class="cta__content">
                    <h2 class="cta__title">Откройте для себя экшен</h2>
                    <p class="cta__text">
                        Откройте для себя собственный, неповторимый и отточенный стиль игры, который станет вашей визитной карточкой на поле боя.
                    </p>
                </div>
                <div class="cta__image-wrapper">
                    <img class="cta__image" src="/L2img/cta-helicopter.jpg" alt="Вертолёт в игре">
                </div>
            </div>
        </section>
    `;
}