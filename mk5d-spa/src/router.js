import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./pages/HomePage.vue') },
  { path: '/landing', component: () => import('./pages/LandingPage.vue') },
  { path: '/l1', component: () => import('./pages/L1Page.vue') },
  { path: '/l2', component: () => import('./pages/L2Page.vue') }
];

const router = createRouter({
  history: createWebHistory(), // <-- Обычный режим (без #)
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;