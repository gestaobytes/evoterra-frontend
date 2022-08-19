<template>
  <v-card :title="defineTitleModal" :errorValidation="defineError" border="top">
    <v-card>
      <v-toolbar color="#006E80" dark>
        <table width="100%">
          <tr>
            <td>
              <h2 style='color:lightseagreen' class="mt-4 title text-uppercase">
                {{ title }}
              </h2>
            </td>
            <td width="50px">
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    fab
                    outlined
                    small
                    @click="$emit('close')"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>X</span>
                  </v-btn>
                </template>
                <span>Fechar Tela</span>
              </v-tooltip>
            </td>
          </tr>
        </table>
      </v-toolbar>
      <v-card-text class="pt-10">
        <v-form @submit.prevent="$emit('save')" enctype="multipart/form-data">
          <slot name="contentForm"></slot>
        </v-form>
      </v-card-text>

      <v-card-actions class="pa-4">
        <v-btn
          color="grey lighten-1"
          dark
          small
          depressed
          @click="$emit('close')"
          >Fechar</v-btn
        >
        <v-spacer />
        <v-btn disabled small v-if="errorValidation">ENVIAR</v-btn>
        <v-btn
          color="#006E80"
          dark
          small
          depressed
          v-else
          @click="$emit('save')"
          >ENVIAR</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: ["title", "errorValidation"],
  name: "AppForm",
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




