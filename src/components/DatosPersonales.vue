<template>
  <div class="row">
    <div class="col-6">
        <form action="">
            <div class= "form-group row">
                <label for="" class="col-4 col-form-label">Nombre y Apellido:</label>
                <input type="text" placeholder="Escriba su nombre y apellido" class="form-control col-8" required>              
            </div>
             <div class= "form-group row">
                <label for="" class="col-2 col-form-label">DNI:</label>
                <input type="text" placeholder="Escriba su DNI" class="form-control col-10" required>              
            </div>
            <div class= "form-group row">
                <label for="" class="col-2 col-form-label">E-mail:</label>
                <input type="email" placeholder="Escriba su correo electrónico" class="form-control col-10" required>             
            </div>
            <div class= "form-group row">
                <label for="" class="col-2 col-form-label">Teléfono:</label>
                <input type="text" placeholder="Escriba su número de teléfono" class="form-control col-10" required>             
            </div>
         
            <div class="form-group row">
                <div class="col">
                    <input type="text" class="form-control col-10" placeholder="Ingrese lugar de origen" required>
                </div>
                <div class="col">
                    <input type="text" class="form-control col-10" placeholder="Ingrese lugar de destino" required> 
                </div>
            </div>
            <!-- <div>
                <label for="example-datepicker">Choose a date</label>
                <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                <p>Value: '{{ value }}'</p>
            </div> -->

            <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineRadio1">Medio de pago:</label>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">Efectivo</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">T. Débito</label>
            </div>
           
             <div class= "form-group row">
                <label for="" class="col-4 col-form-label">Monto a abonar:</label>
                <input type="text" class="form-control col-8">             
            </div>
            <button class="btn btn-primary" type="submit">Enviar</button>
        </form>

    </div>
  </div>
</template>



<script>
export default {
    name: 'DatosPersonales',
    data(){
        return{
            value: ''
        }
    }
}
</script>
