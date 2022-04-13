<template >
  <div class="dialog" v-if="addDialogVisible" @click="hideDialog">
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import firsMixin from "@/mixins/firstMixin.js";
export default {
  name: "add-dialog",
  mixins: [firsMixin],
};
</script>
<style scope>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 1, 0.5);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 200px;
  min-height: 50px;
  padding: 20px;
}
</style>