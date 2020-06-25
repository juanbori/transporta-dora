<template>
  <div class="app">
    <v-carousel cycle height="850px" show-arrows-on-hover>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.imagen">
        <v-responsive dark>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h3>{{ title }}</h3>
                <span class="subheading">{{ subtitle }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-responsive>
      </v-carousel-item>
    </v-carousel>
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
      subtitle:
        "Somos una empresa familiar con mas de 10 años de trayectoria, dedicada al transporte de elementos por todo CABA. Nuestro compromiso es satisfacer al cliente en cada una de las entregas, valorando los objetos como si fueran nuestros"
    };
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
</style>
