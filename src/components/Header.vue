<template>
  <div>
    <v-app-bar color="grey darken-4" dark>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </span>
      <v-img src="../assets/Dora_CamionV2.png" max-width="35"></v-img>

      <v-toolbar-title>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
          class="text-decoration-underline"
        >{{titulo}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">{{ item.title }}</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <div class="my-2">
        <v-btn @click="irContratar" color="error">Contratar</v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>



<script>
export default {
  data() {
    return {
      titulo: "TRANSPORTA DORA",
      menuItems: [
        { title: "Inicio", path: "/" },
        { title: "Nuestros Vehículos", path: "/vehiculos" },
        { title: "Servicios Adicionales", path: "/servAdicionales" },
        { title: "Medios de pago", path: "/medioPago" }
      ],
      drawer: false
    };
  },
    methods: {
    irContratar() {
      this.$router.push("/FormularioStepper");
    }
  },

};
</script>