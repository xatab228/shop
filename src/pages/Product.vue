<template>
  <div>
    <h1>Products</h1>
    <input-first v-model="searchProduct" />
    <div class="btn-and-select">
      <button-first @click="addDialogVisible = true">+</button-first>
      <select-options
        v-model="selectOption"
        :options="options"
      ></select-options>
    </div>
    <add-dialog v-model:addDialogVisible="addDialogVisible">
      <product-info-add @create="addNewProduct" />
    </add-dialog>
    <product-info-show
      :products="sortedAndSearchedProduct"
      @delete="deleteProduct"
    />
    <div v-intersection="loadMoreData"></div>
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
import axios from "axios";

export default {
  components: {
    ProductInfoAdd,
    ProductInfoShow,
    PageLent,
  },
  data() {
    return {
      products: [],
      servInfo: {
        url: "https://jsonplaceholder.typicode.com/posts",
        page: 1,
        limit: 10,
        pageTotal: 0,
      },
      addDialogVisible: false,
      options: [
        { value: "title", name: "Name" },
        { value: "body", name: "Content" },
      ],
      selectOption: "",
      searchProduct: "",
    };
  },
  methods: {
    addNewProduct(product) {
      this.products.push(product);
      this.addDialogVisible = false;
    },
    deleteProduct(product) {
      this.products = this.products.filter((prd) => prd.id != product.id);
    },
    // currPage(curpage) {
    //   this.servInfo.page = curpage;
    // },
    async fetchData() {
      try {
        const response = await axios.get(this.servInfo.url, {
          params: {
            _page: this.servInfo.page,
            _limit: this.servInfo.limit,
          },
        });
        this.servInfo.pageTotal = Math.ceil(
          response.headers["x-total-count"] / this.servInfo.limit
        );
        this.products = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async loadMoreData() {
      try {
        this.servInfo.page += 1;
        const response = await axios.get(this.servInfo.url, {
          params: {
            _page: this.servInfo.page,
            _limit: this.servInfo.limit,
          },
        });
        this.servInfo.pageTotal = Math.ceil(
          response.headers["x-total-count"] / this.servInfo.limit
        );
        this.products = [...this.products, ...response.data];
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    sortedProducts() {
      return [...this.products].sort((p1, p2) =>
        p1[this.selectOption]?.localeCompare(p2[this.selectOption])
      );
    },

    sortedAndSearchedProduct() {
      return this.sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(this.searchProduct.toLowerCase())
      );
    },
  },
  watch: {
    // servInfo: {
    //   handler() {
    //     this.fetchData();
    //   },
    //   deep: true,
    // },
  },
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