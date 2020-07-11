<template>
  <div class="pt-12 pb-16">
    <h1 class="font-weight-bold">TRANSPORTA DORA</h1>
    <v-container fill-height>
      <v-carousel cycle hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.imagen"></v-carousel-item>
      </v-carousel>
      <div class="pt-12">
        <h3 class="text-left font-italic">{{ title }}</h3>
        <p class="text-justify font-italic">{{ subtitle }}</p>
      </div>
      <v-carousel height="auto" hide-delimiters cycle show-arrows-on-hover>
        <h3 class="font-weight-medium pt-12">Conocé lo que tenemos para vos</h3>
        <v-carousel-item v-for="(vehiculo) in vehiculos" :key="vehiculo.nombre">
          <v-col>
            <v-avatar class="ma-2" height="auto" width="auto" max-width="250" tile>
              <v-img :src="vehiculo.imagen"></v-img>
            </v-avatar>
            <h5>{{vehiculo.nombre}}</h5>
            <div>
              <v-btn class="m-1" @click="irVehiculos" dark>Ver mas...</v-btn>
            </div>
          </v-col>
        </v-carousel-item>
      </v-carousel>
      <div>
        <h3 class="font-weight-medium pt-12">Nuestros Clientes</h3>
      </div>
      <v-row justify="space-between">
        <v-card width="225px" v-for="comentario in comentarios" :key="comentario.persona">
          <v-card-text>
            <p class="display-1 text--primary">{{`${comentario.persona} de ${comentario.lugar}`}}</p>
            <div class="text--primary">{{comentario.frase}}</div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        { imagen: require("../assets/Carousel/sprinter-background.jpg") },
        { imagen: require("../assets/Carousel/traslado2.jpg") },
        { imagen: require("../assets/Carousel/traslado3.jpg") },
        { imagen: require("../assets/Carousel/traslado4.jpg") }
      ],
      title: "¿Quiénes somos?",
      subtitle: `Somos una empresa familiar con mas de 10 años de trayectoria, dedicada al transporte de elementos por toda la Ciudad de Buenos Aires.
         Nuestro compromiso es satisfacer al cliente en cada una de las entregas, valorando los objetos que trasladamos como si fueran nuestros.
         Cada día nos eligen por nuestro compromiso y seriedad. Esperamos contar con tu apoyo`,
      vehiculos: [],
      comentarios: [
        {
          persona: "Oscar",
          lugar: "Flores",
          frase: "Muy buen trato y cumplen con todo. Los recomiendo!"
        },
        {
          persona: "Juan",
          lugar: "Microcentro",
          frase: "Super atentos y cuidados con todos mis muebles"
        },
        {
          persona: "Melina",
          lugar: "Retiro",
          frase: "Puntuales y muy profesionales. Ya los recomendé a mis amigos"
        },
        {
          persona: "Silvia",
          lugar: "Caballito",
          frase: "Excelente servicio. Todo el personal muy amable"
        },
        {
          persona: "Matías",
          lugar: "Belgrano",
          frase: "Muy prolijos para el embalaje!"
        }
      ]
    };
  },
  created() {
    this.vehiculos = this.$store.getters.getVehiculos;
  },
  methods: {
    irContratar() {
      this.$router.push("/FormularioStepper");
    },
    irVehiculos() {
      this.$router.push("/Vehiculos");
    }
  }
};
</script>

<style scoped>
.banner {
  display: block;
  max-height: 500px;
  object-fit: cover;
  width: 100%;
}
h3 {
  text-align: center;
}
</style>
