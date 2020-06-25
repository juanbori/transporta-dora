<template>
  <div class="pb-12">
    <v-container fluid v-for="metodo in metodoPago" :key="metodo.titulo">
      <v-row justify="center">
        <v-col cols="6" md="2">
          <v-img :src="metodo.imagen"></v-img>
        </v-col>
        <v-col cols="6" md="3">
          <v-card-title>{{metodo.titulo}}</v-card-title>
          <li class="text-left" v-for="item in metodo.items" :key="item">{{item}}</li>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      metodoPago: [
        {
          titulo: "Efectivo",
          items: ["-20% de descuento"],
          imagen: require("../assets/pago/payment-agreement.svg")
        },
        {
          titulo: "Tarjeta de Débito",
          items: ["Visa", "Maestro", "MasterCard"],
          imagen: require("../assets/pago/debit-card.svg")
        },
        {
          titulo: "Tarjeta de Crédito",
          items: [
            "1 Cuota (+5%)",
            "2 Cuotas (+5%)",
            "3 Cuotas sin interés",
            "6 Cuotas (+5%)"
          ],
          imagen: require("../assets/pago/credit-card.svg")
        }
      ]
    };
  }
};
</script>
<style>
</style>