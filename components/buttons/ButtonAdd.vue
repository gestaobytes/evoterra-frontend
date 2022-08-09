<template>
  <!-- class="text-white border rounded  uppercase bg-lime-500"> -->
  <button @click="$emit('add')" :title="defineTitle" class="mb-3 inline-block rounded bg-lime-500 text-white text-xs leading-normal px-2 py-2
    hover:bg-[#303F06] hover:text-white 
    focus:bg-[#303F06] focus:text-white focus:outline-none focus:ring-0 
    active:bg-lime-700 active:text-white transition duration-150 ease-in-out">
    <i class="fa fa-plus mr-1"></i>
    {{ defineTitle }}

  </button>
</template>

<script>
export default {
  name: "ButtonAdd",
  props: ["title", "iconButton", "outlined"],
  computed: {
    defineTitle: function () {
      return this.title || "NOVO REGISTRO";
    },
  },
};
</script>
