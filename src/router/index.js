import Vue from 'vue'
import VueRouter from 'vue-router'

import Jsonp from '@/pages/jsonp'
import axios from '@/pages/axios'
import video from '@/pages/video'
import nodejs from "@/pages/nodejs.vue"
import test from "@/pages/test"
import scrollWraper from "@/pages/scroll"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
	   {
	   	 	path: '/jsonp',
	   	 	name: 'jsonp',
            component: Jsonp,
            meta: "jsonp"
                
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
            path: "/nodejs",
            name: "nodejs",
            component: nodejs
        },
        {
            path: "/test",
            name: "test",
            component: test
        },
        {
            path: "/scrollWraper",
            name: "scrollWraper",
            component: scrollWraper
        }
  ]
})