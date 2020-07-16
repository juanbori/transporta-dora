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
        <div class="mt-5 mb-5">
          <paso-uno></paso-uno>
        </div>
        <v-btn @click="irPasoDos" class="m-2 btn btn-success" >Continuar</v-btn>
        <v-btn @click="irHome" class="m-2 btn btn-primary">Cancelar</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <div class="container mt-5 mb-5">
          <paso-dos></paso-dos>
          <v-btn @click="enviarForm" class="m-2 btn btn-success">Enviar</v-btn>
          <v-btn @click.native="paso = 1" class="m-2 btn btn-primary">Volver</v-btn>
        </div>
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
  methods: {
    irHome() {
      this.$router.push("/");
    },
    irPasoDos() {
      this.paso = 2;
      this.$root.$refs.pasoUno.actualizarStore();
    },
    enviarForm() {
      this.$root.$refs.pasoDos.submitForm();
    },
  }
};
</script>