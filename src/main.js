console.log("✅ 1. main.js загружен");

import { router } from './router.js';
import './assets/style.css';

window.addEventListener('DOMContentLoaded', () => {
    console.log("✅ 2. DOM загружен, запускаем роутер...");
    const app = document.getElementById('app');
    console.log("✅ 3. Элемент #app найден:", app);
    
    router();
});