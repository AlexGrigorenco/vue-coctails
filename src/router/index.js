import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATH } from '@/constants/router'
import Home from '@/pages/Home.vue'
import Coctail from '@/pages/Coctail.vue'
import CoctailRandom from '@/pages/CoctailRandom.vue'

const routes = [
  {
    path: ROUTER_PATH.HOME,
    name: ROUTER_PATH.HOME,
    component: Home
  },
  {
    path: ROUTER_PATH.COCTAIL,
    name: ROUTER_PATH.COCTAIL,
    component: Coctail
  },
  {
    path: ROUTER_PATH.COCTAIL_RANDOM,
    name: ROUTER_PATH.COCTAIL_RANDOM,
    component: CoctailRandom
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
