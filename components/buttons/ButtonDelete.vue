<template>
  <button @click="$emit('delete')"
    class="mr-1 inline-block rounded-full border-[0.05rem] border-red-600 text-red-600 text-xs leading-normal 
    hover:bg-red-700 hover:text-white 
    focus:bg-red-700 focus:text-white focus:outline-none focus:ring-0 
    active:bg-red-800 active:text-white transition duration-150 ease-in-out w-7 h-7">
    <i class="fas fa-trash"></i>
  </button>
</template>

<script>
export default {
  name: "ButtonDelete",
};
</script>
