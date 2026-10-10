import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // Опционально: если твои картинки лежат в папке public, Vite будет их отдавать корректно
  publicDir: 'public', 
});