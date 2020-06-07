import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vehiculos from '../views/Vehiculos.vue'
import ServAdicionales from '../views/ServAdicionales.vue'
import Formulario from '../views/Formulario.vue'
import MedioPago from '../views/MedioPago.vue'

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
    path: '/formulario',
    component: Formulario
  },
  {
    path: '/medioPago',
    component: MedioPago
  }
 
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
