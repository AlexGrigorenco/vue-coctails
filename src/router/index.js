import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Coctail from '@/pages/Coctail.vue'
import CoctailRandom from '@/pages/CoctailRandom.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/coctails/:id',
    name: 'coctail',
    component: Coctail
  },
  {
    path: '/coctail-random',
    name: 'coctail-random',
    component: CoctailRandom
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
