/** 重置样式 */
// import './assets/main.css'
import '@/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { setupRouter } from '@/router'

const setupApp = async () => {
  const app = createApp(App)
  app.use(createPinia())
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
