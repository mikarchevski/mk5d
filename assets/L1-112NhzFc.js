function a(){return`
    <div class="page-l1">
        <!-- Шапка -->
        <header class="header">
            <div class="header__container">
                <a href="#/" class="header__logo-link" data-link>
                    <img class="header__logo" src="/img/L1img/logo.png" alt="Логотип компании">
                </a>

                <button class="header__menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>                           
                <nav class="header__nav">
                    <ul class="header__nav-list">
                        <li class="header__nav-item">
                            <a href="#about" class="header__nav-link">О компании</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#why-us" class="header__nav-link">Почему мы</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#services" class="header__nav-link">Услуги</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#reviews" class="header__nav-link">Отзывы</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#contacts" class="header__nav-link">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <a href="tel:88003332233" class="header__phone">
                    <svg class="header__phone-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    8 800 333 22 33
                </a>
            </div>
        </header>

        <!-- Hero секция -->
        <section class="hero">
            <div class="hero__container">
                <div class="hero__background"></div>
                <div class="hero__content">
                    <h1 class="hero__title">Профессиональная компьютерная помощь</h1>
                    <p class="hero__description">
                        Добро пожаловать! Мы рады приветствовать вас на сайте компании,
                        которая помогает исправить неполадки компьютера
                    </p>
                    <a href="#contacts" class="hero__cta-button button button--primary">Оставить заявку</a>
                </div>
            </div>
        </section>

        <!-- О компании -->
        <section class="section about" id="about">
            <div class="about__container">
                <div class="about__content">
                    <h2 class="about__title">О нашей компании</h2>
                    <div class="about__divider"></div>
                    <p class="about__text">
                        Услуги компьютерной помощи могут оказывать как крупные
                        сервис-центры и магазины, специализирующиеся на продаже
                        комплектующих, так и частные лица. При этом, квалификация
                        независимых специалистов иногда бывает намного выше, чем
                        в сервисах при магазинах, а стоимость услуг, наоборот,
                        будет ниже.
                    </p>
                </div>
                <div class="about__image-wrapper">
                    <img class="about__image" src="/img/L1img/about.jpg" alt="Мастер за работой">
                </div>
            </div>
        </section>

        <!-- Почему выбирают нас -->
        <section class="section advantages" id="why-us">
            <div class="advantages__container">
                <h2 class="advantages__title section-title">Почему выбирают именно нас</h2>
                <div class="advantages__grid">
                    <div class="advantage-card">
                        <img class="advantage-card__icon" src="/img/L1img/icon-quality.svg" alt="Гарантия качества">
                        <h3 class="advantage-card__title">Гарантия качества</h3>
                        <p class="advantage-card__text">
                            Наша компания предоставляет услуги компьютерной помощи
                            уже на протяжении 10 лет
                        </p>
                    </div>
                    <div class="advantage-card">
                        <img class="advantage-card__icon" src="/img/L1img/icon-price.svg" alt="Доступная стоимость">
                        <h3 class="advantage-card__title">Доступная стоимость</h3>
                        <p class="advantage-card__text">
                            Наша компания предоставляет услуги компьютерной помощи
                            по самым доступным ценам
                        </p>
                    </div>
                    <div class="advantage-card">
                        <img class="advantage-card__icon" src="/img/L1img/icon-services.svg" alt="Широкий спектр услуг">
                        <h3 class="advantage-card__title">Широкий спектр услуг</h3>
                        <p class="advantage-card__text">
                            Наша компания предоставляет широкий спектр услуг,
                            которые касаются компьютерной помощи
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Бесплатная диагностика -->
        <section class="section diagnostics">
            <div class="diagnostics__container">
                <div class="diagnostics__content">
                    <h2 class="diagnostics__title">Бесплатная диагностика</h2>
                    <div class="diagnostics__divider"></div>
                    <p class="diagnostics__text">
                        Вызовите квалифицированного мастера для проведения бесплатной
                        диагностики. Для этого оставьте заявку на сайте или позвоните
                        по номеру +7 800 333 22 33
                    </p>
                    <a href="#contacts" class="diagnostics__cta-button button button--primary">Оставить заявку</a>
                </div>
                <div class="diagnostics__image-wrapper">
                    <img class="diagnostics__image" src="/img/L1img/diagnostics.jpg" alt="Диагностика ноутбука">
                </div>
            </div>
        </section>

        <!-- Услуги -->
        <section class="section services" id="services">
            <div class="services__container">
                <h2 class="services__title section-title">Услуги, которые мы предлагаем</h2>
                <p class="services__subtitle">
                    Выберите услугу, которая подходит под решение ваших задач
                </p>
                <div class="services__grid">
                    <article class="service-card">
                        <img class="service-card__image" src="/img/L1img/service-os.jpg" alt="Установка ОС">
                        <h3 class="service-card__title">Установка ОС</h3>
                        <p class="service-card__text">
                            Собирательное название различных сервис-центров, которые
                            предоставляют услуги ремонта и настройки компьютеров
                        </p>
                        <span class="service-card__price">от 500 руб.</span>
                        <a href="#contacts" class="service-card__button button button--primary" data-link>Выбрать</a>
                    </article>
                    <article class="service-card">
                        <img class="service-card__image" src="/img/L1img/service-laptop.jpg" alt="Ремонт ноутбуков">
                        <h3 class="service-card__title">Ремонт ноутбуков</h3>
                        <p class="service-card__text">
                            Собирательное название различных сервис-центров, которые
                            предоставляют услуги ремонта и настройки компьютеров
                        </p>
                        <span class="service-card__price">от 550 руб.</span>
                        <a href="#contacts" class="service-card__button button button--primary" data-link>Выбрать</a>
                    </article>
                    <article class="service-card">
                        <img class="service-card__image" src="/img/L1img/service-network.jpg" alt="Интернет и сети">
                        <h3 class="service-card__title">Интернет и сети</h3>
                        <p class="service-card__text">
                            Собирательное название различных сервис-центров, которые
                            предоставляют услуги ремонта и настройки компьютеров
                        </p>
                        <span class="service-card__price">от 600 руб.</span>
                        <a href="#contacts" class="service-card__button button button--primary" data-link>Выбрать</a>
                    </article>
                    <article class="service-card">
                        <img class="service-card__image" src="/img/L1img/service-data.jpg" alt="Восстановление данных">
                        <h3 class="service-card__title">Восстановление данных</h3>
                        <p class="service-card__text">
                            Собирательное название различных сервис-центров, которые
                            предоставляют услуги ремонта и настройки компьютеров
                        </p>
                        <span class="service-card__price">от 650 руб.</span>
                        <a href="#contacts" class="service-card__button button button--primary" data-link>Выбрать</a>
                    </article>
                    <article class="service-card">
                        <img class="service-card__image" src="/img/L1img/service-upgrade.jpg" alt="Апгрейд компьютера">
                        <h3 class="service-card__title">Апгрейд компьютера</h3>
                        <p class="service-card__text">
                            Собирательное название различных сервис-центров, которые
                            предоставляют услуги ремонта и настройки компьютеров
                        </p>
                        <span class="service-card__price">от 700 руб.</span>
                        <a href="#contacts" class="service-card__button button button--primary" data-link>Выбрать</a>
                    </article>
                    <article class="service-card">
                        <img class="service-card__image" src="/img/L1img/service-repair.jpg" alt="Ремонт компьютеров">
                        <h3 class="service-card__title">Ремонт компьютеров</h3>
                        <p class="service-card__text">
                            Собирательное название различных сервис-центров, которые
                            предоставляют услуги ремонта и настройки компьютеров
                        </p>
                        <span class="service-card__price">от 750 руб.</span>
                        <a href="#contacts" class="service-card__button button button--primary" data-link>Выбрать</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Акция -->
        <section class="section promo">
            <div class="promo__background"></div>
            <div class="promo__container">
                <div class="promo__content">
                    <h2 class="promo__title">По будням с&nbsp;11:00&nbsp;до&nbsp;15:00 ремонт дешевле</h2>
                    <p class="promo__text">
                        Закажите ремонт в дневное время, и положите в копилку 20%
                        от стоимости ремонта. Специальное предложение ограничено!
                    </p>
                    <a href="#contacts" class="promo__cta-button button button--primary" data-link>Узнать подробнее</a>
                </div>
            </div>
        </section>

        <!-- Производители -->
        <section class="section brands">
            <div class="brands__container">
                <h2 class="brands__title section-title">Ремонтируем компьютеры разных производителей</h2>
                <div class="brands__grid">
                    <div class="brand-card">
                        <img class="brand-card__logo" src="/img/L1img/brand-1.png" alt="Logoname">
                    </div>
                    <div class="brand-card">
                        <img class="brand-card__logo" src="/img/L1img/brand-2.png" alt="TechLogo">
                    </div>
                    <div class="brand-card">
                        <img class="brand-card__logo" src="/img/L1img/brand-3.png" alt="Brand 3">
                    </div>
                    <div class="brand-card">
                        <img class="brand-card__logo" src="/img/L1img/brand-4.png" alt="Ipsum">
                    </div>
                    <div class="brand-card">
                        <img class="brand-card__logo" src="/img/L1img/brand-5.png" alt="Lorem">
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="section faq">
            <div class="faq__container">
                <h2 class="faq__title section-title">Наиболее частые неполадки</h2>
                <div class="faq__list">
                    <div class="faq-item">
                        <button class="faq-item__button" type="button" aria-expanded="false" aria-controls="faq-answer-1">
                            <span class="faq-item__question">Залили клавиатуру чаем, кофе или другой любой жидкостью</span>
                            <span class="faq-item__icon" aria-hidden="true"><span class="faq-item__icon-plus"></span></span>
                        </button>
                        <div class="faq-item__answer" id="faq-answer-1">
                            <div class="faq-item__answer-content">
                                Отключи от устройства и переверни кнопками вниз. Тщательно протри салфетками. 
                                Не включай минимум сутки - полностью просуши в разобранном виде или с хорошей 
                                вентиляцией. Если жидкость была липкой, потребуется аккуратная промывка и чистка спиртом.
                            </div>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-item__button" type="button" aria-expanded="false" aria-controls="faq-answer-2">
                            <span class="faq-item__question">Компьютер плохо работает и долго грузит</span>
                            <span class="faq-item__icon" aria-hidden="true"><span class="faq-item__icon-plus"></span></span>
                        </button>
                        <div class="faq-item__answer" id="faq-answer-2">
                            <div class="faq-item__answer-content">
                                Закрой ненужные программы в автозагрузке. Проверь место на диске - удали лишнее. 
                                Обнови систему и драйверы. Просканируй на вирусы. Если старый жёсткий диск (HDD) - 
                                замени на SSD.
                            </div>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-item__button" type="button" aria-expanded="false" aria-controls="faq-answer-3">
                            <span class="faq-item__question">На компьютере не проигрывается видео или не загружается фото</span>
                            <span class="faq-item__icon" aria-hidden="true"><span class="faq-item__icon-plus"></span></span>
                        </button>
                        <div class="faq-item__answer" id="faq-answer-3">
                            <div class="faq-item__answer-content">
                                Попробуй открыть файл другим плеером или программой. Обнови видеодрайверы и кодеки. 
                                Проверь другой браузер для онлайн-видео. Убедись, что сам файл не повреждён, 
                                попробовав открыть его на другом устройстве.
                            </div>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-item__button" type="button" aria-expanded="false" aria-controls="faq-answer-4">
                            <span class="faq-item__question">Во время включения компьютер начинает пищать</span>
                            <span class="faq-item__icon" aria-hidden="true"><span class="faq-item__icon-plus"></span></span>
                        </button>
                        <div class="faq-item__answer" id="faq-answer-4">
                            <div class="faq-item__answer-content">
                                Определи количество и длину писков по схеме производителя материнской платы (BIOS/UEFI). 
                                Это код ошибки. Чаще всего проблемы с оперативной памятью - попробуй переткнуть планки, 
                                почисти контакты. Реже - неисправность видеокарты, процессора или блока питания.
                            </div>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-item__button" type="button" aria-expanded="false" aria-controls="faq-answer-5">
                            <span class="faq-item__question">Компьютер не включается</span>
                            <span class="faq-item__icon" aria-hidden="true"><span class="faq-item__icon-plus"></span></span>
                        </button>
                        <div class="faq-item__answer" id="faq-answer-5">
                            <div class="faq-item__answer-content">
                                Проверь подачу питания: розетка, кабель, кнопка на блоке питания. Убедись, что монитор 
                                подключён и включён. Попробуй обесточить системный блок на 5 минут. Если ничего не помогло - 
                                возможна аппаратная неисправность блока питания, материнской платы или оперативной памяти.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Отзывы -->
        <section class="section reviews" id="reviews">
            <div class="reviews__container">
                <h2 class="reviews__title section-title">Отзывы наших клиентов</h2>
                <p class="reviews__subtitle">Что говорят о нашей компании довольные клиенты</p>

                <div class="swiper reviews__slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide reviews__slide">
                            <div class="review-card">
                                <img class="review-card__avatar" src="/img/L1img/avatar-1.jpg" alt="Ирина Савинская">
                                <h3 class="review-card__name">Ирина Савинская</h3>
                                <p class="review-card__text">
                                    Все что указано в договоре, было выполнено в срок, поэтому могу
                                    поставить вашей компании "отлично" и советовать другим обращаться
                                    только к вам. Приятно удивлена уровнем ваших мастеров и их
                                    дисциплиной. Спасибо вам большое!
                                </p>
                            </div>
                        </div>
                        <div class="swiper-slide reviews__slide">
                            <div class="review-card">
                                <img class="review-card__avatar" src="/img/L1img/avatar-2.jpg" alt="Александр Александров">
                                <h3 class="review-card__name">Александр Александров</h3>
                                <p class="review-card__text">
                                    Обратился с проблемой перегрева ноутбука. Мастер приехал в течение часа,
                                    всё почистил, заменил термопасту. Теперь ноутбук работает как новый,
                                    не шумит и не греется. Рекомендую этот сервис!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="reviews__navigation">
                        <button class="swiper-button-prev reviews__arrow" aria-label="Предыдущий отзыв"></button>
                        <button class="swiper-button-next reviews__arrow" aria-label="Следующий отзыв"></button>
                    </div>
                    <div class="swiper-pagination reviews__pagination"></div>
                </div>
            </div>
        </section>

        <!-- Контакты -->
        <section class="section contacts" id="contacts">
            <div class="contacts__map-wrapper">
                <iframe class="contacts__map" src="https://yandex.ru/map-widget/v1/?ll=37.6173,55.7558&z=12" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="contacts__info-card">
                <h2 class="contacts__title">Контактная информация:</h2>
                <ul class="contacts__list">
                    <li class="contacts__item">Чебоксары, школьный проезд 1.</li>
                    <li class="contacts__item">E-mail: Test@yandex.ru</li>
                    <li class="contacts__item">Телефон: 8 800 300 06 00 отдела продаж</li>
                    <li class="contacts__item">Телефон: 8 800 340 06 00 отдела сбыта</li>
                    <li class="contacts__item">Контактное лицо: Степанов В.И.</li>
                </ul>
            </div>
        </section>

        <!-- Футер -->
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__column">
                    <a href="#/" class="footer__logo-link" data-link>
                        <img class="footer__logo" src="/img/L1img/logo.png" alt="Логотип">
                    </a>
                </div>
                <div class="footer__column footer__column--info">
                    <p class="footer__company">ООО «СтройТрейд», 123456, г.Москва, ул.&nbsp;Центральная&nbsp;1, офис&nbsp;1</p>
                    <p class="footer__inn">ИНН 1234567890 ОГРН 123456789012</p>
                    <a href="#" class="footer__privacy-link">Политика конфиденциальности</a>
                </div>
                <div class="footer__column footer__column--phone">
                    <a href="tel:88003332233" class="footer__phone">
                        <svg class="footer__phone-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        8 800 333 22 33
                    </a>
                    <p class="footer__phone-note">Звонок по России бесплатный</p>
                </div>
            </div>
        </footer>
    </div>
    `}export{a as renderL1};
