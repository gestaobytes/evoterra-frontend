<template>
  <div>
    <h1>esse é admin</h1>
  </div>
</template>

<script>
export default {
  name: "dasboard",
  middleware: ["guest", "clearValidationErrors"],
  layout: "restrict",
  data() {
    return {
      
    };
  },

  components: {},
};
</script>

<style></style>
