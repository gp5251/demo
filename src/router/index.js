import Vue from 'vue'
import VueRouter from 'vue-router'

import Jsonp from '@/components/Jsonp/index'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
	   {
	   	 	path: '/jsonp',
	   	 	name: 'jsonp',
	   	 	component: Jsonp
	   }
  ]
})