<template >
  <div>
    <button class="btn"><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: "button-first",
};
</script>
<style scope>
.btn {
  background: white;
  padding: 15px;
  border: 2px solid cyan;
  border-radius: 20px;
}
</style>