<template>
  <div>
    <h1>Products</h1>
    <input-first v-model="searchItem" />
    <div class="btn-and-select">
      <button-first @click="addDialogVisible = true">+</button-first>
      <select-options
        :options="options"
        v-model="selectOption"
      ></select-options>
    </div>
    <add-dialog v-model:addDialogVisible="addDialogVisible">
      <product-info-add />
    </add-dialog>
    <product-info-show :products="sortedAndSearchedData" />
    <div v-intersection="fetchingMoreData" />
  </div>
</template>

<script>
import ProductInfoAdd from "@/components/ProductInfoAdd.vue";
import ProductInfoShow from "@/components/ProductInfoShow.vue";
import PageLent from "@/components/PageLent.vue";
import getServerInfo from "@/hooks/getServerInfo.js";
import loadData from "@/hooks/loadData.js";
import loadMoreData from "@/hooks/loadMoreData.js";
import sortData from "@/hooks/sortData.js";
import sortDataAndSearch from "@/hooks/sortDataAndSearch.js";

export default {
  components: {
    ProductInfoAdd,
    ProductInfoShow,
    PageLent,
  },
  data() {
    return {
      addDialogVisible: false,
      options: [
        { value: "title", name: "Name" },
        { value: "body", name: "Content" },
      ],
    };
  },
  setup(props) {
    const { servInfo } = getServerInfo(
      "https://jsonplaceholder.typicode.com/posts",
      10
    );
    const { products } = loadData(servInfo);
    const { fetchingMoreData } = loadMoreData(servInfo, products);
    const { selectOption, sortedData } = sortData(products);
    const { searchItem, sortedAndSearchedData } = sortDataAndSearch(sortedData);

    return {
      products,
      servInfo,
      selectOption,
      sortedData,
      searchItem,
      sortedAndSearchedData,
      fetchingMoreData,
    };
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