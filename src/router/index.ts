import { createRouter, createWebHistory } from 'vue-router'
import Reports from '../views/Reports.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Reports',
      component: Reports
    },
  ]
})

export default router
