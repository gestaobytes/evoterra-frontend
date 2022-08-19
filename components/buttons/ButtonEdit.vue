<template>
  <button @click="$emit('save')"
    class="bg-lime-700 rounded text-white text-sm l w-auto h-auto flex px-2 py-1 leading-normal font-medium ml-2
    hover:bg-[#303F06]
    focus:bg-[#303F06] 
    active:bg-lime-700 transition duration-150 ease-in-out">
    EDITAR
  </button>
</template>

<script>
export default {
  name: "ButtonEdit",
};
</script>
