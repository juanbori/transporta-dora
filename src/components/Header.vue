<template>
  <div>
    <v-app-bar color="black accent-4" dense dark>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </span>
      <v-img src="../assets/Dora_CamionV2.png" max-width="35"></v-img>

      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{titulo}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">{{ item.title }}</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
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
      titulo: "Transporta Dora",
      menuItems: [
        { title: "Home", path: "/" },
        { title: "Vehículos", path: "/vehiculos" },
        { title: "Servicios Adicionales", path: "/servAdicionales" },
        { title: "Formulario de Contratación", path: "/formularioStepper" },
        { title: "Métodos de pago", path: "/medioPago" }
      ],
      drawer: false
    };
  }
};
</script>