<template>
  <div class="card">
    <h3 class="card-header text-center">Información personal</h3>
    <div class="card-body">
      <v-form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group col-md-6">
            <v-text-field
              label="Nombre"
              outlined
              type="text"
              v-model.trim="$v.form.nombre.$model"
              :class="{
            'is-invalid':$v.form.nombre.$error, 'is-valid': !$v.form.nombre.$invalid}"
            ></v-text-field>
            <div class="valid-feedback">Tu nombre es valido</div>
            <div class="invalid-feedback">
              <span v-if="!$v.form.nombre.required">El nombre es requerido</span>
              <span v-if="!$v.form.nombre.alpha">No se permiten numeros</span>
              <span
                v-if="!$v.form.nombre.minLength"
              >El nombre tiene que tener al menos {{$v.form.nombre.$params.minLength.min}} letras.</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <v-text-field
              label="Apellido"
              outlined
              type="text"
              v-model.trim="$v.form.apellido.$model"
              :class="{
            'is-invalid':$v.form.apellido.$error, 'is-valid': !$v.form.apellido.$invalid}"
            ></v-text-field>
            <div class="valid-feedback">Tu apellido es valido</div>
            <div class="invalid-feedback">
              <span v-if="!$v.form.apellido.required">El apellido es requerido.</span>
              <span v-if="!$v.form.apellido.alpha">No se permiten numeros.</span>
              <span
                v-if="!$v.form.apellido.minLength"
              >El apellido tiene que tener al menos {{$v.form.apellido.$params.minLength.min}} letras.</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <v-text-field
            label="E-mail"
            outlined
            type="email"
            v-model.trim="$v.form.email.$model"
            :class="{
            'is-invalid':$v.form.email.$error, 'is-valid': !$v.form.email.$invalid}"
          ></v-text-field>
          <div class="valid-feedback">Tu email es valido</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.email.required">El email es requerido.</span>
            <span v-if="!$v.form.email.email">El email no es valido.</span>
          </div>
        </div>
        <div class="form-group">
          <v-text-field
            label="DNI"
            outlined
            type="number"
            v-model.number="$v.form.dni.$model"
            :class="{
            'is-invalid':$v.form.dni.$error, 'is-valid': !$v.form.dni.$invalid}"
          ></v-text-field>
          <div class="valid-feedback">Tu dni es valido</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.dni.required">El DNI es requerido.</span>
            <span
              v-if="!$v.form.dni.minLength"
            >El DNI debe tener al menos {{$v.form.dni.$params.minLength.min}} numeros.</span>
          </div>
        </div>
        <div class="form-group">
          <v-text-field
            label="Telefono"
            outlined
            type="number"
            v-model.number="$v.form.telefono.$model"
            :class="{
            'is-invalid':$v.form.telefono.$error, 'is-valid': !$v.form.telefono.$invalid}"
          ></v-text-field>
          <div class="valid-feedback">Tu telefono es valido</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.telefono.required">El telefono es requerido.</span>
            <span v-if="!$v.form.telefono.numeric">El telefono debe ser numerico.</span>
            <span
              v-if="!$v.form.telefono.minLength"
            >El telefono debe tener al menos {{$v.form.telefono.$params.minLength.min}} numeros.</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <v-select
              v-model.trim="$v.form.ciudadOrigen.$model"
              :items="ciudades"
              outlined
              placeholder="Ciudad de origen"
              :class="{
            'is-invalid':$v.form.ciudadOrigen.$error}"
            ></v-select>
            <div class="invalid-feedback">
              <span v-if="!$v.form.ciudadOrigen.required">La ciudad de origen es requerida.</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <v-select
              v-model.trim="$v.form.ciudadDestino.$model"
              :items="ciudades"
              outlined
              placeholder="Ciudad de Destino"
              :class="{
            'is-invalid':$v.form.ciudadDestino.$error}"
            ></v-select>
            <div class="invalid-feedback">
              <span v-if="!$v.form.ciudadDestino.required">La ciudad de destino es requerida.</span>
            </div>
          </div>
        </div>

        <div class="form-group">
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
                outlined
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
        </div>
        <div class="form-group">
          <v-text-field outlined readonly :value="obtenerPrecioTotal" prefix="Monto a abonar $"></v-text-field>
        </div>
        <div class="form-group">
          <v-radio-group v-model="form.tipoPago" row>
            <v-col cols="2">
              <h6>Medio de pago</h6>
            </v-col>
            <v-col cols="2">
              <v-radio
                label="Efectivo"
                @change="mostrar=false"
                value="efectivo"
                color="red darken-3"
              ></v-radio>
            </v-col>
            <v-col cols="2">
              <v-radio label="Débito" @change="mostrar=false" value="debito" color="red darken-3"></v-radio>
            </v-col>
            <v-col cols="2">
              <v-radio label="Crédito" @change="mostrarCuotas" value="credito" color="red darken-3"></v-radio>
            </v-col>
            <v-col cols="4">
              <v-overflow-btn
                outlined
                :items="cuota"
                label="Cuotas"
                v-if="mostrar"
                class="p-0 mt-0"
              ></v-overflow-btn>
            </v-col>
          </v-radio-group>
        </div>
        <div class="form-group">
          <v-text-field outlined readonly :value="calcularPromo(form.tipoPago)" prefix="Total $"></v-text-field>
        </div>
      </v-form>

      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2">Ha realizado su pedido</v-card-title>
          <v-card-text>{{`Vehiculo de traslado: ${obtenerVehiculo.nombre}`}}</v-card-text>
          <v-card-text v-show="obtenerServicios.length >0">{{`Servicios adicionales:`}}</v-card-text>
          <span
            class="body-2"
            v-show="obtenerServicios.length >0"
            v-for="servicio in obtenerServicios"
            :key="servicio.nombre"
          >{{servicio.nombre}}<br></span>
          <v-card-text>{{`por un costo total de $ ${calcularPromo(form.tipoPago)}`}}</v-card-text>
          <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import {
  required,
  minLength,
  email,
  alpha,
  numeric
} from "vuelidate/lib/validators";
import QrcodeVue from "qrcode.vue";
import axios from "axios";

