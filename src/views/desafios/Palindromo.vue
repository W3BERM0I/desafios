<template>
  <v-container>
    <v-row class="align-center justify-center mb-2">
      <h1 class="titulo">Verifica se a palavra é um palindromo</h1>
    </v-row>
    <v-row class="align-center justify-center mb-4">
      <p>
        Palindromo é uma frase ou palavra que se pode ler, indiferentemente, da
        esquerda para a direita ou vice-versa.
      </p>
    </v-row>
    <v-form v-model="formularioValido" @click.prevent="comparar()">
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
          <BtnSubmit1 :disabled="formularioValido" label="comparar" />
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
    comparar() {
      this.historicoInversao.unshift({
        titulo: "Frase ou palavra:  " + this.frase,
        texto: "Palindromo: " + this.palindromo,
      });

      this.frase = null;
    },
  },
  computed: {
    inversao() {
      return this.frase.split("").reverse().join("");
    },
    palindromo() {
      return this.inversao == this.frase ? "Verdadeiro" : "Falso";
    },
  },
};
</script>

<style>
</style>