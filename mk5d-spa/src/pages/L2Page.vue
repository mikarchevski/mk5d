<template>
  <div class="page-l2">
    <!-- Шапка L2 -->
    <header class="l2-header">
      <div class="l2-header__container">
        <button 
          class="l2-header__menu-toggle l2-button" 
          type="button" 
          aria-label="Открыть меню" 
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <router-link to="/" class="l2-header__logo-link">
          <img class="l2-header__logo" src="/img/L2img/logo-gamepad.png" alt="Логотип">
        </router-link>
        <nav class="l2-header__nav" :class="{ 'l2-header__nav--open': isMenuOpen }">
          <ul class="l2-header__nav-list">
            <li class="l2-header__nav-item"><router-link to="/l2" class="l2-header__nav-link">Главная</router-link></li>
            <li class="l2-header__nav-item"><router-link to="/l2#l2-about" class="l2-header__nav-link">О компании</router-link></li>
            <li class="l2-header__nav-item"><router-link to="/l2#l2-services" class="l2-header__nav-link">Услуги</router-link></li>
            <li class="l2-header__nav-item"><router-link to="/l2#features" class="l2-header__nav-link">Преимущества</router-link></li>
            <li class="l2-header__nav-item"><router-link to="/l2#l2-contacts" class="l2-header__nav-link">Контакты</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section class="l2-hero" id="l2-hero">
      <div class="l2-hero__container">
        <div class="l2-hero__content">
          <h1 class="l2-hero__title">Сайт компьютерной онлайн-игры</h1>
          <p class="l2-hero__description">
            Наша студия создаст для вас идеальный экшен. Мы с радостью предложим захватывающий тактический шутер на современном движке или отточенный хардкорный экшен для истинных ценителей жанра.
          </p>
          <router-link to="/l2#l2-services" class="l2-hero__button l2-button l2-button--primary">Подробнее</router-link>
        </div>
        <div class="l2-hero__image-wrapper">
          <img class="l2-hero__image" src="/img/L2img/hero-game.jpg" alt="Игровой скриншот">
        </div>
      </div>
    </section>

    <!-- О компании -->
    <section class="l2-about" id="l2-about">
      <div class="l2-about__container">
        <div class="l2-about__images">
          <div class="l2-about__image-wrapper l2-about__image-wrapper--large">
            <img class="l2-about__image" src="/img/L2img/about-team.jpg" alt="Команда разработчиков">
          </div>
          <div class="l2-about__image-wrapper l2-about__image-wrapper--small">
            <img class="l2-about__image" src="/img/L2img/about-gamepad.jpg" alt="Геймпад">
          </div>
          <div class="l2-about__image-wrapper l2-about__image-wrapper--small">
            <img class="l2-about__image" src="/img/L2img/about-gamer.jpg" alt="Игрок">
          </div>
        </div>
        <div class="l2-about__content">
          <h2 class="l2-about__title">О компании</h2>
          <p class="l2-about__text">Мы — команда увлечённых разработчиков, объединённых одной идеей: создать шутер, в который нам самим захочется играть годами.</p>
          <p class="l2-about__text">Наша философия проста: игрок и его опыт — всегда на первом месте. Мы не гонимся за сиюминутными трендами, а строим прочный фундамент — отзывчивый, честный геймплей, глубокую тактическую составляющую и технологическую базу, которая не подведёт в самый ответственный момент. Мы верим, что настоящая игра рождается в диалоге с комьюнити, поэтому открытость, поддержка и совместное развитие — наши ключевые принципы с самого первого дня.</p>
          <p class="l2-about__text">Это наш первый крупный проект как независимой команды. Для нас это не просто «ещё один шутер» — это заявление о том, каким, по нашему мнению, должен быть современный экшен.</p>
        </div>
        <div class="l2-about__accent"></div>
      </div>
    </section>

    <!-- Почему стоит поиграть -->
    <section class="l2-features" id="features">
      <div class="l2-features__container">
        <div class="l2-features__content">
          <h2 class="l2-features__title">Почему стоит поиграть в нашу игру</h2>
          <div class="l2-features__divider"></div>
          <ul class="l2-features__list">
            <li v-for="feature in features" :key="feature.id" class="l2-features__item">
              <div class="l2-features__icon" v-html="feature.icon"></div>
              <p class="l2-features__text">{{ feature.text }}</p>
            </li>
          </ul>
        </div>
        <div class="l2-features__image-wrapper">
          <img class="l2-features__image" src="/img/L2img/features-gamer.jpg" alt="Игрок за компьютером">
        </div>
        <div class="l2-features__accent"></div>
      </div>
    </section>

    <!-- Наши услуги -->
    <section class="l2-services" id="l2-services">
      <div class="l2-services__container">
        <h2 class="l2-services__title">Наши услуги</h2>
        <div class="l2-services__list">
          <article 
            v-for="service in mainServices" 
            :key="service.id" 
            class="l2-service-card"
            :class="{ 'l2-service-card--reverse': service.reverse }"
          >
            <div class="l2-service-card__image-wrapper">
              <img class="l2-service-card__image" :src="service.image" :alt="service.title">
            </div>
            <div class="l2-service-card__content">
              <h3 class="l2-service-card__title">{{ service.title }}</h3>
              <p class="l2-service-card__text">{{ service.text }}</p>
              <p class="l2-service-card__price">{{ service.price }}</p>
              <router-link to="/l2#l2-contacts" class="l2-service-card__button l2-button l2-button--outline">Заказать</router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Тёмная секция услуг -->
    <section class="l2-services-dark">
      <div class="l2-services-dark__container">
        <div class="l2-services-dark__grid">
          <article 
            v-for="service in darkServices" 
            :key="service.id" 
            class="l2-service-dark-card"
            :class="`service-dark-card--level-${service.level}`"
          >
            <div class="l2-service-dark-card__image-wrapper">
              <img class="l2-service-dark-card__image" :src="service.image" :alt="service.title">
            </div>
            <div class="l2-service-dark-card__content">
              <h3 class="l2-service-dark-card__title">{{ service.title }}</h3>
              <p class="l2-service-dark-card__text">{{ service.text }}</p>
              <p class="l2-service-dark-card__price">{{ service.price }}</p>
              <router-link to="/l2#l2-contacts" class="l2-service-dark-card__button l2-button l2-button--outline-dark">Заказать</router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Статистика стримерам -->
    <section class="l2-stats">
      <div class="l2-stats__container">
        <div class="l2-stats__content">
          <h2 class="l2-stats__title">Предоставление статистики стримерам</h2>
          <p class="l2-stats__text">
            Мы предоставляем эксклюзивный профессиональный сервис, разработанный специально для контент-мейкеров, стримеров и создателей медиа. Данная услуга открывает прямой, безопасный доступ к нашему специальному API, который в реальном времени агрегирует и предоставляет расширенную, детализированную статистику по игрокам и матчам.
          </p>
          <p class="l2-stats__price">От 4 080 руб.</p>
          <router-link to="/l2#l2-contacts" class="l2-stats__button l2-button l2-button--dark">Заказать</router-link>
        </div>
        <div class="l2-stats__image-wrapper">
          <img class="l2-stats__image" src="/img/L2img/stats-monitor.jpg" alt="Монитор со статистикой">
        </div>
      </div>
    </section>

    <!-- Нижние услуги -->
    <section class="l2-services-bottom">
      <div class="l2-services-bottom__container">
        <div class="l2-services-bottom__grid">
          <article v-for="service in bottomServices" :key="service.id" class="l2-service-bottom-card">
            <img class="l2-service-bottom-card__image" :src="service.image" :alt="service.title">
            <h3 class="l2-service-bottom-card__title">{{ service.title }}</h3>
            <p class="l2-service-bottom-card__text">{{ service.text }}</p>
            <p class="l2-service-bottom-card__price">{{ service.price }}</p>
            <router-link to="/l2#l2-contacts" class="l2-service-bottom-card__button l2-button l2-button--outline-dark">Заказать</router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="l2-cta">
      <div class="l2-cta__container">
        <div class="l2-cta__content">
          <h2 class="l2-cta__title">Откройте для себя экшен</h2>
          <p class="l2-cta__text">
            Откройте для себя собственный, неповторимый и отточенный стиль игры, который станет вашей визитной карточкой на поле боя.
          </p>
        </div>
        <div class="l2-cta__image-wrapper">
          <img class="l2-cta__image" src="/img/L2img/cta-helicopter.jpg" alt="Вертолёт в игре">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Преимущества
