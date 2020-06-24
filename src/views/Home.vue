<template>
  <div class="app">
    <v-carousel cycle height="850px" show-arrows-on-hover>
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
      ]
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
