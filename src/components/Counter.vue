<template>
  <div class="counterDiv d-flex justify-center align-center rounded-circle">
    <p class="counter" @click="increment">{{ counter }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("saveCounter");
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style scoped>
.counterDiv {
  position: absolute;
  bottom: 15px;
  right: 15px;
  min-width: 80px;
  min-height: 80px;
  aspect-ratio: 1/1;
  background-color: black;
}

.counter {
  color: white;
  font-weight: bolder;
  font-size: 3rem;
  margin: 15px;
  cursor: pointer;
}
</style>