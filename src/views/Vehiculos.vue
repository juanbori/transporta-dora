<template>
  <div class="pt-12 pb-16">
    <v-container fluid fill-height>
      <h2 class="font-weight-bold">Nuestros Vehículos</h2>
      <p class="text-justify">
        Contamos con una variedad de vehículos según la necesidad de cada uno,
        desde el traslado de una caja hasta la mudanza a un nuevo hogar. Aquí
        les presentamos nuestra flota para que las conozcan un poco más...
      </p>
      <v-row justify="space-between">
        <v-col v-for="(vehiculo, index) in vehiculos" :key="vehiculo.nombre" cols="6">
          <v-card
            height="100%"
            max-width="600"
            class="mx-auto card border-secondary"
            :color="vehiculo.color"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-2" height="auto" width="auto" max-width="250" tile>
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
    </v-container>
  </div>
</template>   

<script>
export default {
  data() {
    return {
      descripcion: {},
      dialog: false,
      vehiculos: []
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
      this.descripcion = this.vehiculos[index];
    }
  },
  created() {
    this.vehiculos = this.$store.getters.getVehiculos;
  }
};
</script>


<style>
</style>