<template>
  <v-container>
    <v-row class="align-center justify-center">
      <h1 class="tituloConversor">Conversor de temperatura</h1>
    </v-row>
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
          :rules="rulesInputTemp"
          hide-details="auto"
          v-model="valor"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          color="light-blue-accent-3"
          size="auto"
          @click="convert"
          class="mt-4 pa-2"
          block
          >Converter</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
  <v-container class="mt-8" v-if="!historicoConvercoes.length == 0">
    <v-row class="align-center justify-center">
      <h1 class="tituloConversor">Historico de conversões</h1>
    </v-row>
    <v-row class="align-center justify-center">
      <v-card
        style="width: 100%"
        v-for="(registro, index) in historicoConvercoes"
        :key="index"
      >
        <p class="tituloRegistro">{{ registro.titulo }}</p>
        <p class="textoRegistro">{{ registro.texto }}</p>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valor: null,
      valorConvertido: 0,
      tipos: ["Celcius para fahrenheit", "Fahrenheit para celcius"],
      selectTipo: null,
      rulesInputTemp: [
        (value) => !!value || "Required.",
        (value) => {
          const pattern = /^\d+(\.\d+)?$/;
          return (
            pattern.test(value) ||
            "Apenas numeros e use o ponto para numeros com casa flutuante"
          );
        },
      ],
      historicoConvercoes: [],
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
  },
  created() {
    this.selectTipo = this.tipos[0];
  },
};
</script>

<style scoped>
.tituloConversor {
  font-weight: bold;
  font-size: 3rem;
  color: #706767;
}

.tituloRegistro {
  font-size: 2.5rem;
  font-weight: 700;
  color: #706767;
}

.textoRegistro {
  font-size: 2rem;
}
</style>