const features = ref([
  { 
    id: 1, 
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    text: 'Забудьте о pay-to-win. Наша игра построена на чистом мастерстве: отточенной стрельбе.'
  },
  { 
    id: 2, 
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    text: 'Мы не выпустим игру и не забудем о ней. Наша система регулярных обновлений приносит в игру контент.'
  },
  { 
    id: 3, 
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    text: 'Мы не просто делаем игру для вас — мы делаем её вместе с вами. Активная обратная связь, прозрачные патч-ноты.'
  }
]);

// Основные услуги
const mainServices = ref([
  { id: 1, title: 'Восстановление аккаунта и предметов', text: 'Услуга по расследованию и восстановлению доступа к аккаунту или утраченных внутриигровых предметов в случае взлома или технического сбоя.', price: 'От 4 790 руб.', image: '/img/L2img/service-restore.jpg', reverse: false },
  { id: 2, title: 'Приоритетная очередь в технической поддержке', text: 'Гарантированный приоритет при рассмотрении ваших запросов в службу поддержки по любым техническим или игровым вопросам.', price: 'От 7 400 руб.', image: '/img/L2img/service-support.jpg', reverse: true },
  { id: 3, title: 'Проведение приватного турнира', text: 'Организация и администрирование компанией приватного турнира для вашего клана или сообщества с настройкой правил, призами и таблицей результатов.', price: 'От 2 750 руб.', image: '/img/L2img/service-tournament.jpg', reverse: false }
]);

