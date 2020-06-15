import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vehiculos from '../views/Vehiculos.vue'
import ServAdicionales from '../views/ServAdicionales.vue'
import MedioPago from '../views/MedioPago.vue'
import FormularioStepper from '../components/FormularioStepper.vue'
import DatosPersonales from '../components/DatosPersonales.vue'

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
    component: FormularioStepper, children: [
      {
        path: '', component: DatosPersonales
      }
        ]
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
