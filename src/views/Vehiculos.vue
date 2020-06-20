<template>
  <div>
    <div v-for="vehiculo in vehiculos" :key="vehiculo.nombre">

      <div class="card border-secondary m-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-6">
            <img class="card-img-top m-3" v-bind:src="vehiculo.imagen"> 
          </div>
          <div class="col-md-6">
            <div class="card-body">     
              <h5 class="card-title">{{vehiculo.nombre}}</h5>
              <p class="card-text">{{`$ ${vehiculo.precio} por día`}}</p>
              <button @click="irVehiculo" class="btn btn-primary">Descripción</button><br>
              <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button><br>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>    

</template>   

<script>
export default {
  data() {
    return{
      vehiculos:[
        {nombre:"Moto", precio:100, imagen:require("../assets/Vehiculos/Moto.png")},
        {nombre:"Kangoo", precio:150, imagen:require("../assets/Vehiculos/Kangoo.png")},
        {nombre:"F100", precio:200, imagen:require("../assets/Vehiculos/F100.png")},
        {nombre:"Camión", precio:250, imagen:require("../assets/Vehiculos/Camion.png")}
      ]
  }
  },
  methods: {
    irVehiculo() {
      this.$router.push("/Camion");
    },
    irContratar() {
      this.$router.push("/FormularioStepper");
    }
  }
};
</script>