// Тёмные услуги
const darkServices = ref([
  { id: 1, level: 1, title: 'Аудит и консультация по игровому балансу', text: 'Услуга для команд, где гейм-дизайнеры или аналитики проекта проводят разбор баланса конкретных карт/составов и дают рекомендации.', price: 'От 2 850 руб.', image: '/img/L2img/service-audit.jpg' },
  { id: 2, level: 2, title: 'Создание пользовательской карты', text: 'Помощь нашим моддерам в интеграции их карты в игровые списки, техническая поддержка и консультации по использованию SDK.', price: 'От 4 400 руб.', image: '/img/L2img/service-map.jpg' },
  { id: 3, level: 3, title: 'Кастомный мерч и интеграция в игру', text: 'Услуга для партнёров и крупных сообществ: создание эксклюзивного внутриигрового предмета (нашивка, скин) с вашей символикой.', price: 'От 3 290 руб.', image: '/img/L2img/service-merch.jpg' },
  { id: 4, level: 4, title: 'Резервирование имени клана или тега', text: 'Возможность зарезервировать уникальное название для вашего клана до момента запуска системы кланов в игре.', price: 'От 2 810 руб.', image: '/img/L2img/service-clan.jpg' }
]);

// Нижние услуги
const bottomServices = ref([
  { id: 1, title: 'Организация встречи с разработчиками', text: 'Услуга для крупного сообщества или медиа: организация закрытой онлайн-встречи вашей аудитории с ведущими разработчиками игры', price: 'От 4 400 руб.', image: '/img/L2img/service-meeting.jpg' },
  { id: 2, title: 'Услуга «Именная благодарность в титрах»', text: 'Размещение вашего ника или имени в специальном разделе благодарностей игры за особый вклад в развитие сообщества', price: 'От 4 400 руб.', image: '/img/L2img/service-thanks.jpg' },
  { id: 3, title: 'Аренда сервера для матчмейкинга', text: 'Для киберспортивных организаций: развёртывание и поддержка выделенного игрового сервера с низким пингом в определённом регионе.', price: 'От 3 400 руб.', image: '/img/L2img/service-server.jpg' }
]);
</script>