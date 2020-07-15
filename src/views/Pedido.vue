<template>
  <div class="container mt-5 mb-5 pb-12">
    <div class="card">
      <h3 class="card-header text-center">Información sobre su pedido</h3>
      <div class="card-body">
        <v-row justify="center">
          <v-col cols="4">
            <v-text-field v-model="id" label="Ingrese aquí su número de pedido" required></v-text-field>
            <v-btn @click="getpedido()">Buscar Pedido</v-btn>
          </v-col>
        </v-row>
        <v-simple-table v-show="mostrar">
          <template v-slot:default>
            <tbody>
              <tr>
                <th class="text-left">Número de Pedido</th>
                <td>{{ pedido.id }}</td>
              </tr>
              <tr>
                <th class="text-left">Nombre</th>
                <td>{{ pedido.nombre }}</td>
              </tr>
              <tr>
                <th class="text-left">Apellido</th>
                <td>{{ pedido.apellido }}</td>
              </tr>
              <tr>
                <th class="text-left">DNI</th>
                <td>{{ pedido.dni }}</td>
              </tr>
              <tr>
                <th class="text-left">Email</th>
                <td>{{ pedido.email }}</td>
              </tr>
              <tr>
                <th class="text-left">Teléfono</th>
                <td>{{ pedido.telefono }}</td>
              </tr>
              <tr>
                <th class="text-left">Ciudad de Origen</th>
                <td>{{ pedido.ciudadOrigen }}</td>
              </tr>
              <tr>
                <th class="text-left">Ciudad de Destino</th>
                <td>{{ pedido.ciudadDestino }}</td>
              </tr>
              <tr>
                <th class="text-left">Tipo de Pago</th>
                <td>{{ pedido.tipoPago }}</td>
              </tr>
              <tr>
                <th class="text-left">Fecha de traslado</th>
                <td>{{ pedido.date }}</td>
              </tr>
              <tr>
                <th class="text-left">Vehículo</th>
                <td>{{ pedido.vehiculo }}</td>
              </tr>
              <tr>
                <th class="text-left">Servicios Adicionales</th>
                <td>
                  <p v-for="item in pedido.serviciosAdicio" :key="item.nombre">{{item}}</p>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: "",
      pedido: {},
      mostrar: false
    };
  },
  computed: {
    ...mapGetters([
      "obtenerVehiculo",
      "obtenerPrecioVehiculo",
      "obtenerPrecioTotal",
      "obtenerElementos",
      "obtenerServicios"
    ])
  },
  methods: {
    async getpedido() {
      const respuesta = await axios.get("/pedido/" + this.id);
      this.pedido = respuesta.data;
      if (this.id == "") {
        this.mostrar = false;
      } else {
        this.mostrar = true;
        this.id = "";
      }
    }
  }
};
</script>
