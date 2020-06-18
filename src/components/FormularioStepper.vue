<template>
  <!-- inicio stepper -->
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Vehículos y Servicios</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2">Datos Personales</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" height="1000px">
          <paso-uno></paso-uno>
        </v-card>

        <v-btn @click="e1 = 2" class="boton-primario" text>Continuar</v-btn>

        <v-btn class="boton-secundario" text>Cancelar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px">
          <datos-personales></datos-personales>
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
import DatosPersonales from "./DatosPersonales.vue";
import PasoUno from "./PasoUno.vue";

export default {
  data() {
    return {
      e1: 1
    };
  },
  components: {
    PasoUno,
    DatosPersonales
  }
};
</script>