<template>
  <div id="app">
    <v-app id="inspire">
      <div class="row">
        <div class="col-2" v-for="servicio in servicios" :key="servicio.nombre">
          <v-card max-width="370" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{servicio.nombre}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-img v-bind:src="servicio.imagen" height="250"></v-img>

            <v-card-text>{{`$ ${servicio.precio}`}}</v-card-text>
          </v-card>
        </div>
      </div>
    </v-app>
    <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button><br>
  </div>
</template>

<script>
export default {
  data() {
    return{
      servicios:[
        {nombre:"PEÓN", precio:200, imagen:require("../assets/ServAdic/PeonSF.png")},
        {nombre:"CARRITO", precio:20, imagen:require("../assets/ServAdic/CarritoSF.png")},
        {nombre:"EMBALAJE", precio:50, imagen:require("../assets/ServAdic/EmbalajeSF.png")},
        {nombre:"ESCALERA", precio:50, imagen:require("../assets/ServAdic/EscaleraSF.png")},
        {nombre:"CANASTO", precio:10, imagen:require("../assets/ServAdic/CanastoSF.png")}
      ]
  }
  },
  methods: {
    irContratar() {
      this.$router.push("/FormularioStepper");
    }
  }
};
</script>



