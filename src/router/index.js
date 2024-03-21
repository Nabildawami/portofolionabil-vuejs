import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prestasi',
      name: 'prestasi',
      component: () => import('../views/prestasi.vue')
    },
    {
      path: '/biodata',
      name: 'biodata',
      component: () => import('../views/biodata.vue')
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: () => import('../views/portofolio.vue')
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: () => import('../views/galeri.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('../views/view.vue')
    },
  ]
})

export default router
