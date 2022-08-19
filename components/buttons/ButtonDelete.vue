<template>
  <button
    @click="$emit('delete')"
    class="
      bg-red-700
      rounded
      text-white text-sm
      l
      w-auto
      h-auto
      flex
      px-2
      py-1
      leading-normal
      font-medium
      ml-2
      hover:bg-red-800
      focus:bg-red-800
      active:bg-red-700
      transition
      duration-150
      ease-in-out
    "
  >
    EXCLUIR
  </button>
</template>

<script>
export default {
  name: "ButtonDelete",
};
</script>
