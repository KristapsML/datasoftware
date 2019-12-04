<template>
  <div class="about">
    <Header />

    <Interactivemap />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/layout/Header.vue";
import Interactivemap from "@/components/Interactivemap.vue";

export default {
  name: "map",
  components: {
    Header,
    Interactivemap
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  min-height: 100% !important;
  height: 100%;
}

.about {
  position: relative;
  height: 100%;
}
</style>
