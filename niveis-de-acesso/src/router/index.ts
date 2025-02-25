import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/loginView.vue'
import GrupoView from '@/views/GrupoView.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/loginView.vue'),
    },
    {
      path: '/grupo',
      name: 'Grupo',
      component: () => import('@/views/GrupoView.vue'),
    },
  ],
})

export default router
