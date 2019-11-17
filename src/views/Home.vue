<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Homepage</h1>


    <Interactivemap />

  </div>
</template>

<script>
// @ is an alias to /src
import Interactivemap from "@/components/Interactivemap.vue";

export default {
  name: "home",
  components: {
    Interactivemap
  }
};
</script>
