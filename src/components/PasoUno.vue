<template>
  <div>
    <input
      type="text"
      v-model="item"
      autocomplete="off"
      style="background-color: grey"
      @input="filtrarItems"
    />

    <div v-if="itemsFiltrados">
        <ul>
            <li v-for="item in itemsFiltrados" :key="item" @click="elegirItem(item)"> <v-card><v-card-title>{{ item }}</v-card-title></v-card></li>
        </ul>
    </div>

    <div v-if="itemsElegidos">
        <ul>
            <li v-for="item in itemsElegidos" :key="item" @click="quitarItem"> {{ item }}</li>
        </ul>
    </div>
  </div>
</template>



<script>
export default {
  name: "PasoUno",
  data() {
    return {
      item: "",
      items: [
        "Caja",
        "Ropero",
        "Cama 1 plaza",
        "Colchon",
        "Mesa de Luz",
        "Mesa Ratona",
        "Mesa",
        "Carrito",
        "Peon",
        "Canasto"
      ],
      itemsFiltrados: [],
      itemsElegidos: [],
    };
  },
  methods: {
    filtrarItems() {
      this.itemsFiltrados = this.items.filter(item => {
        return item.toLowerCase().startsWith(this.item.toLowerCase());
      });
    },
    elegirItem(item) {
        this.itemsElegidos.push(item);
    },
    quitarItem() {
        this.itemsElegidos.pop(this.item);
    }
  }
};
</script>
