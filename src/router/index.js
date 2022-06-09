import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: () => import('@/layouts/Login.vue')
    },
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard.vue')
    }, {
      path: '/homiylar',
      component: () => import('@/views/homiylar.vue')
    }, 
    {
      path: '/',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/talabalar',
      components: () => import('@/views/talabalar.vue')
    },
  ]
})

export default router
