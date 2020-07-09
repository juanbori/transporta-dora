<template>
  <div class="pt-12 pb-16" id="app">
    <v-container fluid fill-height>
      <h3 class="font-weight-bold">Servicios Adicionales</h3>
      <p class="text-justify">
        En nuestra empresa sabemos lo que usted necesita, es por eso que ponemos a su alcance todos los servicios que le puedan hacer falta. Brindamos
        todo lo necesario para cuidar de sus objetos de la mejor manera posible. Haga click en Contratar y elija entre nuestros servicios
      </p>
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
      <p class="font-weight-bold pt-12">¡Ojo! A tener en cuenta...</p>
      <v-row dense class="text-left">
        <v-col cols="12">
          <v-card class="ma-3 pa-6">
            <v-avatar color="orange lighten-2" size="70">
              <span class="white--text">Peón</span>
            </v-avatar>
            <v-card-text>Nuestro personal está capacitado en la carga y descarga de elementos, su distribucion y manipulación. Están altamente calificados en el traslado de objetos con rapidez pero con mucho cuidado</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="ma-3 pa-6">
            <v-avatar color="orange lighten-2" size="70">
              <span class="white--text">Carrito</span>
            </v-avatar>
            <v-card-text>El servicio de carrito, muchas veces no tenido en cuenta, permite agilizar los tiempos de mudanza y facilita el traslado, sobretodo para quien está a cargo de levantar las cajas!</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="ma-3 pa-6">
            <v-avatar color="orange lighten-2" size="70">
              <span class="white--text">Embalaje</span>
            </v-avatar>
            <v-card-text>El servicio de embalaje es un alivio para nuestros usuarios, quienes se olvidan y delegan esta actividad en nuestro personal. Siempre con confianza y seriedad</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="ma-3 pa-6">
            <v-avatar color="orange lighten-2" size="70">
              <span class="white--text">Escalera</span>
            </v-avatar>
            <v-card-text>No es lo mismo un primer piso que un numero catorce! Hay muchos elementos que no pueden trasladarse en ascensor asi que es un servicio a tener en cuenta para que nuestro personal se haga cargo</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="ma-3 pa-6">
            <v-avatar color="orange lighten-2" size="70">
              <span class="white--text">Canasto</span>
            </v-avatar>
            <v-card-text>¿No encontras cajas grandes? Despreocupate, te alcanzamos los canastos que te hagan falta y listo!</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicios: []
    };
  },
  methods: {
    irContratar() {
      this.$router.push("/FormularioStepper");
    }
  },
  created() {
    this.servicios = this.$store.getters.getServicios;
  }
};
</script>



