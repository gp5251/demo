import Vue from 'vue'
import VueRouter from 'vue-router'

import Jsonp from '@/components/Jsonp/jsonp'
import axios from '@/components/axios/axios'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
	   {
	   	 	path: '/jsonp',
	   	 	name: 'jsonp',
	   	 	component: Jsonp
	   },
	   {
	   	 	path: '/axios',
	   	 	name: 'axios',
	   	 	component: axios
	   }
  ]
})