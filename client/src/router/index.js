import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/admin/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'main'
      }
    },
    {
      path: '/admin',
      name: 'AdminDasboard',
      component: DashboardView,
      meta: {
        layout: 'admin'
      },
    },
    {
      path: '/admin/category',
      name: 'AdminCategory',
      component: () => import('../views/admin/CategoryView.vue'),
      meta: {
        layout: 'admin'
      }
    },
  ]
})

export default router
