<template>
  <div id="app">
    <div id="nav">
      <ul class="nav nav-pills">
        <li class="nav item">
          <router-link to="/" class="nav-link">HOME</router-link> |
        </li>  
        <li class="nav item">
          <router-link to="/vehiculos" class="nav-link">VEHÍCULOS</router-link> |
        </li>  
        <li class="nav item">
          <router-link to="/servAdicionales" class="nav-link">SERVICIOS ADICIONALES</router-link> |
        </li>  
        <li class="nav item">
          <router-link to="/formulario" class="nav-link">FORMULARIO DE CONTRATACIÓN</router-link> |
        </li>  
        <li class="nav item">
          <router-link to="/medioPago" class="nav-link">MEDIOS DE PAGO</router-link> |
        </li>  
      
      </ul>

    </div>
    <router-view/>
  </div>
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
  background-image: url('assets/navbar.png');
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
