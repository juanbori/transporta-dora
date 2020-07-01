<template>
  <!-- inicio stepper -->
  <v-stepper v-model="paso" class="pb-12">
    <v-stepper-header>
      <v-stepper-step :complete="paso > 1" step="1">Vehículos y Servicios</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2">Datos Personales</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12">
          <paso-uno></paso-uno>
        </v-card>

        <v-btn @click="irPasoDos" color="green">Continuar</v-btn>

        <v-btn @click="irHome" class="m-2" color="blue">Cancelar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12">
          <v-btn flat @click.native="paso = 1" color="blue" class="float-left">Volver</v-btn>
          <paso-dos></paso-dos>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  <!-- fin stepper  -->
</template>



<script>
import PasoDos from "./PasoDos.vue";
import PasoUno from "./PasoUno.vue";

export default {
  data() {
    return {
      paso: 1
    };
  },
  components: {
    PasoUno,
    PasoDos
  },
  methods:{
    irHome(){
     this.$router.push("/");
  },
  irPasoDos(){
    this.paso = 2;
    this.$root.$refs.pasoUno.actualizarStore();
  }
  }
};
</script>