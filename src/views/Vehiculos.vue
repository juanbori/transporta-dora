<template>
  <v-flex class="pb-16">
    <v-card max-width="600" class="mx-auto">
      <v-row justify="space-between">
        <v-col v-for="(vehiculo, index) in vehiculos" :key="vehiculo.nombre" cols="12">
          <v-card class="card border-secondary" :color="vehiculo.color">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-2" size="125" height="100%" width="100%" max-width="300" tile>
                <v-img :src="vehiculo.imagen"></v-img>
              </v-avatar>
              <v-col>
                <h5>{{vehiculo.nombre}}</h5>
                <p>{{`$ ${vehiculo.precio} por día`}}</p>
                <div>
                  <v-btn class="m-1" @click="dialog = true, irDescripcion(index)" dark>Descripción</v-btn>
                  <v-btn class="m-1" @click="irContratar" dark>Contratar</v-btn>
                </div>
              </v-col>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline" v-text="descripcion.medida"></v-card-title>
        <v-img :src="descripcion.fotoMedida"></v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="cerrarVentana">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>   

<script>
export default {
  data() {
    return {
      descripcion:{},
      dialog: false,
      vehiculos: [
        {
          nombre: "MOTO",
          precio: 100,
          imagen: require("../assets/Vehiculos/Moto.png"),
          color: "#D5D5D5",
          medida: "Medidas de la moto",
          fotoMedida: require("../assets/Medidas/MotoCarga.png")
        },
        {
          nombre: "KANGOO",
          precio: 150,
          imagen: require("../assets/Vehiculos/Kangoo.png"),
          color: "#EEEEEE",
          medida: "Medidas de la Kangoo",
          fotoMedida: require("../assets/Medidas/KangooCarga.png")
        },
        {
          nombre: "F100",
          precio: 200,
          imagen: require("../assets/Vehiculos/F100.png"),
          color: "#F6F8DE",
          medida: "Medidas de la F100",
          fotoMedida: require("../assets/Medidas/F100Carga.png")
        },
        {
          nombre: "CAMIÓN",
          precio: 250,
          imagen: require("../assets/Vehiculos/Camion.png"),
          color: "#EBECFA",
          medida: "Medidas del camión",
          fotoMedida: require("../assets/Medidas/CamionCarga.png")
        }
      ]
    };
  },
  methods: {
    irContratar() {
      this.$router.push("/FormularioStepper");
    },
    cerrarVentana() {
      this.dialog = false;
    },
    irDescripcion(index) {
      this.descripcion=this.vehiculos[index];
    }
  }
};
</script>