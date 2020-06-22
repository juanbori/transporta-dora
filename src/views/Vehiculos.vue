<template>
  <div>
   <v-card max-width="600" class="mx-auto">

      <v-row justify="space-between">
          <v-col
            v-for="vehiculo in vehiculos"
            :key="vehiculo.nombre"
            cols="12"
          >
            <v-card class="card border-secondary" :color="vehiculo.color">
              <div class="d-flex flex-no-wrap justify-space-between">
               <v-avatar
                  class="ma-2"
                  size="125"
                  height="100%"
                  width="100%"
                  max-width="300"
                  tile
                >
                  <v-img :src="vehiculo.imagen"></v-img>
                </v-avatar>
                <v-col>
                    <h5>{{vehiculo.nombre}}</h5>
                    <p>{{`$ ${vehiculo.precio} por día`}}</p>
                  <div>
                    <v-btn class="m-1" @click="irVehiculo" dark>Descripción</v-btn>
                    <v-btn class="m-1" @click="irContratar" dark>Contratar</v-btn>
                  </div>
                </v-col>
              </div>
            </v-card>
          </v-col>
        </v-row>
    </v-card>
  </div>    
</template>   

<script>
export default {
  data() {
    return{
      vehiculos:[
        {nombre:"MOTO", precio:100, capacidad: 10, imagen:require("../assets/Vehiculos/Moto.png"), color:'#D5D5D5'},
        {nombre:"KANGOO", precio:150, capacidad: 500, imagen:require("../assets/Vehiculos/Kangoo.png"), color:'#EEEEEE'},
        {nombre:"F100", precio:200, capacidad: 700,imagen:require("../assets/Vehiculos/F100.png"), color:'#F6F8DE'},
        {nombre:"CAMIÓN", precio:250, capacidad: 1000, imagen:require("../assets/Vehiculos/Camion.png"), color:'#EBECFA'}
      ]
   }
  },
  methods: {
    irVehiculo() {
      this.$router.push("/Camion");
    },
    irContratar() {
      this.$router.push("/FormularioStepper");
    }
  }
};
</script>