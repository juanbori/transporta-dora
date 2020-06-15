<template>
  <div>
    <div class="card border-secondary m-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-6">
          <img src="../assets/Vehiculos/Moto.jpg" class="card-img-top m-3"> 
        </div>
        <div class="col-md-6">
          <div class="card-body">     
            <h5 class="card-title">MOTO</h5>
            <p class="card-text">$100 x día</p>
            <button @click="irDescripcion" class="btn btn-primary">Descripción</button><br>
            <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button><br>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-secondary m-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-6">
          <img src="../assets/Vehiculos/Kangoo.jpg" class="card-img-top m-3">
        </div>
        <div class="col-md-6"> 
          <div class="card-body">     
              <h5 class="card-title">KANGOO</h5>
              <p class="card-text">$150 x día</p>
             <button @click="irDescripcion" class="btn btn-primary">Descripción</button><br>
             <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button><br>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card border-secondary m-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-8">
          <img src="../assets/Vehiculos/F100.jpg" class="card-img-top"> 
        </div>
        <div class="col-md-4"> 
          <div class="card-body">     
              <h5 class="card-title">F100</h5>
              <p class="card-text">$200 x día</p>
              <button @click="irDescripcion" class="btn btn-primary">Descripción</button><br>
              <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button><br>
          </div>
        </div>
      </div>
    </div>

    
    <div class="card border-secondary m-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-8">
          <img src="../assets/Vehiculos/Camion.jpg" class="card-img-top m-3"> 
        </div>
        <div class="col-md-4"> 
          <div class="card-body">     
              <h5 class="card-title">CAMIÓN</h5>
              <p class="card-text">$250 x día</p>
              <button @click="irDescripcion" class="btn btn-primary">Descripción</button><br>
              <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button><br>
          </div>
        </div>
      </div>
    </div>

  </div>       
</template>






<script>
export default {
  name: 'Vehiculos',
  methods:{
    irDescripcion(){
      this.$router.push('/ServAdicionales')
    },
    irContratar(){
      this.$router.push('/Formulario')
    }
  }
}
</script>