<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md6>
        <v-card class="mb-3 pa-3">
          <h4>1 - ¿Qué elementos deseas trasladar?</h4>
          <v-autocomplete
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
        </v-card>
        <v-card>
          <h4>2 - Servicios Adicionales</h4>
          <v-sheet class="py-4 px-8">
            <v-chip-group>
              <v-chip
                v-for="servicioAdicional in serviciosAdicionales"
                :key="servicioAdicional.nombre"
                @click="agregarServicio(servicioAdicional)"
              >{{ servicioAdicional.nombre }}</v-chip>
            </v-chip-group>
          </v-sheet>
        </v-card>
      </v-flex>

      <v-flex md6>
        <v-card class="mb-3 pa-3">
          <h4>Pedido</h4>
          <v-list v-if="itemsAgregados.length > 0">
            <v-list-item-subtitle class="text-sm-left">Productos:</v-list-item-subtitle>
            <v-list-item v-for="(item, index) in itemsAgregados" :key="item.nombre">
              <v-list-item-content>
                <v-list-item v-if="itemsAgregados.length > 0">
                  {{`${item.nombre}`}}
                  <v-chip class="ma-2" label>{{item.cantidad}}</v-chip>
                </v-list-item>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1" @click="sumarItem(item)">mdi-plus-thick</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1" @click="restarItem(item)">mdi-minus</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1" @click="eliminarItem(index)">mdi-delete</v-icon>
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
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      productos: [
        { nombre: "Caja", cantidad: 0 },
        { nombre: "Ropero", cantidad: 0 },
        { nombre: "Cama 1 plaza", cantidad: 0 },
        { nombre: "Cama 2 plazas", cantidad: 0 },
        { nombre: "Colchon", cantidad: 0 },
        { nombre: "Mesa de Luz", cantidad: 0 },
        { nombre: "Mesa", cantidad: 0 }
      ],
      serviciosAdicionales: [],
      itemElegido: { nombre: "", cantidad: 0 },
      itemsAgregados: [],
      serviciosAgregados: [],
      servicioAdicional:{}
    };
  },
  methods: {
    submit() {
      let i = 0;
      while (
        i < this.itemsAgregados.length &&
        this.itemElegido.nombre != this.itemsAgregados[i].nombre
      ) {
        i++;
      }
      if (i < this.itemsAgregados.length) {
        this.itemsAgregados[i].cantidad++;
      } else {
        this.itemElegido.cantidad++;
        this.itemsAgregados.push(this.itemElegido);
      }
      this.$nextTick(() => {
        this.itemElegido = null;
      });
    },
    sumarItem(item) {
      item.cantidad++;
    },
    restarItem(item) {
      if (item.cantidad > 1) {
        item.cantidad--;
      }
    },
    eliminarItem(index) {
      this.itemsAgregados[index].cantidad = 0;
      this.itemsAgregados.splice(index, 1);
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
    },
    eliminarServicio(index) {
      this.serviciosAgregados.splice(index, 1);
    }
  },
  created() {
    const servicios = this.$store.state.servicios;
    this.serviciosAdicionales = servicios;
  }
};
</script>