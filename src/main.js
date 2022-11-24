/** 重置样式 */
// import './assets/main.css'
import '@/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { setupRouter } from '@/router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const setupApp = async () => {
  const app = createApp(App)
  app.use(ElementPlus)
  app.use(createPinia())
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
