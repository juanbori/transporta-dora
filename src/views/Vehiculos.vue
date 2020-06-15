<template>
  <div class="card-deck mx-auto">
    <div class="card mt-5 p-3">
      <img src="../assets/Vehiculos/Moto.png" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">MOTO</h5>
        <p class="card-text">$100 x día</p>
        <button @click="irDescripcion" class="btn btn-primary">Descripción</button>
        <br />
        <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button>
        <br />
      </div>
    </div>

    <div class="card mt-5 p-3">
      <img src="../assets/Vehiculos/Kangoo.png" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">KANGOO</h5>
        <p class="card-text">$150 x día</p>
        <button @click="irDescripcion" class="btn btn-primary">Descripción</button>
        <br />
        <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button>
        <br />
      </div>
    </div>

    <div class="card mt-5 p-3">
      <img src="../assets/Vehiculos/F100.png" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">F100</h5>
        <p class="card-text">$200 x día</p>
        <button @click="irDescripcion" class="btn btn-primary">Descripción</button>
        <br />
        <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button>
        <br />
      </div>
    </div>

    <div class="card mt-5 p-3">
      <img src="../assets/Vehiculos/Camion.png" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">CAMIÓN</h5>
        <p class="card-text">$250 x día</p>
        <button @click="irDescripcion" class="btn btn-primary">Descripción</button>
        <br />
        <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vehiculos",
  methods: {
    irDescripcion() {
      this.$router.push("/ServAdicionales");
    },
    irContratar() {
      this.$router.push("/Formulario");
    }
  }
};
</script>