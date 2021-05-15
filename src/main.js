import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.css'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueAxios,axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
