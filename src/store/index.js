import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    servicios: [
      { nombre: "PEÓN", precio: 200, imagen: require("../assets/ServAdic/PeonSF.png") },
      { nombre: "CARRITO", precio: 20, imagen: require("../assets/ServAdic/CarritoSF.png") },
      { nombre: "EMBALAJE", precio: 50, imagen: require("../assets/ServAdic/EmbalajeSF.png") },
      { nombre: "ESCALERA", precio: 50, imagen: require("../assets/ServAdic/EscaleraSF.png") },
      { nombre: "CANASTO", precio: 10, imagen: require("../assets/ServAdic/CanastoSF.png") }
    ],
    vehiculos: [
      {
        nombre: "MOTO",
        precio: 100,
        imagen: require("../assets/Vehiculos/Moto.png"),
        color: "#D5D5D5",
        medida: "Medidas de la moto",
        fotoMedida: require("../assets/Medidas/MotoCarga.png"),
        capacidad: 20
      },
      {
        nombre: "KANGOO",
        precio: 150,
        imagen: require("../assets/Vehiculos/Kangoo.png"),
        color: "#EEEEEE",
        medida: "Medidas de la Kangoo",
        fotoMedida: require("../assets/Medidas/KangooCarga.png"),
        capacidad: 500
      },
      {
        nombre: "F100",
        precio: 200,
        imagen: require("../assets/Vehiculos/F100.png"),
        color: "#F6F8DE",
        medida: "Medidas de la F100",
        fotoMedida: require("../assets/Medidas/F100Carga.png"),
        capacidad: 1000
      },
      {
        nombre: "CAMIÓN",
        precio: 250,
        imagen: require("../assets/Vehiculos/Camion.png"),
        color: "#EBECFA",
        medida: "Medidas del camión",
        fotoMedida: require("../assets/Medidas/CamionCarga.png"),
        capacidad: 3500
      }
    ],
    vehiculoSeleccionado: {},
    precioTotal: 0,
    elementosSeleccionados: [],
    serviciosSeleccionados: [],
    formulario: {}
  },
  getters: {
    obtenerVehiculo: state => state.vehiculoSeleccionado,
    obtenerPrecioVehiculo: state => state.vehiculoSeleccionado.precio,
    obtenerPrecioTotal: state => state.precioTotal,
    obtenerElementos: state => state.elementosSeleccionados,
    obtenerServicios: state => state.serviciosSeleccionados,
    getVehiculos: state => state.vehiculos,
    getServicios: state => state.servicios,
    getFormulario: state => state.formulario

  },
  mutations: {
    actualizarVehiculo(state, vehiculo) {
      state.vehiculoSeleccionado = vehiculo;
    },
    actualizarPrecioTotal(state, precio) {
      state.precioTotal = precio;
    },
    actualizarElementos(state, elementos) {
      state.elementosSeleccionados = elementos;
    },
    actualizarServicios(state, servicios) {
      state.serviciosSeleccionados = servicios;
    },
    actualizarFormulario(state, payload) {
      state.formulario = payload;
    } 
  },
  actions: {
    actualizarVehiculo({ commit }, payload) {
      commit('actualizarVehiculo', payload)
    },
    actualizarPrecioTotal({ commit }, payload) {
      commit('actualizarPrecioTotal', payload)
    },
    actualizarElementos({ commit }, payload) {
      commit('actualizarElementos', payload)
    },
    actualizarServicios({ commit }, payload) {
      commit('actualizarServicios', payload)
    },
    actualizarFormulario({ commit }, payload) {
      commit('actualizarFormulario', payload)
    },
  },
})
