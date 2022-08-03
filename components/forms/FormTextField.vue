<template>
  <div :msg="messagesValidations">
    <!-- @input="$emit('input', $event)" -->
    <input
      autofocus
      :value="value"
      @input="inputEvent"
      @blur="$emit('blur', $event)"
      :placeholder="label"
      :type="defineType"
      :required="defineRequired"
      :label="label"
      :disabled="defineDisabled"
      :append-icon="messagesValidations.$error ? 'mdi-alert-circle' : ''"
      :validate="messagesValidations.$error"
      :msgvalidate="messagesValidations"
      :error="messagesValidations.$error"
      :errordata="errordata"
      :class="
        'text-base border rounded font-medium leading-none py-3 w-full pl-3 mt-2 ' +
        (!messagesValidations.$error
          ? 'bg-gray-200 border-1 border-gray-900 text-gray-800'
          : 'bg-red-50 hover:border-2 border-red-600 text-red-600')
      "


    />

    <div class="text-xs text-red-500 mt-1" v-if="errordata || messagesValidations.$error">
      <p>
        <span v-if="errordata">{{ errordata[0] }} <br /></span>
        <span v-if="!messagesValidations.required">Campo obrigatório. </span>

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
