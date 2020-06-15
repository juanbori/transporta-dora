<template>
  <div>
    <v-app>
      <v-card>
        <!-- <v-container> -->
          <v-row>
            <v-col cols="12" sm="10" md="8" lg="6">
            
              <v-card-title>Complete el formulario con sus datos personales</v-card-title>
                
                <v-card-text>
                  
                  <v-form
                    ref="form"              
                    v-model="isValid"
                  >
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label="Nombre y Apellido"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model.number="dni"
                      type="number"
                      :rules="dniRules"
                      label="DNI"
                      error-count="2"
                      required
                    ></v-text-field>
                  
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      error-count="2"
                      required
                    ></v-text-field>
                  
                    <v-text-field
                      v-model="telefono"
                      type="number"
                      :rules="telRules"
                      label="Teléfono"
                      required
                    ></v-text-field>

                    <v-select
                      v-model="ciudad"
                      :items="ciudades"
                      :rules="[v => !!v ||  'This field is required']"
                      placeholder="Lugar de origen..."
                      required
                    ></v-select>

                    <v-select
                      v-model="ciudad"
                      :items="ciudades"
                      :rules="[v => !!v ||  'This field is required']"
                      placeholder="Lugar de destino..."
                      required
                    ></v-select>

                    <v-radio-group v-model="row" row>
                      <v-col cols="3">
                        <v-subheader>Monto a abonar</v-subheader>
                      </v-col>
                      <v-col cols="3">
                      <v-radio label="Efectivo" value="radio-1" color="red darken-3"></v-radio>
                      </v-col>
                      <v-col cols="3">
                      <v-radio label="Débito" value="radio-2" color="red darken-3"></v-radio>
                      </v-col>
                      <v-col cols="3">
                      <v-radio label="Crédito" value="radio-3" color="red darken-3"></v-radio>
                      </v-col>
                    </v-radio-group>

                    <v-text-field
                        value="450"
                        prefix="Monto a abonar $"    
                    ></v-text-field>
                      
                
                  </v-form>
                
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                  <v-btn
                    :disabled="!isValid"
                    color="Primary"
                    class="mr-4"
                  >
                    Enviar
                  </v-btn>
                </v-card-actions>
              
            
            </v-col>
          </v-row>
        <!-- </v-container> -->
      </v-card>
    </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      isValid: true,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es requerido'
      ],
      ciudad:null,
      ciudades: ['Agronomía',
                'Almagro',
                'Balvanera',
                'Barracas',
                'Belgrano',
                'Boedo',
                'Caballito',
                'Chacarita',
                'Coghlan',
                'Colegiales',
                'Constitución',
                'Flores',
                'Floresta',
                'La Boca',
                'La Paternal',
                'Liniers',
                'Mataderos',
                'Monte Castro',
                'Monserrat',
                'Nueva Pompeya',
                'Núñez',
                'Palermo',
                'Parque Avellaneda',
                'Parque Chacabuco',
                'Parque Chas',
                'Parque Patricios',
                'Puerto Madero',
                'Recoleta',
                'Retiro',
                'Saavedra',
                'San Cristóbal',
                'San Nicolás',
                'San Telmo',
                'Vélez Sársfield',
                'Versalles',
                'Villa Crespo',
                'Villa del Parque',
                'Villa Devoto',
                'Villa General Mitre',
                'Villa Lugano',
                'Villa Luro',
                'Villa Ortúzar',
                'Villa Pueyrredón',
                'Villa Real',
                'Villa Riachuelo',
                'Villa Santa Rita',
                'Villa Soldati',
                'Villa Urquiza',
      ],
     
      email: '',
      emailRules: [
        v => !!v || 'El correo electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido',
      ],
      dni: '',
      dniRules: [
        v => !!v || 'El DNI es requerido',
        v => (v && v > 1111111 && v <= 99999999 ) || 'No es un DNI válido',
            
      ],
      telefono: '',
      telRules: [
        v => !!v || 'Un teléfono de contacto es requerido',
      ],
      row:'null'
      
    }),
      methods: {
          validate () {
            this.$refs.form.validate()
          },
      },
  }
</script>
