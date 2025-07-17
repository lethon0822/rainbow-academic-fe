import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/id',
      component: () => import('@/views/Id.vue')
    },
    {
      path: '/renewal',
      component: () => import('@/views/Renewal.vue')
    },
  ],
})

export default router
