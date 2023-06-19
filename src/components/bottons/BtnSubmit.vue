<template>
  <v-btn
    color="light-blue-accent-3"
    size="auto"
    type="submit"
    :disabled="!disabled"
    class="mt-4 mb-3 pa-2"
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