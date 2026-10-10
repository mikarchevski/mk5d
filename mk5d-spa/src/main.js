// console.log("✅ 1. main.js загружен");

// import { router } from './router.js';
// import './assets/style.css';
// window.addEventListener('DOMContentLoaded', () => {
//     console.log("✅ 2. DOM загружен, запускаем роутер...");
//     const app = document.getElementById('app');
//     console.log("✅ 3. Элемент #app найден:", app);
    
//     router();
// });

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

// Импортируем глобальные стили (убедись, что путь правильный)
import './assets/style.css'; 

const app = createApp(App);

// Подключаем роутер к приложению
app.use(router);

// Монтируем приложение в элемент с id="app" в index.html
app.mount('#app');