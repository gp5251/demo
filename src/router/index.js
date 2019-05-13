import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import blank from '@/components/blank'
import newone from '@/components/new'
import mid from '@/components/mid'
import diaocha from '@/components/diaocha'

Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
          path: '/newone',
          name: 'newone',
          component: newone
      }, 
      {
          path: "/blank",
          name: "blank",
          component: blank
      }, 
      {
          path: "/mid",
          name: "mid",
          component: mid
      },
      {
          path: "/diaocha",
          name: "diaocha",
          component: diaocha
      }
    ]
  })

  router.beforeEach( function (to, from, next) {
      if (to.name == "mid" && from.name == "newone") {
        router.go(-2)
        next(false)
      } else {
          next()
      }
  })
  

export default router