import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import VueApexCharts from 'vue-apexcharts'

Vue.use(VueRouter)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import( /* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import( /* webpackChunkName: "map" */ '../views/Map.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import( /* webpackChunkName: "settings" */ '../views/Settings.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router