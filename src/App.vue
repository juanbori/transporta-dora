<template>
  <div>
    <v-app>
      <div id="app">
        <v-app-bar color="black accent-4" dense dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>
            <router-link to="/" class="nav-link">TransportaDora</router-link>
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark>
              <router-link to="/" class="nav-link">HOME</router-link>
            </v-btn>
            <v-btn dark>
              <router-link to="/vehiculos" class="nav-link">VEHÍCULOS</router-link>
            </v-btn>
            <v-btn dark>
              <router-link to="/servAdicionales" class="nav-link">SERVICIOS ADICIONALES</router-link>
            </v-btn>
            <v-btn dark>
              <router-link to="/formulario" class="nav-link">FORMULARIO DE CONTRATACIÓN</router-link>
            </v-btn>
            <v-btn dark>
              <router-link to="/medioPago" class="nav-link">MEDIOS DE PAGO</router-link>
            </v-btn>
          </v-toolbar-items>
          <v-menu left bottom>
            <v-list>
              <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
        <router-view />
      </div>
    </v-app>
  </div>
  <!-- <v-app>
    <div id="app">
      <div id="nav">
        <ul class="nav nav-pills">
          <li class="nav item">
            <router-link to="/" class="nav-link">HOME</router-link>|
          </li>
          <li class="nav item">
            <router-link to="/vehiculos" class="nav-link">VEHÍCULOS</router-link>|
          </li>
          <li class="nav item">
            <router-link to="/servAdicionales" class="nav-link">SERVICIOS ADICIONALES</router-link>|
          </li>
          <li class="nav item">
            <router-link to="/formulario" class="nav-link">FORMULARIO DE CONTRATACIÓN</router-link>|
          </li>
          <li class="nav item">
            <router-link to="/medioPago" class="nav-link">MEDIOS DE PAGO</router-link>|
          </li>
        </ul>
      </div>
      <router-view />
    </div>
  </v-app>-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-image: url("assets/navbar.png");
  background-repeat: no-repeat;
  background-size: cover;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
