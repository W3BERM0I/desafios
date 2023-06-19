<template>
  <v-container>
    <v-row class="align-center justify-center mb-2">
      <h1 class="titulo">Criar novos usuarios</h1>
    </v-row>
    <v-form v-model="formularioValido" @click.prevent="calcular()">
      <v-row>
        <v-col>
          <v-text-field
            label="Nome"
            :rules="rulesString"
            hide-details="auto"
            v-model="nome"
            @click.stop
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Idade"
            :rules="rules"
            hide-details="auto"
            v-model="idade"
            @click.stop
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <BtnSubmit :disabled="formularioValido" label="Criar" />
      </v-row>
    </v-form>
  </v-container>
  <historico titulo="Usuarios Criados" :lista="historico" />
</template>

<script>
import Historico from "@/components/Historico.vue";
import BtnSubmit from "@/components/bottons/BtnSubmit.vue";
export default {
  props: ["rules"],
  components: { Historico, BtnSubmit },
  data() {
    return {
      nome: "",
      idade: "",
      formularioValido: false,
      historico: [],
      rulesString: [(value) => !!value || "Required."],
    };
  },
  methods: {
    calcular() {
      this.historico.unshift({
        titulo: "Dados Gerais",
        texto:
          "Nome: " +
          this.nome +
          " , idade: " +
          this.idade +
          " , classificação etaria: " +
          this.classificacao,
      });
      return;
    },
  },
  computed: {
    classificacao() {
      if (this.idade >= 0 && this.idade <= 12) return "Criança";
      if (this.idade >= 13 && this.idade <= 17) return "Adolecente";
      if (this.idade >= 18 && this.idade <= 59) return "Adulto";
      if (this.idade > 60) return "Idoso";
      return "invalid";
    },
  },
};
</script>