import Vue from 'vue'
import VueRouter from 'vue-router'
import Moviert from '@/router/movie/index'
import Cinemart from '@/router/cinema/index'
import Centerrt from '@/router/center/index'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    Moviert,
    Cinemart,
    Centerrt,
    {
      path:'/*',
      redirect: '/movie'
    }
  ]
})

export default router
