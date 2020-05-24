<template>
  <div class="home row">
   <div class="banner"> 
     <HelloWorld msg="DORA TRANSPORTADORA"/>
      <img alt="Vue logo" src="../assets/sprinter-background.jpg" class="banner">
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.banner {
  display: block;
  max-height: 500px;
  object-fit: cover;
  width: 100%;
}

</style>
