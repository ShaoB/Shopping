import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cart',
    component: () => import('../views/cart.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../views/address.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
