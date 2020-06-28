<template>
  <div class="pt-12" id="app">
    <v-card class="mx-auto">
      <v-container fluid fill-height>
        <v-row dense>
          <v-col v-for="servicio in servicios" :key="servicio.nombre">
            <v-card>
              <v-img
                :src="servicio.imagen"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"

              >
                <v-card-title v-text="servicio.nombre"></v-card-title>
                <v-card-subtitle class="white--text" align="left">{{`$ ${servicio.precio}`}}</v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <div class="my-2">
        <v-btn @click="irContratar">Contratar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      servicios:[]
  }
  },
  methods: {
    irContratar() {
      this.$router.push("/FormularioStepper");
    }
  },
  created(){
    const servicios = this.$store.state.servicios
    this.servicios = servicios
  }
};
</script>



