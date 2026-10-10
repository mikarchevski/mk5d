<template>
  <div class="home-page">
    <div class="container">
      <h1>MK5D</h1>
      <p class="subtitle">Проекты:</p>
      
      <div class="cards">
        <a href="https://disk.mk5d.ru" class="card" target="_blank" rel="noopener noreferrer">
          <div class="card-icon">☁️</div>
          <div class="card-title">Облачный диск</div>
          <div class="card-desc">Filebrowser — файлы, загрузка, скачивание</div>
        </a>

        <router-link to="/landing" class="card">
          <div class="card-icon">🎨</div>
          <div class="card-title">Landing pages</div>
          <div class="card-desc">Практика по вёрстке</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Логика не требуется
</script>