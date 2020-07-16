<template>
  <div class="mb-16">
    <h2 class="text-decoration-underline">ARME SU PEDIDO</h2>
    <v-row align="center" class="pa-5">
      <v-col>
        <div>
          <v-container fluid>
            <h4 class="text-left">1 - ¿Qué elementos desea trasladar?</h4>
            <v-data-iterator
              class="mb-3 pa-3"
              :items="productos"
              :search="search"
              hide-default-footer
            >
              <template v-slot:header>
                <v-toolbar color="grey lighten-3" class="mb-4">
                  <v-text-field
                    v-model="search"
                    flat
                    solo-inverted
                    hide-details
                    label="Buscador de productos"
                  ></v-text-field>
                </v-toolbar>
              </template>
              <template v-slot:default>
                <v-row>
                  <v-col
                    v-for="(producto, index) in productosFiltrados"
                    :key="producto.nombre"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="2"
                  >
                    <v-card>
                      <v-card-subtitle
                        v-model="itemElegido"
                        @click="submit(index)"
                        class="justify-center font-weight-bold pa-5"
                      >{{ producto.nombre }}</v-card-subtitle>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
            <h4 class="text-left mt-6 mb-6">2 - ¿Qué servicios adicionales desea contratar?
            </h4>
            <v-row justify="center">
              <v-chip
                large
                class="ma-4 pa-4"
                v-for="servicioAdicional in serviciosAdicionales"
                :key="servicioAdicional.nombre"
                @click="agregarServicio(servicioAdicional)"
              >{{ servicioAdicional.nombre }}</v-chip>
            </v-row>
          </v-container>
        </div>
      </v-col>
      <v-sheet
        class="d-flex"
        color="grey lighten-3"
        height="510"
        width="30%"
        v-if="itemsAgregados.length > 0 || serviciosAgregados.length > 0"
      >
        <v-col>
          <h4 class="display-1">PEDIDO</h4>
          <v-divider></v-divider>
          <v-navigation-drawer permanent width="100%" height="400" color="grey lighten-3">
            <v-list color="grey lighten-3">
              <v-list-item-subtitle
                v-if="itemsAgregados.length > 0"
                class="text-sm-left h6 text-decoration-underline"
              >PRODUCTOS:</v-list-item-subtitle>
              <v-list-item v-for="(item, index) in itemsAgregados" :key="item.nombre">
                <v-list-item-content>
                  <v-list-item>
                    {{`${item.nombre}`}}
                    <v-chip color="red lighten-1" class="ma-2" label>{{item.cantidad}}</v-chip>
                  </v-list-item>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey darken-1" @click="sumarItem(item)">mdi-plus-thick</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey darken-1" @click="restarItem(item)">mdi-minus</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey darken-1" @click="eliminarItem(index)">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-list color="grey lighten-3" v-if="serviciosAgregados.length > 0">
              <v-list-item-subtitle class="text-sm-left h6 text-decoration-underline">SERVICIOS:</v-list-item-subtitle>
              <v-list-item v-for="(item, index) in serviciosAgregados" :key="item.nombre">
                <v-list-item-content>{{`${item.nombre}`}}</v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey darken-1" @click="eliminarServicio(index)">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <div v-if="itemsAgregados.length > 0 || serviciosAgregados.length > 0">
            <v-divider></v-divider>
            <v-chip class="mb-1" color="grey lighten-1" large label>Total = ${{ precioTotal }}</v-chip>
          </div>
          <v-card class="mt-3">
            <v-row align="center" v-if="calcularPeso > 0">
              <v-col>
                <h5>Vehículo necesario:</h5>
              </v-col>
              <v-col>
                <div class="mt-3">
                  <v-chip x-large>
                    <v-img width="100" height="auto" :src="vehiculosFiltrados.imagen"></v-img>
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-sheet>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "pasoUno",
  data() {
    return {
      productos: [
        { nombre: "Caja", cantidad: 0, peso: 10 },
        { nombre: "Ropero", cantidad: 0, peso: 300 },
        { nombre: "Cama King", cantidad: 0, peso: 100 },
        { nombre: "Cocina", cantidad: 0, peso: 50 },
        { nombre: "Colchon", cantidad: 0, peso: 20 },
        { nombre: "Mesa de Luz", cantidad: 0, peso: 5 },
        { nombre: "Mesa", cantidad: 0, peso: 50 },
        { nombre: "TV", cantidad: 0, peso: 10 },
        { nombre: "Silla", cantidad: 0, peso: 5 },
        { nombre: "Piano", cantidad: 0, peso: 400 },
        { nombre: "Heladera", cantidad: 0, peso: 100 },
        { nombre: "Lavarropas", cantidad: 0, peso: 100 },
        { nombre: "Lampara", cantidad: 0, peso: 1 },
        { nombre: "Monitor", cantidad: 0, peso: 5 },
        { nombre: "Gabinete", cantidad: 0, peso: 10 },
        { nombre: "Sillon", cantidad: 0, peso: 50 },
        { nombre: "Comoda", cantidad: 0, peso: 60 },
        { nombre: "Rack", cantidad: 0, peso: 40 }
      ],
      serviciosAdicionales: [],
      itemElegido: { nombre: "", cantidad: 0 },
      itemsAgregados: [],
      serviciosAgregados: [],
      servicioAdicional: {},
      vehiculos: [],
      precioTotal: 0,
      search: ""
    };
  },
  methods: {
    ...mapActions([
      "actualizarVehiculo",
      "actualizarPrecioTotal",
      "actualizarElementos",
      "actualizarServicios"
    ]),
    submit(indice) {
      let i = 0;
      while (
        i < this.itemsAgregados.length &&
        this.productosFiltrados[indice].nombre != this.itemsAgregados[i].nombre
      ) {
        i++;
      }
      if (i < this.itemsAgregados.length) {
        this.itemsAgregados[i].cantidad++;
      } else {
        this.productosFiltrados[indice].cantidad++;
        this.itemsAgregados.push(this.productosFiltrados[indice]);
      }
      this.$nextTick(() => {
        this.search = "";
      });
      this.calcularPrecio();
    },
    sumarItem(item) {
      item.cantidad++;
      this.calcularPrecio();
    },
    restarItem(item) {
      if (item.cantidad > 1) {
        item.cantidad--;
      }
      this.calcularPrecio();
    },
    eliminarItem(index) {
      this.itemsAgregados[index].cantidad = 0;
      this.itemsAgregados.splice(index, 1);
      this.calcularPrecio();
    },
    agregarServicio(servicioAdicional) {
      let i = 0;
      while (
        i < this.serviciosAgregados.length &&
        servicioAdicional.nombre != this.serviciosAgregados[i].nombre
      ) {
        i++;
      }
      if (i >= this.serviciosAgregados.length) {
        this.serviciosAgregados.push(servicioAdicional);
      }
      this.calcularPrecio();
    },
    eliminarServicio(index) {
      this.serviciosAgregados.splice(index, 1);
      this.calcularPrecio();
    },
    calcularPrecio() {
      let precioTotal = 0;
      let vehiculoSugerido = this.vehiculosFiltrados;
      precioTotal += vehiculoSugerido.precio;
      this.serviciosAgregados.forEach(
        servicio => (precioTotal += servicio.precio)
      );
      this.precioTotal = precioTotal;
    },
    actualizarStore() {
      this.actualizarVehiculo(this.vehiculosFiltrados);
      this.actualizarPrecioTotal(this.precioTotal);
      this.actualizarElementos(this.itemsAgregados);
      this.actualizarServicios(this.serviciosAgregados);
    }
  },
  computed: {
    calcularPeso() {
      let pesoAcumulado = 0;
      for (let i = 0; i < this.itemsAgregados.length; i++) {
        pesoAcumulado +=
          this.itemsAgregados[i].peso * this.itemsAgregados[i].cantidad;
      }
      return pesoAcumulado;
    },
    vehiculosFiltrados() {
      let i = 0;
      while (
        i < this.vehiculos.length &&
        this.vehiculos[i].capacidad < this.calcularPeso
      ) {
        i++;
      }
      return this.vehiculos[i];
    },
    productosFiltrados() {
      let resultado = [];
      resultado = this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(this.search.toLowerCase())
      );
      return resultado;
    }
  },
  created() {
    this.$root.$refs.pasoUno = this;
    this.serviciosAdicionales = this.$store.getters.getServicios;
    this.vehiculos = this.$store.getters.getVehiculos;
  }
};
</script>