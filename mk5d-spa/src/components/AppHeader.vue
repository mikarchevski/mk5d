<template>
  <!-- Добавляем динамический класс :class -->
  <header class="app-header" :class="{ 'app-header--hidden': isHidden }">
    <div class="app-header__container">
      <router-link to="/" class="app-header__logo-link">
        <span class="app-header__logo-text">MK5D</span>
      </router-link>

      <nav class="app-header__nav" :class="{ 'app-header__nav--open': isMenuOpen }">
        <ul class="app-header__nav-list">
          <li>
            <router-link to="/" class="app-header__nav-link" active-class="app-header__nav-link--active">Главная</router-link>
          </li>
          <li>
            <router-link to="/landing" class="app-header__nav-link" active-class="app-header__nav-link--active">Landings</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isHidden = ref(false);
let lastScrollY = 0;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Если мы в самом верху страницы, всегда показываем хедер
  if (currentScrollY <= 0) {
    isHidden.value = false;
    lastScrollY = 0;
    return;
  }

  // Если скроллим вниз И прокрутили больше 100px (чтобы не скрывать при микро-движениях)
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isHidden.value = true;
  } 
  // Если скроллим вверх
  else {
    isHidden.value = false;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  // { passive: true } критически важен для производительности скролла!
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  // Обязательно удаляем слушатель, чтобы не было утечек памяти при смене страниц
  window.removeEventListener('scroll', handleScroll);
});
</script>