import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WatchDetails from "../views/WatchDetails";
import Index from "../views/Index"
const routes = [
  {
    path: '/',
    name: '/',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index   //首页
  },
  {
    path: '/watchDetails',
    name: 'watchDetails',
    component: WatchDetails   //商品详情页面
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/placeOrder',
    name: 'PlaceOrder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PlaceOrder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
