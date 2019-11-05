<template>
  <div class="block">
    <Home></Home>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/homeComponent.vue";

export default {
  name: "home",
  components: {
    Home
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";



@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>