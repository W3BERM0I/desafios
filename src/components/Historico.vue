<template>
  <v-container class="mt-8" v-if="!lista.length == 0">
    <v-row class="align-center justify-center">
      <h1 class="titulo">{{ titulo }}</h1>
    </v-row>
    <v-row class="align-center justify-center">
      <v-card
        style="width: 100%"
        v-for="(registro, index) in lista"
        :key="index"
        class="d-flex mb-4 pa-6 rounded-xl"
      >
        <div style="width: 100%">
          <p class="tituloRegistro">{{ registro.titulo }}</p>
          <p class="textoRegistro">{{ registro.texto }}</p>
        </div>
        <v-icon
          aria-hidden="false"
          size="40"
          class="justify-self-end align-self-center ma-7"
          @click="removeItemHistorico(index)"
          >mdi-minus</v-icon
        >
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["titulo", "lista"],
  methods: {
    removeItemHistorico(index) {
      this.lista?.splice(index, 1);
    },
  },
};
</script>

<style>
.tituloRegistro {
  font-size: 2.5rem;
  font-weight: 700;
  color: #706767;
}

.textoRegistro {
  font-size: 2rem;
}
</style>