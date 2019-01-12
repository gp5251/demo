import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import show from '@/components/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index/www.99mm.me/xinggan',
      name: 'index',
      component: index
    },
    {
      path: '/show',
      name: 'show',
      component: show
    }
  ]
})
