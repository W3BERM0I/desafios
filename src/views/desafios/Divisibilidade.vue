<template>
  <v-container>
    <v-row class="align-center justify-center mb-2">
      <h1 class="titulo">Divisibilidade do Numero</h1>
    </v-row>
    <v-form v-model="formularioValido" @click.prevent="calcular()">
      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Numero"
            :rules="rules"
            hide-details="auto"
            v-model="numero"
            @click.stop
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <BtnSubmit1 :disabled="formularioValido" label="Calcular" />
        </v-col>
      </v-row>
    </v-form>
  </v-container>
  <historico
    titulo="Historico de Divisibilidade"
    :lista="this.historicoDivisibilidade"
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
      numero: null,
      historicoDivisibilidade: [],
      numerosDivisiveis: [],
    };
  },
  methods: {
    calcular() {
      this.verificaNumeros();
      this.historicoDivisibilidade.unshift({
        titulo: "Numeros Divisiveis por " + this.numero,
        texto:
          this.numero + " é divisivel por: " + this.numerosDivisiveis.join("-"),
      });
      return;
    },
    verificaNumeros() {
      this.numerosDivisiveis = [];
      for (let i = 0; i <= this.numero; i++) {
        if (Number.isInteger(this.numero / i)) this.numerosDivisiveis.push(i);
      }
    },
  },
};
</script>

<style>
</style>