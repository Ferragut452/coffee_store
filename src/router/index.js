import Vue from 'vue'
import VueRouter from 'vue-router'
const Prices = () => import(/* webpackChunkName: "Prices" */ '../views/Prices.vue');
const Calculations = () => import(/* webpackChunkName: "Calculations" */ '../views/Calculations.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Prices',
    component: Prices
  },
  {
    path: '/calculations',
    name: 'Calculations',
    component: Calculations
  }
]

const router = new VueRouter({
  routes
})

export default router
