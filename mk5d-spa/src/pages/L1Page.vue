<template>
  <div class="l1-page">
    <AppHeader />

    <!-- Hero -->
    <section class="l1-hero">
      <div class="l1-hero__container">
        <div class="l1-hero__background"></div>
        <div class="l1-hero__content">
          <h1 class="l1-hero__title">Профессиональная компьютерная помощь</h1>
          <p class="l1-hero__description">
            Добро пожаловать! Мы рады приветствовать вас на сайте компании,
            которая помогает исправить неполадки компьютера
          </p>
          <a href="#/l1" class="l1-hero__cta-button l1-button l1-button--primary">Оставить заявку</a>
        </div>
      </div>
    </section>

    <!-- О компании -->
    <section class="l1-about" id="l1-about">
      <div class="l1-about__container">
        <div class="l1-about__content">
          <h2 class="l1-about__title">О нашей компании</h2>
          <div class="l1-about__divider"></div>
          <p class="l1-about__text">
            Услуги компьютерной помощи могут оказывать как крупные
            сервис-центры и магазины, специализирующиеся на продаже
            комплектующих, так и частные лица. При этом, квалификация
            независимых специалистов иногда бывает намного выше, чем
            в сервисах при магазинах, а стоимость услуг, наоборот,
            будет ниже.
          </p>
        </div>
        <div class="l1-about__image-wrapper">
          <img class="l1-about__image" src="/img/L1img/about.jpg" alt="Мастер за работой">
        </div>
      </div>
    </section>

    <!-- Почему выбирают нас -->
    <section class="l1-advantages" id="why-us">
      <div class="l1-advantages__container">
        <h2 class="l1-advantages__title l1-section-title">Почему выбирают именно нас</h2>
        <div class="l1-advantages__grid">
          <div v-for="advantage in advantages" :key="advantage.id" class="l1-advantage-card">
            <img class="l1-advantage-card__icon" :src="advantage.icon" :alt="advantage.title">
            <h3 class="l1-advantage-card__title">{{ advantage.title }}</h3>
            <p class="l1-advantage-card__text">{{ advantage.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Бесплатная диагностика -->
    <section class="l1-diagnostics">
      <div class="l1-diagnostics__container">
        <div class="l1-diagnostics__content">
          <h2 class="l1-diagnostics__title">Бесплатная диагностика</h2>
          <div class="l1-diagnostics__divider"></div>
          <p class="l1-diagnostics__text">
            Вызовите квалифицированного мастера для проведения бесплатной
            диагностики. Для этого оставьте заявку на сайте или позвоните
            по номеру +7 800 333 22 33
          </p>
          <a href="#/l1" class="l1-diagnostics__cta-button l1-button l1-button--primary">Оставить заявку</a>
        </div>
        <div class="l1-diagnostics__image-wrapper">
          <img class="l1-diagnostics__image" src="/img/L1img/diagnostics.jpg" alt="Диагностика ноутбука">
        </div>
      </div>
    </section>

    <!-- Услуги -->
    <section class="l1-services" id="l1-services">
      <div class="l1-services__container">
        <h2 class="l1-services__title l1-section-title">Услуги, которые мы предлагаем</h2>
        <p class="l1-services__subtitle">Выберите услугу, которая подходит под решение ваших задач</p>
        <div class="l1-services__grid">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :title="service.title"
            :text="service.text"
            :price="service.price"
            :image="service.image"
          />
        </div>
      </div>
    </section>

    <!-- Акция -->
    <section class="l1-promo">
      <div class="l1-promo__background"></div>
      <div class="l1-promo__container">
        <div class="l1-promo__content">
          <h2 class="l1-promo__title">По будням с&nbsp;11:00&nbsp;до&nbsp;15:00 ремонт дешевле</h2>
          <p class="l1-promo__text">
            Закажите ремонт в дневное время, и положите в копилку 20%
            от стоимости ремонта. Специальное предложение ограничено!
          </p>
          <a href="#/l1" class="l1-promo__cta-button l1-button l1-button--primary">Узнать подробнее</a>
        </div>
      </div>
    </section>

    <!-- Производители -->
    <section class="l1-brands">
      <div class="l1-brands__container">
        <h2 class="l1-brands__title l1-section-title">Ремонтируем компьютеры разных производителей</h2>
        <div class="l1-brands__grid">
          <div v-for="brand in brands" :key="brand.id" class="l1-brand-card">
            <img class="l1-brand-card__logo" :src="brand.logo" :alt="brand.name">
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ (ИНТЕРАКТИВНЫЙ АККОРДЕОН НА VUE) -->
    <section class="l1-faq">
      <div class="l1-faq__container">
        <h2 class="l1-faq__title l1-section-title">Наиболее частые неполадки</h2>
        <div class="l1-faq__list">
          <div v-for="(item, index) in faqItems" :key="index" class="l1-faq-item">
            <button
              class="l1-faq-item__button"
              type="button"
              :aria-expanded="item.isOpen"
              :aria-controls="`l1-faq-answer-${index}`"
              @click="toggleFaq(index)"
            >
              <span class="l1-faq-item__question">{{ item.question }}</span>
              <span class="l1-faq-item__icon" aria-hidden="true">
                <span class="l1-faq-item__icon-plus"></span>
              </span>
            </button>
            <div
              v-show="item.isOpen"
              class="l1-faq-item__answer"
              :id="`l1-faq-answer-${index}`"
            >
              <div class="l1-faq-item__answer-content">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Отзывы -->
    <section class="l1-reviews" id="l1-reviews">
      <div class="l1-reviews__container">
        <h2 class="l1-reviews__title l1-section-title">Отзывы наших клиентов</h2>
        <p class="l1-reviews__subtitle">Что говорят о нашей компании довольные клиенты</p>

        <div class="swiper l1-reviews__slider">
          <div class="swiper-wrapper">
            <div v-for="review in reviews" :key="review.id" class="swiper-slide">
              <div class="l1-review-card">
                <img class="l1-review-card__avatar" :src="review.avatar" :alt="review.name">
                <h3 class="l1-review-card__name">{{ review.name }}</h3>
                <p class="l1-review-card__text">{{ review.text }}</p>
              </div>
            </div>
          </div>
          <div class="l1-reviews__navigation">
            <button class="swiper-button-prev l1-reviews__arrow" aria-label="Предыдущий отзыв"></button>
            <button class="swiper-button-next l1-reviews__arrow" aria-label="Следующий отзыв"></button>
          </div>
          <div class="swiper-pagination l1-reviews__pagination"></div>
        </div>
      </div>
    </section>

    <!-- Контакты -->
    <section class="l1-contacts" id="l1-contacts">
      <div class="l1-contacts__map-wrapper">
        <iframe class="l1-contacts__map" src="https://yandex.ru/map-widget/v1/?ll=37.6173,55.7558&z=12" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="l1-contacts__info-card">
        <h2 class="l1-contacts__title">Контактная информация:</h2>
        <ul class="l1-contacts__list">
          <li class="l1-contacts__item">Чебоксары, школьный проезд 1.</li>
          <li class="l1-contacts__item">E-mail: Test@yandex.ru</li>
          <li class="l1-contacts__item">Телефон: 8 800 300 06 00 отдела продаж</li>
          <li class="l1-contacts__item">Телефон: 8 800 340 06 00 отдела сбыта</li>
          <li class="l1-contacts__item">Контактное лицо: Степанов В.И.</li>
        </ul>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import ServiceCard from '../components/ServiceCard.vue';

// Преимущества (v-for)
const advantages = ref([
  { id: 1, icon: '/img/L1img/icon-quality.svg', title: 'Гарантия качества', text: 'Наша компания предоставляет услуги компьютерной помощи уже на протяжении 10 лет' },
  { id: 2, icon: '/img/L1img/icon-price.svg', title: 'Доступная стоимость', text: 'Наша компания предоставляет услуги компьютерной помощи по самым доступным ценам' },
  { id: 3, icon: '/img/L1img/icon-services.svg', title: 'Широкий спектр услуг', text: 'Наша компания предоставляет широкий спектр услуг, которые касаются компьютерной помощи' }
]);

// Услуги
const services = ref([
  { id: 1, title: 'Установка ОС', text: 'Собирательное название различных сервис-центров, которые предоставляют услуги ремонта и настройки компьютеров', price: 'от 500 руб.', image: '/img/L1img/service-os.jpg' },
  { id: 2, title: 'Ремонт ноутбуков', text: 'Собирательное название различных сервис-центров, которые предоставляют услуги ремонта и настройки компьютеров', price: 'от 550 руб.', image: '/img/L1img/service-laptop.jpg' },
  { id: 3, title: 'Интернет и сети', text: 'Собирательное название различных сервис-центров, которые предоставляют услуги ремонта и настройки компьютеров', price: 'от 600 руб.', image: '/img/L1img/service-network.jpg' },
  { id: 4, title: 'Восстановление данных', text: 'Собирательное название различных сервис-центров, которые предоставляют услуги ремонта и настройки компьютеров', price: 'от 650 руб.', image: '/img/L1img/service-data.jpg' },
  { id: 5, title: 'Апгрейд компьютера', text: 'Собирательное название различных сервис-центров, которые предоставляют услуги ремонта и настройки компьютеров', price: 'от 700 руб.', image: '/img/L1img/service-upgrade.jpg' },
  { id: 6, title: 'Ремонт компьютеров', text: 'Собирательное название различных сервис-центров, которые предоставляют услуги ремонта и настройки компьютеров', price: 'от 750 руб.', image: '/img/L1img/service-repair.jpg' }
]);

// Бренды
const brands = ref([
  { id: 1, name: 'Logoname', logo: '/img/L1img/brand-1.png' },
  { id: 2, name: 'TechLogo', logo: '/img/L1img/brand-2.png' },
  { id: 3, name: 'Brand 3', logo: '/img/L1img/brand-3.png' },
  { id: 4, name: 'Ipsum', logo: '/img/L1img/brand-4.png' },
  { id: 5, name: 'Lorem', logo: '/img/L1img/brand-5.png' }
]);

// FAQ (реактивный аккордеон)
const faqItems = ref([
  { question: 'Залили клавиатуру чаем, кофе или другой любой жидкостью', answer: 'Отключи от устройства и переверни кнопками вниз. Тщательно протри салфетками. Не включай минимум сутки - полностью просуши в разобранном виде или с хорошей вентиляцией. Если жидкость была липкой, потребуется аккуратная промывка и чистка спиртом.', isOpen: false },
  { question: 'Компьютер плохо работает и долго грузит', answer: 'Закрой ненужные программы в автозагрузке. Проверь место на диске - удали лишнее. Обнови систему и драйверы. Просканируй на вирусы. Если старый жёсткий диск (HDD) - замени на SSD.', isOpen: false },
  { question: 'На компьютере не проигрывается видео или не загружается фото', answer: 'Попробуй открыть файл другим плеером или программой. Обнови видеодрайверы и кодеки. Проверь другой браузер для онлайн-видео. Убедись, что сам файл не повреждён, попробовав открыть его на другом устройстве.', isOpen: false },
  { question: 'Во время включения компьютер начинает пищать', answer: 'Определи количество и длину писков по схеме производителя материнской платы (BIOS/UEFI). Это код ошибки. Чаще всего проблемы с оперативной памятью - попробуй переткнуть планки, почисти контакты. Реже - неисправность видеокарты, процессора или блока питания.', isOpen: false },
  { question: 'Компьютер не включается', answer: 'Проверь подачу питания: розетка, кабель, кнопка на блоке питания. Убедись, что монитор подключён и включён. Попробуй обесточить системный блок на 5 минут. Если ничего не помогло - возможна аппаратная неисправность блока питания, материнской платы или оперативной памяти.', isOpen: false }
]);

const toggleFaq = (index) => {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};

// Отзывы
const reviews = ref([
  { id: 1, name: 'Ирина Савинская', avatar: '/img/L1img/avatar-1.jpg', text: 'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!' },
  { id: 2, name: 'Александр Александров', avatar: '/img/L1img/avatar-2.jpg', text: 'Обратился с проблемой перегрева ноутбука. Мастер приехал в течение часа, всё почистил, заменил термопасту. Теперь ноутбук работает как новый, не шумит и не греется. Рекомендую этот сервис!' }
]);

// Инициализация Swiper после монтирования компонента
onMounted(() => {
  // Если у тебя подключен Swiper через CDN, он инициализируется автоматически
  // Если нужен JS-Swiper, можно импортировать его здесь
});
</script>