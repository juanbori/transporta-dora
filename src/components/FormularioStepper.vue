<template>
  <!-- inicio stepper -->
  <v-stepper v-model="paso">
    <v-stepper-header>
      <v-stepper-step :complete="paso > 1" step="1">Vehículos y Servicios</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2">Datos Personales</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" height="1000px">
          <paso-uno></paso-uno>
        </v-card>

        <v-btn @click="paso = 2">Continue</v-btn>

        <v-btn class="m-2">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" height="1000px">
          <paso-dos></paso-dos>
        </v-card>

        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >Enviar</button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mensaje</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Se ha enviado con éxito</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Fin modal -->
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  <!-- fin stepper  -->
</template>

<style scoped>
.boton-primario {
  background-color: lightblue;
}

.boton-secundario {
  background-color: lightsalmon;
}
</style>

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
  }
};
</script>