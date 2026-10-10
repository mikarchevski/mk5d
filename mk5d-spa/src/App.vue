<template>
  <!-- Глобальный стиль #app (из style.css) уже делает этот блок flex-контейнером -->
  
  <AppHeader />

  <main id="main-content" class="main-content">
    <!-- Сюда Vue Router подставляет текущую страницу (HomePage, L1Page и т.д.) -->
    <router-view></router-view>
  </main>

  <AppFooter />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
/* 
  В style.css уже есть:
  #app { display: flex; flex: 1; flex-direction: column; }
  
  Нам нужно добавить только одно правило, чтобы компенсировать 
  фиксированную шапку (height: 60px + position: fixed), 
  иначе контент будет прятаться под ней.
*/
.main-content {
  margin-top: 60px; 
  flex: 1; /* Растягивает main, чтобы футер всегда был прижат к низу экрана */
}
</style>