export default {
  data() {
    return {
      value: "http://localhost:8080/pedido/",
      size: 200,
      form: {
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        telefono: "",
        ciudadOrigen: null,
        ciudadDestino: null,
        tipoPago: "efectivo",
        date: new Date().toISOString().substr(0, 10),
        vehiculo: "",
        serviciosAdicio: []
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
      cuota: [1, 2, 3, 6],
      mostrar: false,
      menu: false,
      dialog: false,
      submitStatus: null
    };
  },
  components: {
    QrcodeVue
  },
  validations: {
    form: {
      nombre: {
        required,
        alpha,
        minLength: minLength(3)
      },
      apellido: {
        required,
        alpha,
        minLength: minLength(3)
      },
      dni: {
        required,
        minLength: minLength(7)
      },
      email: {
        required,
        email
      },
      telefono: {
        required,
        numeric,
        minLength: minLength(7)
      },
      ciudadOrigen: {
        required
      },
      ciudadDestino: {
        required
      }
    }
  },
  methods: {
    ...mapActions(["actualizarFormulario"]),
    submitForm() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        this.actualizarStore();
        this.dialog = true;
        this.postpedido();
      } else {
        alert(
          "El formulario presenta errores, por favor corrijalos antes de enviar"
        );
      }
    },
    mostrarCuotas() {
      this.mostrar = true;
    },
    actualizarStore() {
      this.actualizarFormulario(this.form);
    },
    calcularPromo(key) {
      if (key == "efectivo") {
        let valor = (this.obtenerPrecioTotal * 80) / 100;
        return valor;
      } else if (key == "debito") {
        let valor = this.obtenerPrecioTotal;
        return valor;
      } else {
        let valor = (this.obtenerPrecioTotal * 105) / 100;
        return valor;
      }
    },
    armarFormulario() {
      this.form.vehiculo = this.obtenerVehiculo.nombre;
      for (let index = 0; index < this.obtenerServicios.length; index++) {
        this.form.serviciosAdicio.push(this.obtenerServicios[index].nombre);
      }
    },
    async postpedido() {
      this.armarFormulario();
      let pedido = this.form;
      if (!this.$v.$invalid) {
        try {
          const respuesta = await axios.post("/pedido", pedido);
          console.log("success");
          let id = await this.getpedidoid()
          this.value = "http://localhost:8080/pedido/" + id;
          return respuesta;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getpedidoid() {
      const respuesta = await axios.get("/pedido");
      let pedido = respuesta.data;
      console.log(pedido)
      return pedido.length;
    }
  },
  computed: {
    ...mapGetters([
      "obtenerVehiculo",
      "obtenerPrecioTotal",
      "obtenerElementos",
      "obtenerServicios"
    ])
  },
  created() {
    this.$root.$refs.pasoDos = this;
  }
};
</script>
