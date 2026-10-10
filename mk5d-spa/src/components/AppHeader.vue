<template>
  <header class="app-header">
    <div class="app-header__container">
      <!-- Логотип -->
      <router-link to="/" class="app-header__logo-link">
        <span class="app-header__logo-text">MK5D</span>
      </router-link>

      <!-- Навигация -->
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
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>