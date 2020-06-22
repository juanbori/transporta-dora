import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehiculo: null,
    vehiculos: [{}]
  },
  getters: {
    vehiculo: state => { return state.vehiculo },
    vehiculos: state => { return state.vehiculos }
  },
  mutations: {
    guardarVehiculo: function (state, vehiculo) {
      state.vehiculo = vehiculo;
    },
    guardarVehiculos: function (state, vehiculos) {
      state.vehiculos = vehiculos;
    },
  },
  actions: {
  },
  modules: {
  }
})

