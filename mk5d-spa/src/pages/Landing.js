import { renderMainLayout } from '../layouts/MainLayout.js';

export function renderLanding() {
    const content = `
    <div class="landing-page">
        <section class="landing-portfolio">
            <div class="landing-portfolio__container">
                <h1 class="landing-portfolio__title">Наши работы</h1>
                <p class="landing-portfolio__subtitle">Лендинги, созданные с душой и вниманием к деталям</p>

                <div class="landing-portfolio__grid">

                    <!-- Карточка 1 -->
                    <a href="#/l1" class="landing-card" data-link>
                        <div class="landing-card__inner">
                            <div class="landing-card__front">
                                <img class="landing-card__image" src="/img/preview-computer-help.jpg" alt="Превью">
                                <div class="landing-card__overlay">
                                    <span class="landing-card__hint">Нажмите, чтобы открыть</span>
                                </div>
                            </div>
                            <div class="landing-card__back">
                                <div class="landing-card__content">
                                    <h3 class="landing-card__title">Компьютерная помощь</h3>
                                    <p class="landing-card__description">
                                        Лендинг для сервисного центра по ремонту компьютеров. 
                                        Включает секции услуг, FAQ с аккордеоном, слайдер отзывов на Swiper.js.
                                    </p>
                                    <ul class="landing-card__tags">
                                        <li class="landing-card__tag">HTML5</li>
                                        <li class="landing-card__tag">CSS3</li>
                                        <li class="landing-card__tag">JavaScript</li>
                                        <li class="landing-card__tag">Swiper</li>
                                        <li class="landing-card__tag">BEM</li>
                                    </ul>
                                    <span class="landing-card__cta">Открыть лендинг →</span>
                                </div>
                            </div>
                        </div>
                    </a>

                    <!-- Карточка 2 -->
                    <a href="#/l2" class="landing-card" data-link>
                        <div class="landing-card__inner">
                            <div class="landing-card__front">
                                <img class="landing-card__image" src="/img/preview-game.jpg" alt="Превью">
                                <div class="landing-card__overlay">
                                    <span class="landing-card__hint">Нажмите, чтобы открыть</span>
                                </div>
                            </div>
                            <div class="landing-card__back">
                                <div class="landing-card__content">
                                    <h3 class="landing-card__title">Сайт онлайн-игры</h3>
                                    <p class="landing-card__description">
                                        Тёмный лендинг для компьютерной онлайн-игры в стиле Counter-Strike.
                                    </p>
                                    <ul class="landing-card__tags">
                                        <li class="landing-card__tag">HTML5</li>
                                        <li class="landing-card__tag">CSS3</li>
                                        <li class="landing-card__tag">Flexbox</li>
                                        <li class="landing-card__tag">BEM</li>
                                        <li class="landing-card__tag">3D Transforms</li>
                                    </ul>
                                    <span class="landing-card__cta">Открыть лендинг →</span>
                                </div>
                            </div>
                        </div>
                    </a>

                    <!-- Карточка 3: Placeholder -->
                    <div class="landing-card landing-card--coming-soon">
                        <div class="landing-card__inner">
                            <div class="landing-card__front">
                                <div class="landing-card__placeholder">
                                    <span class="landing-card__placeholder-icon">+</span>
                                    <span class="landing-card__placeholder-text">Новый проект</span>
                                </div>
                                <div class="landing-card__overlay">
                                    <span class="landing-card__hint">Скоро здесь появится новый лендинг</span>
                                </div>
                            </div>
                            <div class="landing-card__back">
                                <div class="landing-card__content">
                                    <h3 class="landing-card__title">Скоро</h3>
                                    <p class="landing-card__description">
                                        Третий проект находится в разработке.
                                    </p>
                                    <ul class="landing-card__tags">
                                        <li class="landing-card__tag">В разработке</li>
                                    </ul>
                                    <span class="landing-card__cta landing-card__cta--disabled">Скоро будет доступно</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
    `;
    
    return renderMainLayout(content, 'portfolio');
}