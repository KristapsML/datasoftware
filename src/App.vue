<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "app"
};
</script>

<style lang="scss">
</style>
