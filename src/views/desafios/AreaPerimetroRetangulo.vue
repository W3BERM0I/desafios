<template>
  <v-container>
    <v-row class="align-center justify-center mb-2">
      <h1 class="titulo">Calcular area e perimetro de um Retangulo/Quadrado</h1>
    </v-row>
    <v-form v-model="formularioValido" @click.prevent="calcular()">
      <v-row>
        <v-col>
          <v-text-field
            label="Largura"
            :rules="rules"
            hide-details="auto"
            v-model="largura"
            @click.stop
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Comprimento"
            :rules="rules"
            hide-details="auto"
            v-model="comprimento"
            @click.stop
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <BtnSubmit :disabled="formularioValido" label="Calcular" />
      </v-row>
    </v-form>
  </v-container>
  <historico
    titulo="Historico de calculo de Area e Perimetro"
    :lista="historico"
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
      comprimento: "",
      largura: "",
      formularioValido: false,
      historico: [],
    };
  },
  methods: {
    calcular() {
      this.historico.unshift({
        titulo: "Resultado Area e Perimetro",
        texto:
          "Comprimento: " +
          this.comprimento +
          " , Largura: " +
          this.largura +
          " , Area: " +
          this.area +
          " , Perimetro: " +
          this.perimetro,
      });
      return;
    },
  },
  computed: {
    area() {
      return this.comprimento * this.largura;
    },
    perimetro() {
      return 2 * (this.comprimento + this.largura);
    },
  },
};
</script>