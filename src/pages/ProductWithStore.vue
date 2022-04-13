<template>
  <div>
    <h1>Products</h1>
    <input-first
      :modelValue="searchProduct"
      @update:modelValue="set_searchProduct"
    />
    <div class="btn-and-select">
      <button-first @click="addDialogVisible = true">+</button-first>
      <select-options
        :modelValue="selectOption"
        :options="options"
        @update:modelValue="set_selectOption"
      ></select-options>
    </div>
    <add-dialog v-model:addDialogVisible="addDialogVisible">
      <product-info-add @create="addNewProduct" />
    </add-dialog>
    <product-info-show
      :products="sortedAndSearchedProduct"
      @delete="deleteProduct"
    />
    <div v-intersection="loadMoreData" />
    <!-- <page-lent
      :pageTotal="servInfo.pageTotal"
      :pageNumber="servInfo.page"
      @chosedPage="currPage"
    /> -->
  </div>
</template>

<script>
import ProductInfoAdd from "@/components/ProductInfoAdd.vue";
import ProductInfoShow from "@/components/ProductInfoShow.vue";
import PageLent from "@/components/PageLent.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  components: {
    ProductInfoAdd,
    ProductInfoShow,
    PageLent,
  },
  data() {
    return {
      addDialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      set_page: "prodModl/set_page",
      set_searchProduct: "prodModl/set_searchProduct",
      set_selectOption: "prodModl/set_selectOption",
      set_products: "prodModl/set_products",
    }),
    ...mapActions({
      fetchData: "prodModl/fetchData",
      loadMoreData: "prodModl/loadMoreData",
    }),

    addNewProduct(product) {
      this.products.push(product);
      this.addDialogVisible = false;
    },
    deleteProduct(product) {
      this.set_products(this.products.filter((prd) => prd.id != product.id));
    },
  },
  computed: {
    ...mapState({
      products: (state) => state.prodModl.products,
      servInfo: (state) => state.prodModl.servInfo,
      options: (state) => state.prodModl.options,
      selectOption: (state) => state.prodModl.selectOption,
      searchProduct: (state) => state.prodModl.searchProduct,
    }),
    ...mapGetters({
      sortedProducts: "prodModl/sortedProducts",
      sortedAndSearchedProduct: "prodModl/sortedAndSearchedProduct",
    }),
  },
  //   watch: {},

  mounted() {
    this.fetchData();
  },
};
</script>

<style scope>
.btn-and-select {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>