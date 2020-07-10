<template>
  <div class="pt-12 pb-12">
    <h1 class="font-weight-bold">TRANSPORTA DORA</h1>
      <v-carousel cycle show-arrows-on-hover>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.imagen"></v-carousel-item>
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
      subtitle: `Somos una empresa familiar con mas de 10 años de trayectoria, dedicada al transporte de elementos por toda la Ciudad de Buenos Aires.
         Nuestro compromiso es satisfacer al cliente en cada una de las entregas, valorando los objetos que trasladamos como si fueran nuestros.
         Cada día nos eligen por nuestro compromiso y seriedad. Esperamos contar con tu apoyo`
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
