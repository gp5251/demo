import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import blank from '@/components/blank'

Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
          path: '/helloworldid',
          name: 'HelloWorldId',
          component: HelloWorld
      }, 
      {
          path: "/blank",
          name: "blank",
          component: blank
      }
    ]
  })

  router.beforeEach( function (to, from, next) {
      if (to.name == "blank" && from.name == "HelloWorldId") {
        router.go(-1)
        next(false)
      } else {
          next()
      }
  })
  

export default router