<template>
  <div
    class="p-3 bg-red-200 border-l-4 border-red-600 rounded shadow transition flex items-start mb-4"
  >
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM16.0608 15L15 16.0608L12 13.0608L9 16.0608L7.93922 15L10.9392 12L7.93922 9L9 7.93922L12 10.9392L15 7.93922L16.0608 9L13.0608 12L16.0608 15Z"
          fill="#EF4444"
        />
      </svg>
    </div>
    <div class="ml-2">
      <h1 class="text-lg font-semibold leading-4 text-red-800">{{ defineTitle }}</h1>
      <p class="text-sm leading-5 font-normal mt-2 text-red-800">
        {{ textError }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertError",
  props: ["titleError", "textError"],
  computed: {
    defineTitle: function () {
      return this.titleError || "Erro";
    },
  },
};
</script>
