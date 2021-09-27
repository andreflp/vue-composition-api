import { createApp } from 'vue'
import { makeServer } from './server'
import App from './App.vue'
import router from './router'

makeServer()

createApp(App).use(router).mount('#app')
