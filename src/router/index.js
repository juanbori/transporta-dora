import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vehiculos from '../views/Vehiculos.vue'
import ServAdicionales from '../views/ServAdicionales.vue'
import MedioPago from '../views/MedioPago.vue'
import FormularioStepper from '../components/FormularioStepper.vue'
import Pedido from '../views/Pedido.vue'
import Error from '../components/Error.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/vehiculos',
    component: Vehiculos
  },
  {
    path: '/servAdicionales',
    component: ServAdicionales
  },
  {
    path: '/formularioStepper',
    component: FormularioStepper
  },
  {
    path: '/medioPago',
    component: MedioPago
  },
  {
    path: '/pedido',
    component: Pedido
  },
  {
    path: '*',
    component: Error
  },

]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router