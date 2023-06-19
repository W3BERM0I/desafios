<template>
  <v-container>
    <v-row class="align-center justify-center">
      <h1 class="titulo">Conversor de temperatura</h1>
    </v-row>
    <v-form @submit.prevent="convert" v-model="formularioValido">
      <v-row>
        <v-col>
          <v-select
            label="Selecione tipo de conversao"
            :items="[...tipos]"
            v-model="selectTipo"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            label="informe o valor"
            :rules="rules"
            hide-details="auto"
            v-model="valor"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <BtnSubmit :disabled="formularioValido" label="Converter" />
        </v-col>
      </v-row>
    </v-form>
  </v-container>
  <historico
    titulo="Historico de conversões"
    :lista="this.historicoConvercoes"
  />
</template>

<script>
import Historico from "@/components/Historico.vue";
import BtnSubmit from "@/components/bottons/BtnSubmit.vue";
export default {
  props: ["rules"],
  components: { Historico, BtnSubmit },
  data() {
    return {
      valor: null,
      valorConvertido: 0,
      tipos: ["Celcius para fahrenheit", "Fahrenheit para celcius"],
      selectTipo: null,
      historicoConvercoes: [],
      formularioValido: false,
    };
  },
  methods: {
    convert() {
      if (!this.valor) return;

      if (this.selectTipo.charAt(0) == "C") {
        //celcius para fahrenheit
        this.valorConvertido = ((this.valor * 9) / 5 + 32).toFixed(2);
        this.historicoConvercoes.unshift({
          titulo: "Celcius para fahrenheit",
          texto:
            this.valor +
            " Graus celcius,  " +
            this.valorConvertido +
            " Fahrenheit ",
        });
        return;
      }
      //fahrenheit para celcius
      this.valorConvertido = (((this.valor - 32) * 5) / 9).toFixed(2);
      this.historicoConvercoes.unshift({
        titulo: "Fahrenheit para Celcius",
        texto:
          this.valor +
          " Fahrenheit,  " +
          this.valorConvertido +
          " Graus celcius ",
      });
      return;
    },
    removeItemHistorico(index) {
      this.historicoConvercoes.splice(index, 1);
    },
  },
  created() {
    this.selectTipo = this.tipos[0];
  },
};
</script>

<style scoped>
</style>