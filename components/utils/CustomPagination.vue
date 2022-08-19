<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-700">
        <span class="font-medium"
          >Pág. {{ page }} de {{ paginate }} de {{ count }} resultados.</span
        >
      </p>
    </div>
    <slot name="pagination"></slot>
  </div>
</template>
<script>
export default {
  props: ["page", "paginate", "count"],
  name: "CustomPagination",
  // computed: {
  //   defineHeadEdition: function () {
  //     return this.headEdition || "";
  //   },
  // },
};
</script>