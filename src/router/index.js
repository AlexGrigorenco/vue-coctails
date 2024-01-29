import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATH } from '@/constants/router'
import Home from '@/pages/Home.vue'
import Coctail from '@/pages/Coctail.vue'
import CoctailRandom from '@/pages/CoctailRandom.vue'
import Categories from '@/pages/Categories.vue'
import CoctailsByCategory from '@/pages/CoctailsByCategory.vue'
import AlcoholicSort from '@/pages/AlcoholicSort.vue'
import IngredientsPage from '@/pages/IngredientsPage.vue'
import CoctailsByIngredients from '@/pages/CoctailsByIngredients.vue'
import FavoritesPage from '@/pages/FavoritesPage.vue'

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
  {
    path: ROUTER_PATH.CATEGORIES,
    name: ROUTER_PATH.CATEGORIES,
    component: Categories
  },
  {
    path: ROUTER_PATH.COCTAILS_BY_CATEGORY,
    name: ROUTER_PATH.COCTAILS_BY_CATEGORY,
    component: CoctailsByCategory
  },
  {
    path: ROUTER_PATH.COCTAILS_SORT_BY_ALCOHOL,
    name: ROUTER_PATH.COCTAILS_SORT_BY_ALCOHOL,
    component: AlcoholicSort
  },
  {
    path: ROUTER_PATH.INGREDIENTS,
    name: ROUTER_PATH.INGREDIENTS,
    component: IngredientsPage
  },
  {
    path: ROUTER_PATH.COCTAILS_SORT_BY_INGREDIENTS,
    name: ROUTER_PATH.COCTAILS_SORT_BY_INGREDIENTS,
    component: CoctailsByIngredients
  },
  {
    path: ROUTER_PATH.FAVORITES,
    name: ROUTER_PATH.FAVORITES,
    component: FavoritesPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
