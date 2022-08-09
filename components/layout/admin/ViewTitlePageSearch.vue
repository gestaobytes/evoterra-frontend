<template>
  <div class="w-full flex flex-wrap justify-between py-3">
    <div>
      <p class="mt-1 text-2xl font-semibold uppercase">{{ titlePage }}</p>
    </div>
    <div class="">
      <div class="mb-3 xl:w-96">
        <form method="GET" v-on:submit.prevent="$emit('clickSubmit')"
          class="input-group relative flex flex-wrap items-stretch w-full mb-4">
          <input type="search" id="fieldSF" min="5" max="50" :placeholder="defineLabel" aria-label="Search"
            aria-describedby="button-addon3" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5
            font-normal bg-clip-padding border-l-2 border-r-0 border-t-2 border-b-2 border-lime-500 text-lime-500 rounded transition ease-in-out m-0 
          focus:bg-lime-50 focus:text-[#303F06] focus:border-lime-500 focus:shadow-[10px_10px_10px_-15px_rgba(48,63,6,0.1)]
            ">
          <button class="-ml-3 btn inline-block px-2 py-2 border-2 border-lime-500 text-lime-500 font-medium 
              text-xs leading-tight uppercase rounded transition duration-150 ease-in-out 
              hover:bg-[#303F06] hover:text-white hover:border-[#303F06] 
              focus:bg-lime-700 focus:text-white focus:border-lime-700 
              focus:ring-0" @click="$emit('clickSubmit')" id="button-addon3">Buscar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titlePage", "nameFS", "label"],
  name: "ViewTitlePageSearch",
  computed: {
    defineTitle: function () {
      return this.titlePage || "GESTÃO BYTES";
    },
    defineLabel: function () {
      return this.label || "Palavra(s) chave(s)";
    },
  },
};
</script>
