<template>
  <v-container>
    <v-row class="justify-center">
      <h1 class="titulo">Calculador de Imc</h1>
    </v-row>
    <v-form v-model="formularioValido" @click.prevent="calculaImc">
      <v-row>
        <v-col>
          <v-text-field
            label="informe o seu peso"
            :rules="rules"
            hide-details="auto"
            v-model="peso"
            @click.stop
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="informe a sua altura"
            :rules="rules"
            hide-details="auto"
            v-model="altura"
            @click.stop
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <BtnSubmit :disabled="formularioValido" label="Calcular" />
      </v-row>
    </v-form>
  </v-container>
  <historico titulo="Historico de IMC" :lista="historicoImc" />
</template>

<script>
import Historico from "@/components/Historico.vue";
import BtnSubmit from "@/components/bottons/BtnSubmit.vue";

export default {
  props: ["rules"],
  components: { Historico, BtnSubmit },
  data() {
    return {
      peso: null,
      altura: null,
      formularioValido: false,
      historicoImc: [],
    };
  },
  methods: {
    calculaImc() {
      this.historicoImc.unshift({
        titulo: "Resultado do IMC",
        texto:
          "Seu peso é " +
          this.peso +
          " sua altura é " +
          this.altura +
          " e seu imc é " +
          (this.peso / (this.altura * this.altura)).toFixed(2),
      });
      return;
    },
  },
  computed: {
    imc() {
      return;
    },
  },
};
</script>