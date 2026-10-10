<template>
  <div class="landing-page">
    <section class="landing-portfolio">
      <div class="landing-portfolio__container">
        <h1 class="landing-portfolio__title">Наши работы</h1>
        <p class="landing-portfolio__subtitle">Лендинги, созданные с душой и вниманием к деталям</p>

        <div class="landing-portfolio__grid">
          <!-- Карточки проектов через v-for -->
          <router-link 
            v-for="project in projects" 
            :key="project.id"
            :to="project.link" 
            class="landing-card"
            :class="{ 'landing-card--coming-soon': project.comingSoon }"
          >
            <div class="landing-card__inner">
              <div class="landing-card__front">
                <!-- Если есть изображение -->
                <img 
                  v-if="project.image" 
                  class="landing-card__image" 
                  :src="project.image" 
                  :alt="project.title"
                >
                <!-- Placeholder для "Скоро" -->
                <div v-else class="landing-card__placeholder">
                  <span class="landing-card__placeholder-icon">+</span>
                  <span class="landing-card__placeholder-text">Новый проект</span>
                </div>
                <div class="landing-card__overlay">
                  <span class="landing-card__hint">
                    {{ project.comingSoon ? 'Скоро здесь появится новый лендинг' : 'Нажмите, чтобы открыть' }}
                  </span>
                </div>
              </div>
              <div class="landing-card__back">
                <div class="landing-card__content">
                  <h3 class="landing-card__title">{{ project.title }}</h3>
                  <p class="landing-card__description">{{ project.description }}</p>
                  <ul class="landing-card__tags">
                    <li 
                      v-for="(tag, index) in project.tags" 
                      :key="index" 
                      class="landing-card__tag"
                    >
                      {{ tag }}
                    </li>
                  </ul>
                  <span 
                    class="landing-card__cta"
                    :class="{ 'landing-card__cta--disabled': project.comingSoon }"
                  >
                    {{ project.comingSoon ? 'Скоро будет доступно' : 'Открыть лендинг →' }}
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Массив проектов — легко добавлять новые!
const projects = ref([
  {
    id: 1,
    title: 'Компьютерная помощь',
    description: 'Лендинг для сервисного центра по ремонту компьютеров. Включает секции услуг, FAQ с аккордеоном, слайдер отзывов на Swiper.js.',
    image: '/img/preview-computer-help.jpg',
    link: '/l1',
    comingSoon: false,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Swiper', 'BEM']
  },
  {
    id: 2,
    title: 'Сайт онлайн-игры',
    description: 'Тёмный лендинг для компьютерной онлайн-игры в стиле Counter-Strike.',
    image: '/img/preview-game.jpg',
    link: '/l2',
    comingSoon: false,
    tags: ['HTML5', 'CSS3', 'Flexbox', 'BEM', '3D Transforms']
  },
  {
    id: 3,
    title: 'Скоро',
    description: 'Третий проект находится в разработке.',
    image: null,
    link: '#',
    comingSoon: true,
    tags: ['В разработке']
  }
]);
</script>

<style scoped>
/* Стили можно оставить здесь или вынести в глобальный CSS */
/* Если у тебя уже есть стили для .landing-page, .landing-card и т.д. в основном CSS, 
   этот блок можно удалить */
</style>