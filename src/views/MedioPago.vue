<template>
  <div class="pb-12">
    <v-container fluid fill-height>
      <h2 class="font-weight-bold">Medios de pago</h2>
      <v-row justify="center">
        <v-col md="3" v-for="metodo in metodoPago" :key="metodo.titulo">
          <v-card height="100%" class="pa-6">
            <v-img :src="metodo.imagen"></v-img>
            <v-card-title class="font-weight-bold justify-center">{{metodo.titulo}}</v-card-title>
            <v-card-text
              class="text-left font-weight-bold"
              v-for="item in metodo.items"
              :key="item"
            >{{item}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row justify="center">
      <v-col class="ma-2" md="1">
        <v-img src="../assets/pago/ciudad.jpg"></v-img>
      </v-col>
      <v-col class="ma-2" md="1">
        <v-img src="../assets/pago/galicia.jpg"></v-img>
      </v-col>
      <v-col class="ma-2" md="1">
        <v-img src="../assets/pago/hipotecario.jpg"></v-img>
      </v-col>
      <v-col class="ma-2" md="1">
        <v-img src="../assets/pago/macro.jpg"></v-img>
      </v-col>
      <v-col class="ma-2" md="1">
        <v-img src="../assets/pago/nacion.jpg"></v-img>
      </v-col>
      <v-col class="ma-2" md="1">
        <v-img src="../assets/pago/supervielle.jpg"></v-img>
      </v-col>
      <v-col class="ma-2" md="1">
        <v-img src="../assets/pago/LOGO_HSBC.jpg"></v-img>
      </v-col>
      <v-col class="ma-2" md="1">
        <v-img src="../assets/pago/LOGO_ICBC.jpg"></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      metodoPago: [
        {
          titulo: "Efectivo",
          items: ["Descuento del 20%"],
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
            "1 Cuota + 5% de interés",
            "2 Cuotas + 5% de interés",
            "3 Cuotas + 5% de interés",
            "6 Cuotas + 5% de interés"
          ],
          imagen: require("../assets/pago/credit-card.svg")
        }
      ]
    };
  }
};
</script>