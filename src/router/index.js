import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Intro1 from '../views/Intro1.vue'
import Intro2 from '../views/Intro2.vue'
import Intro3 from '../views/Intro3.vue'
import List from '../views/List.vue'
import Map from '../views/Map.vue'
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Dashboard.vue')
  }, {
    path: '/intro1',
    name: 'intro1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Intro1.vue')
  },
  {
    path: '/intro2',
    name: 'intro2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Intro2.vue')
  },
  {
    path: '/intro3',
    name: 'intro3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Intro3.vue')
  },
  {
    path: '/list',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/map',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Map.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router