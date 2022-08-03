<template>
  <div
    class="
      flex flex-col
      py-16
      items-center
      justify-center
      h-screen
      w-screen
      bg-gray-700
    "
  >
    <nuxt-link to="/">
      <img
        class="ma-5 mb-2"
        style="width: 100%; max-width: 220px; text-align: center"
        src="@/static/logo-h-mts-color.svg"
        alt="Gestão Bytes"
      />
    </nuxt-link>
    <div class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-10">
      <form @submit.prevent="userLogin">
        <div>
          <AlertError
            v-if="errors == 'Unauthorized'"
            titleError="Credenciais inválidas"
            textError="Usuário ou senha inválidos"
          />

          <FormInput
            label="E-mail"
            nameField="email"
            type="email"
            v-model="form.email"
            :messagesValidations="$v.form.email"
            :errordata="msgErrors != [] ? msgErrors.email : null"
            @blur="$v.form.email.$touch()"
          />
        </div>

        <div class="mt-6">
          <FormInput
            label="Password"
            type="password"
            nameField="password"
            v-model="form.password"
            :messagesValidations="$v.form.password"
            :errordata="msgErrors != [] ? msgErrors.password : null"
            @blur="$v.form.password.$touch()"
          />
        </div>
        <div class="mt-8">
          <button
            :disabled="this.$v.form.$invalid"
            type="submit"
            :loading="loadingBtn"
            class="text-white border rounded py-3 w-full uppercase"
            :class="this.$v.form.$invalid ? 'bg-gray-200' : 'bg-lime-500'"
          >
            {{ this.$v.form.$invalid ? "Preencha o Formulário" : "Entrar" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import crud from "@/components/api/_crud";
import { keyApplicationGB, urlApi, company } from "@/global";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import FormInput from "@/components/forms/FormTextField.vue";
import AlertError from "@/components/alerts/AlertError.vue";

export default {
  mixins: [crud],
  layout: "empty",
  middleware: ["clearValidationErrors"],
  components: {
    FormInput,
    AlertError,
  },

  data() {
    return {
      loadingBtn: false,
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations() {
    return {
      form: {
        email: { required, email },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(20),
        },
      },
    };
  },
  methods: {
    userLogin() {
      this.loadingBtn = true;
      this.$v.form.$touch();

      if (!this.$v.form.$invalid) {
        this.login();
      } else {
        this.loadingBtn = false;
        console.log("❌ Invalid form");
      }
    },

    async login() {
      await this.$auth
        .loginWith("cookie", {
          data: this.form,
        })
        .then((res) => {
          // console.log(res);
          const user = res.data.data;
          this.$auth.setUser(user);
          this.$router.push({ name: "admin" });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    functionError() {
      return this.$v.form.$invalid;
    },
  },

  // mounted() {
  //   if (this.$auth.loggedIn) {
  //     this.$router.push({ name: "admin" });
  //   }
  // },

  head() {
    return {
      title: `Login - ${company}`,
    };
  },
};
</script>
<style>
.open-model {
  font-weight: bold;
  cursor: pointer;
  color: #f9a825;
  text-transform: uppercase;
}

.v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  margin-top: 10px;
  margin-right: -2px;
  align-items: center;
  display: inline-flex;
}
</style>
