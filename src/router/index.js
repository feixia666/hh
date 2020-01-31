import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home'
import City from '../pages/city/city'
import Detail from '../pages/detail/detail'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition){
    return { x: 0, y: 0 }
  }
})

export default router
