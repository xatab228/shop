<template>
  <div class="product">
    <div>
      <div>
        <i><strong>Category: </strong></i>{{ product.title }}
      </div>
      <div>
        <i><strong>Manufacturer: </strong></i>{{ product.body }}
      </div>
    </div>
    <div class="btn1">
      <button-first @click="$router.push(`/product/${product.id}`)">
        Open
      </button-first>
      <button-first @click="$emit('delete', product)"> Delete </button-first>
    </div>
    <div class="likes">
      <h4>{{ $store.state.likes.likes }}</h4>
      <h4>{{ $store.getters["likes/countX2"] }}</h4>
      <button @click="$store.commit(`likes/inrementCount`)">+</button>
      <button @click="$store.commit(`likes/dicrementCount`)">-</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scope>
.btn1 {
  align-self: flex-end;
}
.product {
  display: flex;
  margin-top: 5px;
  border: 2px solid cyan;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
}
.likes {
  display: flex;
}
</style>