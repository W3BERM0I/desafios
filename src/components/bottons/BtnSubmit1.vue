<template>
  <v-btn
    color="light-blue-accent-3"
    size="auto"
    type="submit"
    :disabled="!disabled"
    class="pa-4"
    block
    >{{ label.toUpperCase() }}</v-btn
  >
</template>

<script>
export default {
  props: ["disabled", "label"],
};
</script>

<style>
</style>