<template>
  <div class="about">
    <Header />
    <h1>This is the list page</h1>
    <List />
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import List from "../components/FilterableList";

export default {
  name: "list",
  components: { Header, List }
};
</script>
