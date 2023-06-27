<template>
  <v-container>
    <v-row class="align-center justify-center mb-2">
      <h1 class="titulo">Remove os elementos duplicados</h1>
    </v-row>
    <v-row class="align-center justify-center mb-4">
      <p>use o | (pipe) para separar os elementos</p>
    </v-row>
    <v-form v-model="formularioValido" @click.prevent="verifica()">
      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Informe o array e use o | (pipe) para separar os elementos"
            hide-details="auto"
            v-model="frase"
            @click.stop
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <BtnSubmit1 :disabled="formularioValido" label="verifica" />
        </v-col>
      </v-row>
    </v-form>
  </v-container>
  <historico
    titulo="Historico de Divisibilidade"
    :lista="this.historicoRepeticao"
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
      historicoRepeticao: [],
      arrayFrase: [],
      repeticoes: [],
      aux: false,
      auxMaiorRepeticao: null,
      auxQtdRepeticao: -100,
    };
  },
  methods: {
    verifica() {
      this.reiniciaVariaveis();
      this.verificaRepeticoes();
      this.historicoRepeticao.unshift({
        titulo: "Seguencia: " + this.frase,
        texto: "O numero que mais se repete é " + this.auxMaiorRepeticao,
      });
    },
    reiniciaVariaveis() {
      this.auxMaiorRepeticao = null;
      this.auxQtdRepeticao = -100;
      this.aux = false;
      this.arrayFrase = [];
      this.repeticoes = [];
    },
    verificaRepeticoes() {
      //preenche o array de repetições com o numero e quantas vezes ele se repete
      this.arrayFrase = this.frase.split("|");
      this.arrayFrase.forEach((num) => {
        this.aux = false;
        this.repeticoes.forEach((arr) => {
          if (arr.numero == num) {
            arr.repeticoes++;
            this.aux = !!1;
          }
        });
        if (!this.aux) {
          this.repeticoes.push({ numero: num, repeticoes: 1 });
        }
      });
      console.log(this.repeticoes);

      //verifica qual numero mais se repete
      this.repeticoes.forEach((num) => {
        console.log(
          "num1: " +
            num.numero +
            "num: " +
            num.repeticoes +
            ", qtd: " +
            this.auxQtdRepeticao
        );
        if (num.repeticoes >= this.auxQtdRepeticao) {
          this.auxQtdRepeticao = num.repeticoes;
          this.auxMaiorRepeticao = num.numero;
        }
      });
    },
  },
};
</script>

<style>
</style>