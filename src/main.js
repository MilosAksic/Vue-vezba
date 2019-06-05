import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import {routes} from './routes'
// import axios from 'axios'
import axios from './backend/vue-axios'
// import VueAxios from 'vue-axios'

// import VueAxios from './plugins/axios'

Vue.use(VueRouter, BootstrapVue)

// axios, VueAxios,

const router = new VueRouter ({
  routes
})
global.jQuery = jQuery;
global.$ = jQuery;
let Bootstrap = require('bootstrap')




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  axios,
}).$mount('#app')
