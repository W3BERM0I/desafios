<script>
import AreaPerimetroRetangulo from "./desafios/AreaPerimetroRetangulo.vue";
import ClassificacaoEtaria from "./desafios/ClassificacaoEtaria.vue";
import ConversaoTemperatura from "./desafios/ConversaoTemperatura.vue";
import Divisibilidade from "./desafios/Divisibilidade.vue";
import InversaoString from "./desafios/InversaoString.vue";
import Palindromo from "./desafios/Palindromo.vue";
import Imc from "./desafios/Imc.vue";
import MaiorRepElemento from "./desafios/MaiorRepElemento.vue";

export default {
  components: {
    ConversaoTemperatura,
    Imc,
    AreaPerimetroRetangulo,
    Divisibilidade,
    ClassificacaoEtaria,
    InversaoString,
    Palindromo,
    MaiorRepElemento,
  },
  data() {
    return {
      tab: null,
      items: [
        {
          value: "conversão temperatura",
          componentName: "ConversaoTemperatura",
        },
        {
          value: "Imc",
          componentName: "Imc",
        },
        {
          value: "Area e Perimetro do Retangulo",
          componentName: "AreaPerimetroRetangulo",
        },
        {
          value: "Divisibilidade de Numeros",
          componentName: "Divisibilidade",
        },
        {
          value: "Classificação Etaria",
          componentName: "ClassificacaoEtaria",
        },
        {
          value: "Inversão de Frases",
          componentName: "InversaoString",
        },
        {
          value: "Palindromo",
          componentName: "Palindromo",
        },
        {
          value: "Repetição de elementos",
          componentName: "MaiorRepElemento",
        },
      ],
      rulesNumber: [
        (value) => !!value || "Required.",
        (value) => {
          const pattern = /^\d+(\.\d+)?$/;
          return (
            pattern.test(value) ||
            "Apenas numeros positivos e use o ponto para numeros com casa flutuante"
          );
        },
      ],
    };
  },
};
</script>

<template>
  <v-card>
    <v-toolbar color="light-blue-accent-3">
      <v-toolbar-title>Desafios</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-tabs="center"
          show-arrows
          slider-color="teal-lighten-3"
        >
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item.value }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="tab">
      <v-window-item v-for="item in items" :key="item" :value="item">
        <v-card flat>
          <component :is="item.componentName" :rules="rulesNumber" />
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style>
.titulo {
  font-weight: bold;
  font-size: 3rem;
  color: #706767;
}
</style>