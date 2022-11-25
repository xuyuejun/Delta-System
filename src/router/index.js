import { createRouter, createWebHistory } from 'vue-router'
const Layout = () => import('@/layout/index.vue')
const Cesium = () => import('@/layout/cesium.vue')

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: Cesium
    }
  ]
})

export async function setupRouter(app) {
  app.use(router)
}
