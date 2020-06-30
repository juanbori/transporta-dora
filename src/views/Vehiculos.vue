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
      this.descripcion=this.vehiculos[index];
    }
  },
   created(){
    this.vehiculos  = this.$store.getters.getVehiculos
  }
};
</script>