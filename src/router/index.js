import Vue from 'vue'
import VueRouter from 'vue-router'

import Jsonp from '@/pages/jsonp'
import axios from '@/pages/axios'
import video from '@/pages/video'
import nodejs from '@/pages/nodejs.vue'
import test from '@/pages/test'
import scrollWraper from '@/pages/scroll'
import testFixed from '@/pages/testFixed'
import requestAnimationFrame from '@/pages/requestAnimationFrame'
import autoHeightInput from '@/pages/autoHeightInput'
import lazyImg from '@/pages/lazyImg'
import over_10000 from '@/pages/over_10000'
import animation_1 from '@/pages/animation_1'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/jsonp',
      name: 'jsonp',
      component: Jsonp,
      meta: 'jsonp'
    },
    {
      path: '/requestAnimationFrame',
      name: 'requestAnimationFrame',
      component: requestAnimationFrame
    },
    {
      path: '/axios',
      name: 'axios',
      component: axios
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/nodejs',
      name: 'nodejs',
      component: nodejs
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/testFixed',
      name: 'testFixed',
      component: testFixed
    },
    {
      path: '/autoHeightInput',
      name: 'autoHeightInput',
      component: autoHeightInput
    },
    {
      path: '/scrollWraper',
      name: 'scrollWraper',
      component: scrollWraper
    },
    {
      path: '/lazyImg',
      name: 'lazyImg',
      component: lazyImg
    },
    {
      path: '/over_10000',
      name: 'over_10000',
      component: over_10000
    },
    {
      path: '/animation_1',
      name: 'animation_1',
      component: animation_1
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('from', from)
  console.log('to', to)
  if (from.query.appid == 54 && !to.query.appid) {
    //   if (to.query.appid && to.query.appid == 54) {
    //       next()
    //       return
    //   }
    //   console.log("jajakjkfjddajfkljfaklfjdfjakfljd;fk")
    next({ ...to, query: { ...to.query, appid: 54 } })
    return
  }
  next()
})

export default router
