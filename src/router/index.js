import Vue from 'vue'
import VueRouter from 'vue-router'
import Graficos from '../views/Graficos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'graficos',
    component: Graficos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
