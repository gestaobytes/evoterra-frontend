<template>
  <div>
    <h1 v-for="(i, index) in 40" :key="index">esse é admin</h1>
  </div>
</template>

<script>
export default {
  name: "dasboard",
  // middleware: ["guest", "clearValidationErrors"],
  layout: "restrict",
  data() {
    return {
      
    };
  },

  components: {},
};
</script>

<style></style>
