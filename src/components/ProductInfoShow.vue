<template>
  <div>
    <product-info-show-self-item
      :product="product"
      :key="product.id"
      v-for="product in products"
      @delete="$emit('delete', product)"
    />
  </div>
</template>
<script>
import ProductInfoShowSelfItem from "@/components/ProductInfoShowSelfItem";
export default {
  components: { ProductInfoShowSelfItem },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scope>
</style>
