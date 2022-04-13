<template >
  <input class="input" type="text" :value="modelValue" @input="updateInput" />
</template>
<script>
export default {
  name: "input-first",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scope>
.input {
  width: 100%;
  border: 2px solid cyan;
  border-radius: 20px;
  padding: 10px 15px;
  margin-top: 5px;
}
</style>