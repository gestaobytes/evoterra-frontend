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
    <div class="w-full h-auto max-h-[90%] mx-8 z-50 overflow-y-auto">
      <div class="bg-white py-7 px-7 w-full">
        <div class="flex flex-wrap justify-between">
          <div>
            <p class="text-2xl font-semibold uppercase">
              {{ defineTitleModal }}
            </p>
          </div>
          <div class="w-[100px] text-right">
            <button
              @click="$emit('close')"
              class="text-xl text-gray-600 hover:text-red-800 w-15 h-15"
            >
              <i class="fa fa-times"></i>
            </button>
          </div>
        </div>

        <hr class="my-4" />

        <form @submit.prevent="$emit('save')" enctype="multipart/form-data">
          <slot name="contentForm"></slot>
        </form>

        <div class="flex flex-wrap mt-2 justify-between">
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
              ml-1
            "
          >
            FECHAR
          </button>

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
              ml-1
            "
            :class="
              !errorValidation && !disabledSave
                ? 'bg-lime-500 hover:bg-[#303F06] focus:bg-[#303F06]'
                : 'bg-gray-400'
            "
          >
            SALVAR
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalForm",
  props: ["title", "errorValidation", "disabledSave"],
  computed: {
    defineTitleModal: function () {
      return this.title || "REGISTRO";
    },
    defineError: function () {
      return this.errorValidation || true;
    },
  },
};
</script>