<template>
  <div
    class="
      fixed
      top-0
      left-0
      w-full
      h-full
      overflow-x-hidden overflow-y-auto
      inset-0
      flex
      justify-center
      items-center
      z-40
    "
  >
    <div
      @click="animate()"
      class="
        fixed
        inset-0
        flex
        justify-center
        items-center
        z-30
        opacity-95
        bg-[#303F06]
      "
    ></div>

    <div class="w-full h-auto max-h-[90%] mx-8 z-50 overflow-y-auto rounded">
      <div class="bg-white py-7 px-7 w-full">
        <div class="flex">
          <div class="flex-grow">
            <p class="text-2xl font-semibold uppercase text-gray-300">
              {{ defineTitleModal }}
            </p>
          </div>
          <div class="w-[40px] flex-grow-0 text-right">
            <button
              @click="$emit('close')"
              class="text-xl text-gray-600 hover:text-red-800 w-15 h-15"
              :class="pulse ? 'animate-bounce' : ''"
            >
              <i class="fa fa-times"></i>
            </button>
          </div>
        </div>

        <hr class="my-4" />

        <form @submit.prevent="$emit('save')" enctype="multipart/form-data">
          <slot name="contentForm"></slot>
        </form>
      </div>
      <div
        class="
          bg-gray-50
          border-t-2 border-[#303F06]
          py-4
          px-7
          w-full
          flex flex-wrap
          justify-between
        "
      >
        <table class="p-0">
          <tr v-if="isXs" class="border-0">
            <td colspan="5" class="p-0 pb-2 ">
                <span
                  v-if="errorValidation || disabledSave"
                  class="text-gray-400 text-sm"
                >
                  Preencha os campos obrigatórios(*) e sem erros para ativar o botão.
                </span>
            </td>
          </tr>
          <tr class="p-0 border-0">
            <td width="100px" class="p-0">
              <button
                @click="$emit('close')"
                class="
                  inline-block
                  px-6
                  py-2.5
                  text-white
                  bg-orange-600
                  hover:bg-orange-700
                  focus:bg-orange-700
                  text-xs
                  rounded
                  focus:outline-none focus:ring-0
                  transition
                  duration-150
                  ease-in-out
                "
                :class="pulse ? 'animate-bounce' : ''"
              >
                FECHAR
              </button>
            </td>
            <td class="p-0 flex justify-end pr-2" v-if="!isXs">
              <div class="w-56 text-right">
                <span
                  v-if="errorValidation || disabledSave"
                  class="text-gray-400 text-sm"
                >
                  Preencha os campos obrigatórios(*) e sem erros para ativar o botão.
                </span>
              </div>
            </td>
            <td width="100px" class="p-0 text-right">
              <button
                @click="$emit('save')"
                :disabled="errorValidation || disabledSave"
                class="
                  inline-block
                  px-6
                  py-2.5
                  text-white text-xs
                  rounded
                  focus:outline-none focus:ring-0
                  transition
                  duration-150
                  ease-in-out
                "
                :class="
                  !errorValidation && !disabledSave
                    ? 'bg-lime-500 hover:bg-[#303F06] focus:bg-[#303F06]'
                    : 'bg-gray-400'
                "
              >
                SALVAR
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalForm",
  props: ["title", "errorValidation", "disabledSave"],
  data() {
    return {
      pulse: false,
    };
  },
  computed: {
    defineTitleModal: function () {
      return this.title || "REGISTRO";
    },
    defineError: function () {
      return this.errorValidation || true;
    },

    isXs() {
      return this.$breakpoints.xs;
    },
    isSm() {
      return this.$breakpoints.sm;
    },
    isMd() {
      return this.$breakpoints.md;
    },
    isLg() {
      return this.$breakpoints.lg;
    },
    isXl() {
      return this.$breakpoints.xl;
    },
  },
  methods: {
    animate() {
      this.pulse = true;
      setTimeout(() => {
        this.pulse = false;
      }, 1500);
    },
  },
};
</script>