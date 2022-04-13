<template >
  <div class="page_lent">
    <div
      :class="{
        'self-page': page !== pageNumber,
        'current-page': page === pageNumber,
      }"
      v-for="page in pageTotal"
      :key="page"
      @click="$emit('chosedPage', page)"
    >
      {{ page }}
    </div>
  </div>
</template>
<script>
export default {
  name: "page-lent",
  props: {
    pageTotal: {
      type: Number,
      default: 10,
    },
    pageNumber: {
      type: Number,
      default: 10,
    },
  },
};
</script>
<style>
.page_lent {
  display: flex;
  margin-top: 15px;
}
.self-page {
  border: 1px solid black;
  margin: 1px;
  padding: 10px;
}
.current-page {
  border: 2px solid cyan;
}
</style>