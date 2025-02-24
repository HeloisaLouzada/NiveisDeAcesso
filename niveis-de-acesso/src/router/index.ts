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
      component: Home,
    },
    {
      path: '/Login',
      name: 'Login',
      component: loginView,
    },
    {
      path: '/Grupo',
      name: 'Grupo',
      component: GrupoView,
    },
  ],
})

export default router
