import { renderMainLayout } from '../layouts/MainLayout.js';

export function renderHome() {
    const content = `
        <h1>MK5D</h1>
        <p class="subtitle">Проекты:</p>
        <div class="cards">
            <a href="https://disk.mk5d.ru" class="card">
                <div class="card-icon">☁️</div>
                <div class="card-title">Облачный диск</div>
                <div class="card-desc">Filebrowser — файлы, загрузка, скачивание</div>
            </a>
            <a href="#/landing" class="card" data-link>
                <div class="card-icon">🎨</div>
                <div class="card-title">Landing pages</div>
                <div class="card-desc">Практика по вёрстке</div>
            </a>
        </div>
    `;
    
    return renderMainLayout(content, 'home');
}