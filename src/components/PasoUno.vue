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
      item-color="green"
      height="50px"
      open-on-clear
      rounded
      return-object
      v-model="itemElegido"
    ></v-autocomplete>

    <v-btn color="green" @click="submit()">Agregar</v-btn>
    <h1 class="text-center">Lista de elementos:</h1>
    <v-list two-line>
      <v-list-item v-for="item in itemsAgregados" :key="item.title">
        <!-- <v-list-item-content v-if="(!(item.title === '')) && item.cantidad > 0"> -->
        <v-list-item-content>
          <v-list-item-title v-text="item.nombre"></v-list-item-title>
          <v-list-item-title >Cantidad: {{item.cantidad}}</v-list-item-title>
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
            <v-icon color="grey lighten-1" @click="eliminar(item)">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
        
      </v-list-item>
    </v-list>
    <hr>
    <h1 class="text-center">Transporte sugerido:</h1>
     <v-card class="mx-auto">
      <v-container fluid fill-height>
        <v-row dense>
          <v-col v-for="vehiculo in vehiculosSugeridos" :key="vehiculo.nombre">
            <v-card>
              <v-img
                :src="vehiculo.imagen"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
                contain
              >
                <v-card-title v-text="vehiculo.nombre"></v-card-title>
                <v-card-subtitle class="white--text" align="left">{{`$ ${vehiculo.precio}`}}</v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <hr>
    <h1 class="text-center">Servicios Adicionales:</h1>
    <v-row justify="space-around">
    <v-col cols="12" sm="4" md="5">
      <v-sheet elevation="10" class="py-4 px-1">
        <v-chip-group
          multiple
          active-class="error--text"
        >
          <v-chip v-for="servicioAdicional in serviciosAdicionales" :key="servicioAdicional">
            {{ servicioAdicional }}
          </v-chip>
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
        { nombre: "Caja", cantidad: 0, peso: 10},
        { nombre: "Ropero", cantidad: 0, peso: 150 },
        { nombre: "Cama 1 plaza", cantidad: 0, peso: 50 },
        { nombre: "Cama 2 plazas", cantidad: 0, peso: 75 },
        { nombre: "Colchon", cantidad: 0, peso: 30 },
        { nombre: "Mesa de Luz", cantidad: 0, peso: 20 },
        { nombre: "Mesa", cantidad: 0, peso: 30 }
      ],
      serviciosAdicionales: ["Carrito", "Peon", "Canasto", "Escalera", "Embalaje"],
      itemElegido: {},
      itemsAgregados: [{}],
      vehiculosSugeridos: this.$store.getters.vehiculos,
      pesoAcumulado: 0
    };
  },
  methods: {
    agregarItem(item) {
      item.cantidad++;
      this.pesoAcumulado += item.peso;
    },
    sacarItem(item) {
      if (item.cantidad >= 1) {
        item.cantidad = item.cantidad - 1;
      } else if(item.cantidad === 0){
        this.itemsAgregados.pop(item);
      }
      this.pesoAcumulado -= item.peso;
    },
    eliminar(item) {
      let pesoItems = (item.peso) * (item.cantidad);
      this.pesoAcumulado -= pesoItems;
      item.cantidad = 0;
      this.itemsAgregados.pop(item);
    },
    submit() {
      this.itemElegido.cantidad++;
      this.pesoAcumulado += this.itemElegido.peso;
      this.itemsAgregados.push(this.itemElegido);
      this.$nextTick(() => {
        this.itemElegido = null;
      });
      this.verificarPeso();
    },
    verificarPeso(){
      this.vehiculosSugeridos.forEach(
        vehiculo => {
          if(this.pesoAcumulado <= vehiculo.capacidad){
            this.vehiculosSugeridos.pop(vehiculo);
          }
        }
      )
    }
  }
};
</script>
