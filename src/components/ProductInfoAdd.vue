<template>
  <div>
    <form @submit.prevent>
      <h3>Create product:</h3>
      <input-first
        class="input1"
        placeholder="Category"
        v-model="product.title"
      />
      <input-first
        class="input1"
        placeholder="Manufacturer"
        v-model="product.body"
      />
      <button-first class="btn1" @click="addNewProduct"> Add </button-first>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addNewProduct() {
      this.id = Date.now();
      this.$emit("create", this.product);
      this.product = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scope>
form {
  display: flex;
  flex-direction: column;
}
.btn1 {
  align-self: flex-end;
  margin-top: 5px;
}
.input1 {
  width: 100%;
  border: 2px solid cyan;
  padding: 10px 15px;
  margin-top: 5px;
}
</style>
