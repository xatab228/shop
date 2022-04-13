<template >
  <div class="navbar">
    <router-link to="/">Vue 3</router-link>
    <div class="nav-btn">
      <button-first @click="$router.push('/product')">Product</button-first>
      <button-first @click="$router.push('/productWithStore')"
        >PWS</button-first
      >
      <button-first @click="$router.push('/pwca')">PWCA</button-first>
      <button-first @click="$router.push('/')">Main</button-first>
    </div>
    <!-- <router-link to="/product">product</router-link>
    <router-link to="/">main</router-link> -->
  </div>
</template>
<script>
export default {
  name: "main-navbar",
};
</script>
<style scope>
.navbar {
  display: flex;
  background-color: cyan;
  min-height: 50px;
}
.nav-btn {
  display: flex;
  margin-left: auto;
}
</style>