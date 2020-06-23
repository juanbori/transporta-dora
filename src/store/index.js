import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehiculo: null,
    vehiculos: [
      { nombre: "MOTO", precio: 100, capacidad: 15, imagen: require("../assets/Vehiculos/Moto.png"), color: '#D5D5D5' },
      { nombre: "KANGOO", precio: 150, capacidad: 500, imagen: require("../assets/Vehiculos/Kangoo.png"), color: '#EEEEEE' },
      { nombre: "F100", precio: 200, capacidad: 700, imagen: require("../assets/Vehiculos/F100.png"), color: '#F6F8DE' },
      { nombre: "CAMIÓN", precio: 250, capacidad: 1000, imagen: require("../assets/Vehiculos/Camion.png"), color: '#EBECFA' }
    ]
  },
  getters: {
    getVehiculo: state => { return state.vehiculo },
    getVehiculos: state => { return state.vehiculos }
  },
  mutations: {
    guardarVehiculo: function (state, vehiculo) {
      state.vehiculo = vehiculo;
    },
    guardarVehiculos: function (state, vehiculos) {
      state.vehiculos = vehiculos;
    }
  },
  actions: {
  },
  modules: {
  }
})

