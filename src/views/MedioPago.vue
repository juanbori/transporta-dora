<template>
  <div>
    <div class="card border-secondary m-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-8">
          <img src="../assets/Vehiculos/Camion.png" class="card-img-top m-3" />
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <h5 class="card-title">CAMIÓN</h5>
            <p class="card-text">$250 x día</p>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >Descripción</button>
            <button @click="irContratar" class="btn btn-primary mt-1">Contratar</button>
            <br />
          </div>
        </div>
      </div>
    </div>

    

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Medidas del Camión</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="../assets/Medidas/CamionCarga.png" class="card-img-top m-3" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({})
};
</script>



