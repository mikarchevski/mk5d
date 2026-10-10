<template>
  <article class="l1-service-card">
    <img class="l1-service-card__image" :src="image" :alt="title">
    <h3 class="l1-service-card__title">{{ title }}</h3>
    <p class="l1-service-card__text">{{ text }}</p>
    <span class="l1-service-card__price">{{ price }}</span>
    <a href="#/l1" class="l1-service-card__button l1-button l1-button--primary">Выбрать</a>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true }
});
</script>