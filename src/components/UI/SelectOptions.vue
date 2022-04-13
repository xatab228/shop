<template>
  <select v-model="modelValue" @change="optionChange">
    <option disable value="">Chose option</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "select-options",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    optionChange(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style>
</style>