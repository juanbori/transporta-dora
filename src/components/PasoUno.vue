<template>
  <v-container>
    <v-autocomplete
      label="Que cosas pensas mudar?"
      :items="items"
      item-text="nombre"
      hide-no-data
      clearable
      small-chips
      deletable-chips
      background-color="blue"
      cache-items
      height="50px"
      open-on-clear
      rounded
      return-object
      v-model="itemElegido"
    ></v-autocomplete>

    <v-btn color="green" @click="submit()">Agregar</v-btn>
    <h1 class="text-center">Lista de elementos:</h1>
    <v-list two-line>
      <v-list-item v-for="(item, index) in itemsAgregados" :key="item.title">
        <v-list-item-content>
          <v-list-item-title v-if="itemsAgregados.length > 0" v-text="item.nombre"></v-list-item-title>
          <v-list-item-title v-if="itemsAgregados.length > 0">Cantidad:{{item.cantidad}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1" @click="agregarItem(item)">mdi-plus-thick</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1" @click="sacarItem(item)">mdi-minus</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1" @click="eliminar(index)">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <hr />
    <h1 class="text-center">Servicios Adicionales:</h1>
    <v-row justify="space-around">
      <v-col cols="12" sm="4" md="5">
        <v-sheet elevation="10" class="py-4 px-1">
          <v-chip-group multiple active-class="error--text">
            <v-chip
              v-for="servicioAdicional in serviciosAdicionales"
              :key="servicioAdicional"
            >{{ servicioAdicional }}</v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PasoUno",
  data() {
    return {
      items: [
        { nombre: "Caja", cantidad: 0 },
        { nombre: "Ropero", cantidad: 0 },
        { nombre: "Cama 1 plaza", cantidad: 0 },
        { nombre: "Cama 2 plazas", cantidad: 0 },
        { nombre: "Colchon", cantidad: 0 },
        { nombre: "Mesa de Luz", cantidad: 0 },
        { nombre: "Mesa", cantidad: 0 }
      ],
      serviciosAdicionales: [
        "Carrito",
        "Peon",
        "Canasto",
        "Escalera",
        "Embalaje"
      ],
      itemElegido: { nombre: "", cantidad: 0 },
      itemsAgregados: []
    };
  },
  methods: {
    agregarItem(item) {
      item.cantidad++;
    },
    sacarItem(item) {
      if (item.cantidad >= 1) {
        item.cantidad--;
      }
    },
    eliminar(index) {
      this.itemsAgregados[index].cantidad = 0;
      this.itemsAgregados.splice(index, 1);
    },
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
    }
  }
};
</script>