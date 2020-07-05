<template>
  <v-app>
    <v-row>      
      <v-col cols="12" sm="10" md="8" lg="6" class="mx-auto card border-secondary">
        <v-card-title>Complete el formulario con sus datos personales</v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="isValid">
            <v-text-field v-model="form.name" :rules="nameRules" label="Nombre y Apellido" required></v-text-field>

            <v-text-field
              v-model.number="form.dni"
              type="number"
              :rules="dniRules"
              label="DNI"
              error-count="2"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
              error-count="2"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.telefono"
              type="number"
              :rules="telRules"
              label="Teléfono"
              required
            ></v-text-field>

            <v-select
              v-model="form.ciudadOrigen"
              :items="ciudades"
              :rules="[v => !!v ||  'El lugar de origen es requerido']"
              placeholder="Lugar de origen..."
              required
            ></v-select>

            <v-select
              v-model="form.ciudadDestino"
              :items="ciudades"
              :rules="[v => !!v ||  'El lugar de destino es requerido']"
              placeholder="Lugar de destino..."
              required
            ></v-select>

            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.date"
                  label="Seleccione el día de traslado"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="form.date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cerrar</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>

            <v-text-field readonly value="450" prefix="Monto a abonar $"></v-text-field>

            <v-radio-group v-model="row" row>
              <v-col cols="2">
                <v-subheader>Método de pago</v-subheader>
              </v-col>
              <v-col cols="2">
                <v-radio
                  label="Efectivo"
                  @change="mostrar=false"
                  value="radio-1"
                  color="red darken-3"
                ></v-radio>
              </v-col>
              <v-col cols="2">
                <v-radio
                  label="Débito"
                  @change="mostrar=false"
                  value="radio-2"
                  color="red darken-3"
                ></v-radio>
              </v-col>
              <v-col cols="2">
                <v-radio
                  label="Crédito"
                  @change="mostrarCuotas"
                  value="radio-3"
                  color="red darken-3"
                ></v-radio>
              </v-col>
              <v-col cols="4">
                <v-overflow-btn :items="cuota" label="Cuotas" v-if="mostrar" class="p-0 mt-0"></v-overflow-btn>
              </v-col>
            </v-radio-group>

            <v-text-field readonly value="400" prefix="Total $"></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>

        <!-- <v-btn dark class="mr-4" @click="validate">Enviar</v-btn> -->

        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, isValid }">
            <v-btn @click="validate" dark v-bind="isValid" v-on="on">Enviar</v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">Mensaje</v-card-title>

            <v-card-text>{{`Usted ha seleccionado el vehiculo ${obtenerVehiculo.nombre} y los servicios:`}}</v-card-text>
            <v-card-text
              v-for="servicio in obtenerServicios"
              :key="servicio.nombre"
            >{{servicio.nombre}}</v-card-text>
            <v-card-text>{{`por un costo total de $ ${obtenerPrecioTotal}`}}</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="dialog = false">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data: () => ({
    isValid: true,
    form: {
      name: "",
      dni: "",
      email: "",
      telefono: "",
      ciudadOrigen: null,
      ciudadDestino: null,
      date: new Date().toISOString().substr(0, 10)
    },
    date: "",
    ciudades: [
      "Agronomía",
      "Almagro",
      "Balvanera",
      "Barracas",
      "Belgrano",
      "Boedo",
      "Caballito",
      "Chacarita",
      "Coghlan",
      "Colegiales",
      "Constitución",
      "Flores",
      "Floresta",
      "La Boca",
      "La Paternal",
      "Liniers",
      "Mataderos",
      "Monte Castro",
      "Monserrat",
      "Nueva Pompeya",
      "Núñez",
      "Palermo",
      "Parque Avellaneda",
      "Parque Chacabuco",
      "Parque Chas",
      "Parque Patricios",
      "Puerto Madero",
      "Recoleta",
      "Retiro",
      "Saavedra",
      "San Cristóbal",
      "San Nicolás",
      "San Telmo",
      "Vélez Sársfield",
      "Versalles",
      "Villa Crespo",
      "Villa del Parque",
      "Villa Devoto",
      "Villa General Mitre",
      "Villa Lugano",
      "Villa Luro",
      "Villa Ortúzar",
      "Villa Pueyrredón",
      "Villa Real",
      "Villa Riachuelo",
      "Villa Santa Rita",
      "Villa Soldati",
      "Villa Urquiza"
    ],
    nameRules: [
      v => !!v || "El nombre es requerido",
      v => /[a-zA-Z]/.test(v) || "El nombre debe ser válido"
    ],
    emailRules: [
      v => !!v || "El correo electrónico es requerido",
      v => /.+@.+\..+/.test(v) || "El correo electrónico debe ser válido"
    ],
    dniRules: [
      v => !!v || "El DNI es requerido",
      v => (v && v > 1111111 && v <= 99999999) || "No es un DNI válido"
    ],
    telRules: [v => !!v || "Un teléfono de contacto es requerido"],
    row: "null",
    cuota: [1, 2, 3, 6],
    mostrar: false,
    menu: false,
    dialog: false
  }),
  methods: {
  ...mapActions([
      "actualizarFormulario"
  ]),
    validate() {
      this.$refs.form.validate();
    },
    mostrarCuotas() {
      this.mostrar = true;
    },
    actualizarStore() {
      this.actualizarFormulario(this.form);
    }
  },
  computed: {
    ...mapGetters([
      "obtenerVehiculo",
      "obtenerPrecioVehiculo",
      "obtenerPrecioTotal",
      "obtenerElementos",
      "obtenerServicios",
      "getFormulario"
    ])
  }
};
</script>
