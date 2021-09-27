import { createRouter, createWebHistory } from 'vue-router';
import Fruits from '../modules/fruits/Fruits.vue'

const routes = [
  {
    path: '/',
    name: 'Fruits',
    component: Fruits
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

 