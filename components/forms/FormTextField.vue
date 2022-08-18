<template>
  <div :msg="messagesValidations">
    <label
      class="block text-xs py-1 -mb-2 leading-5"
      :class="!messagesValidations.$error ? 'text-gray-600' : 'text-red-500'"
    >
      {{ label }}
    </label>
    <input
      autofocus
      :value="value"
      @input="inputEvent"
      @blur="$emit('blur', $event)"
      :type="defineType"
      :required="defineRequired"
      :label="label"
      :disabled="defineDisabled"
      :append-icon="messagesValidations.$error ? 'mdi-alert-circle' : ''"
      :validate="messagesValidations.$error"
      :msgvalidate="messagesValidations"
      :error="messagesValidations.$error"
      :errordata="errordata"
      :min="min"
      :max="max"
      :minlength="minlength"
      :maxlength="maxlength"
      class="
        -z-10
        rounded
        font-medium
        leading-none
        w-full
        py-2
        pl-3
        pr-3
        mt-2
        appearance-none
        text-base
      "
      :class="
        !messagesValidations.$error
          ? ' border-2 border-gray-300 text-gray-600 focus:outline-none focus:text-lime-900 focus:border-lime-400 focus:shadow-[0_0px_17px_-8px_rgba(0,0,0,0.3)] focus:shadow-lime-400'
          : ' border-2 border-red-500 text-red-500 focus:outline-none focus:border-red-500 focus:shadow-[0_0px_17px_-8px_rgba(0,0,0,0.3)] focus:shadow-red-500'
      "
    />
    <h6>{{errordata}}</h6>
    <div
      class="text-xs text-red-500 mt-1"
      v-if="errordata || messagesValidations.$error"
    >
      <p>
        <span v-if="errordata">{{ errordata[0] }} <br /></span>
        <span v-if="!messagesValidations.required">Obrigatório.</span>

        <span v-else-if="defineType == 'email' && !messagesValidations.email"
          >E-mail inválido.
        </span>
        <span v-else-if="defineType == 'url' && !messagesValidations.url"
          >URL inválida.
        </span>
        <span v-else-if="!messagesValidations.minLength"
          >Mín {{ messagesValidations.$params.minLength.min }}
          <span v-if="defineType == 'text'">caracteres</span>
        </span>
        <span v-else-if="!messagesValidations.maxLength"
          >Máx {{ messagesValidations.$params.maxLengt }}
          <span v-if="defineType == 'text'">caracteres</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormTextField",
  props: [
    "messagesValidations",
    "min",
    "max",
    "minlength",
    "maxlength",
    "type",
    "nameField",
    "required",
    "label",
    "value",
    "validate",
    "msgvalidate",
    "errordata",
  ],
  computed: {
    defineType: function () {
      return this.type || "text";
    },
    defineRequired: function () {
      return this.required || false;
    },
    defineDisabled: function () {
      return this.disabled || false;
    },
  },
  methods: {
    inputEvent(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
