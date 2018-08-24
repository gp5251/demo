import Vue from 'vue'
import router from '@/router'
import App from '@/App'
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
  
})