import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import {routes} from './routes'

Vue.use(VueRouter)

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
}).$mount('#app')
