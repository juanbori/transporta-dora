import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://5ed56ed98769250016e63601.mockapi.io/api/v1/';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

