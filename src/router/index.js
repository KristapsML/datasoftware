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
  }, {
    path: '/intro1',
    name: 'intro1',
    component: () => import( /* webpackChunkName: "intro1" */ '../views/Intro1.vue')
  },
  {
    path: '/intro2',
    name: 'intro2',
    component: () => import( /* webpackChunkName: "intro2" */ '../views/Intro2.vue')
  },
  {
    path: '/intro3',
    name: 'intro3',
    component: () => import( /* webpackChunkName: "intro3" */ '../views/Intro3.vue')
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
  }


]

const router = new VueRouter({
  routes
})

export default router