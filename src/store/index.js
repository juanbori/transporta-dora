import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehiculo: null,
    vehiculos:[
      {nombre:"MOTO", precio:100, capacidad: 10, imagen:require("../assets/Vehiculos/Moto.png"), color:'#D5D5D5'},
      {nombre:"KANGOO", precio:150, capacidad: 500, imagen:require("../assets/Vehiculos/Kangoo.png"), color:'#EEEEEE'},
      {nombre:"F100", precio:200, capacidad: 700,imagen:require("../assets/Vehiculos/F100.png"), color:'#F6F8DE'},
      {nombre:"CAMIÓN", precio:250, capacidad: 1000, imagen:require("../assets/Vehiculos/Camion.png"), color:'#EBECFA'}
    ]
  },
  getters: {
    vehiculo: state => { return state.vehiculo },
    vehiculos: state => { return state.vehiculos }
  },
  mutations: {       
  },
  actions: {
  },
  modules: {
  }
})
