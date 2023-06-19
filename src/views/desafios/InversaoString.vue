<template>
  <v-container>
    <v-row class="align-center justify-center mb-2">
      <h1 class="titulo">Inversão de frases</h1>
    </v-row>
    <v-form v-model="formularioValido" @click.prevent="inverter()">
      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Inverta a frase"
            hide-details="auto"
            v-model="frase"
            @click.stop
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <BtnSubmit1 :disabled="formularioValido" label="Inverter" />
        </v-col>
      </v-row>
    </v-form>
  </v-container>
  <historico
    titulo="Historico de Divisibilidade"
    :lista="this.historicoInversao"
  />
</template>

<script>
import Historico from "@/components/Historico.vue";
import BtnSubmit1 from "@/components/bottons/BtnSubmit1.vue";
export default {
  props: ["rules"],
  components: { Historico, BtnSubmit1 },
  data() {
    return {
      formularioValido: false,
      frase: null,
      historicoInversao: [],
    };
  },
  methods: {
    inverter() {
      this.historicoInversao.unshift({
        titulo: "Inversâo da Frase:  " + this.frase,
        texto: "Para: " + this.inversao,
      });
      this.frase = this.inversao;
    },
  },
  computed: {
    inversao() {
      return this.frase.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>