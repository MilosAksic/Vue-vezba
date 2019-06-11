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
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// import VueAxios from 'vue-axios'
// import VueSweetalert2 from 'vue-sweetalert2';
// import VueAxios from './plugins/axios'

Vue.use(VueRouter, BootstrapVue,Swal)

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



