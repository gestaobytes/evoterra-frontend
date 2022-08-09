<template>
  <button @click="$emit('save')"
    class="inline-block rounded-full border-[0.05rem] border-lime-500 text-lime-500 text-xs leading-normal 
    hover:bg-[#303F06] hover:text-white 
    focus:bg-[#303F06] focus:text-white focus:outline-none focus:ring-0 
    active:bg-lime-700 active:text-white transition duration-150 ease-in-out w-7 h-7">
    <i class="fa fa-pen"></i>
  </button>
</template>

<script>
export default {
  name: "ButtonEdit",
};
</script>
