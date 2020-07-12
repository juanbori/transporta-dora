<template>
  <div>
    <h2 class="text-decoration-underline">ARME SU PEDIDO</h2>
    <v-row align="center">
      <v-col>
        <div class="mb-3 pa-3">
          <h4>1 - ¿Qué elementos desea trasladar?</h4>
          <v-container fluid>
            <v-data-iterator :items="productos" :search="search" hide-default-footer>
              <template v-slot:header>
                <v-toolbar dark color="blue darken-3" class="mb-1">
                  <v-text-field
                    v-model="search"
                    clearable
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
                      <v-card-title
                        v-model="itemElegido"
                        @click="submit(index)"
                        class="justify-center font-weight-bold"
                      >{{ producto.nombre }}</v-card-title>
                      <v-divider></v-divider>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-container>
          <!-- <v-autocomplete
            label="Seleccionar un elemento..."
            :items="productos"
            item-text="nombre"
            hide-no-data
            clearable
            small-chips
            deletable-chips
            background-color="grey lighten-1"
            cache-items
            height="50px"
            open-on-clear
            rounded
            return-object
            v-model="itemElegido"
          ></v-autocomplete>

          <v-btn block color="success" @click="submit">Agregar</v-btn>
        </div>
          <div class="mb-3 pa-3">-->
          <h4>2 - Servicios Adicionales</h4>
          <v-sheet class="py-4 px-8">
            <v-chip-group>
              <v-chip
                small
                v-for="servicioAdicional in serviciosAdicionales"
                :key="servicioAdicional.nombre"
                @click="agregarServicio(servicioAdicional)"
              >{{ servicioAdicional.nombre }}</v-chip>
            </v-chip-group>
          </v-sheet>
        </div>

        <v-card class="mb-3 pa-3" v-if="calcularPeso > 0">
          <p>Este es el vehiculo que mejor se adapta a sus necesidades:</p>
          <v-chip x-large>
            <v-img width="90" :src="vehiculosFiltrados.imagen"></v-img>
          </v-chip>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>

      <v-sheet class="d-flex" color="grey lighten-3" height="600" width="30%">
        <v-col>
          <h4 class="display-1">Pedido</h4>
          <v-divider></v-divider>
          <v-list color="grey lighten-3" v-if="itemsAgregados.length > 0">
            <v-list-item-subtitle class="text-sm-left">Productos:</v-list-item-subtitle>
            <v-list-item v-for="(item, index) in itemsAgregados" :key="item.nombre">
              <v-list-item-content>
                <v-list-item v-if="itemsAgregados.length > 0">
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
          <v-list v-if="serviciosAgregados.length > 0">
            <v-list-item-subtitle class="text-sm-left">Servicios:</v-list-item-subtitle>
            <v-list-item v-for="(item, index) in serviciosAgregados" :key="item.nombre">
              <v-list-item-content>{{`${item.nombre}`}}</v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1" @click="eliminarServicio(index)">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <div v-if="itemsAgregados.length > 0 || serviciosAgregados.length > 0">
            <v-divider></v-divider>
            <v-chip
              class="mb-1"
              lass="ma-2"
              color="grey lighten-1"
              large
              label
            >Total = ${{ precioTotal }}</v-chip>
          </div>
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
        { nombre: "Cama Queen", cantidad: 0, peso: 200 },
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
      // this.$nextTick(() => {
      //   this.itemElegido = null;
      // });
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