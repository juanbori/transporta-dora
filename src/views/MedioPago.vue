<template>
  <div>
   <v-card max-width="600" class="mx-auto">

      <v-row justify="space-between">
          <v-col
            v-for="vehiculo in vehiculos"
            :key="vehiculo.nombre"
            cols="12"
          >
            <v-card class="card border-secondary" :color="vehiculo.color" dark>
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
                    <v-dialog v-model="dialog" max-width="290">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on">Descripción</v-btn>
                      </template>
                        <v-card>
                          <v-card-title class="headline" v-text="vehiculo.medida"></v-card-title>
                          <v-img :src="vehiculo.fotoMedida"></v-img>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="green darken-1"
                              text
                              @click="cerrarVentana"
                            >
                              Cerrar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-btn class="m-1" @click="irContratar">Contratar</v-btn>
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
      dialog:false,
      vehiculos:[
        {nombre:"MOTO", precio:100, imagen:require("../assets/Vehiculos/Moto.png"), color:'#D5D5D5', medida:"Medidas de la moto", fotoMedida:require("../assets/Medidas/MotoCarga.png")},
        {nombre:"KANGOO", precio:150, imagen:require("../assets/Vehiculos/Kangoo.png"), color:'#EEEEEE', medida:"Medidas de la Kangoo", fotoMedida:require("../assets/Medidas/KangooCarga.png")},
        {nombre:"F100", precio:200, imagen:require("../assets/Vehiculos/F100.png"), color:'#F6F8DE', medida:"Medidas de la F100", fotoMedida:require("../assets/Medidas/F100Carga.png")},
        {nombre:"CAMIÓN", precio:250, imagen:require("../assets/Vehiculos/Camion.png"), color:'#EBECFA', medida:"Medidas del camión", fotoMedida:require("../assets/Medidas/CamionCarga.png")}
      ]
  }
  },
  methods: {

    irContratar() {
      this.$router.push("/FormularioStepper");
    },
    cerrarVentana() {
      this.dialog=false
    }
  }
};
</script>