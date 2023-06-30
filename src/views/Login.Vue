<template>
  <div
    class="container bg-light-blue-accent-3 d-flex justify-center align-center"
  >
    <v-card class="cardLogin d-flex flex-column align-center elevation-10">
      <h1 class="text-h4 mb-6 mt-4 tituloLogin">ENTRAR</h1>
      <v-form v-model="formularioValido" @submit.prevent="login" class="form">
        <v-row>
          <v-text-field
            label="email/cpf"
            hide-details="auto"
            v-model="identifier"
            class="mb-4"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            label="Senha"
            hide-details="auto"
            v-model="password"
          ></v-text-field>
        </v-row>
        <v-row>
          <BtnSubmit :disabled="formularioValido" label="Entrar" />
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import BtnSubmit from "@/components/bottons/BtnSubmit.vue";
export default {
  components: { BtnSubmit },
  data() {
    return {
      identifier: "",
      password: "",
      formularioValido: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("authenticate", "comun");
      this.$router.push({ name: "Home" });
      return;
    },
  },
  created() {
    this.$store.dispatch("logout");
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.cardLogin {
  width: 300px;
  padding: 30px;
}

.tituloLogin {
  color: var(--cinzaClaro);
}

.form {
  width: 90%;
}
</style>