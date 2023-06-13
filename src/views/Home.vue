<script>
import ConversaoTemperatura from "./desafios/ConversaoTemperatura.vue";
import Soma from "./desafios/Soma.vue";

export default {
  components: { ConversaoTemperatura, Soma },
  data() {
    return {
      tab: null,
      items: [
        {
          value: "conversão temperatura",
          componentName: "ConversaoTemperatura",
        },
        {
          value: "soma",
          componentName: "Soma",
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
          <component :is="item.componentName" />
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>