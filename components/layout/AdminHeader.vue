<template>
  <div>
    <nav
      class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-3
        bg-gray-700
        text-gray-200
        shadow-lg
        navbar navbar-expand-lg navbar-light
      "
    >
      <div
        class="
          container-fluid
          w-full
          flex flex-wrap
          items-center
          justify-between
          px-6
        "
      >
        <div class="flex-grow items-center">
          <table width="100%">
            <tr>
              <td width="200px">
                <img
                  src="@/static/images/resources/logo-horizontal.webp"
                  alt="Logo"
                />
              </td>
              <td>
                <NuxtLink
                  to="/"
                  class="
                    text-white
                    opacity-60
                    hover:opacity-80
                    focus:opacity-80
                    m-1
                  "
                >
                  Dashboard
                </NuxtLink>
                <a
                  class="
                    text-white
                    opacity-60
                    hover:opacity-80
                    focus:opacity-80
                    m-1
                  "
                  href="#"
                  >Team</a
                >
                <a
                  class="
                    text-white
                    opacity-60
                    hover:opacity-80
                    focus:opacity-80
                    m-1
                  "
                  href="#"
                  >Projects</a
                >
              </td>
              <td width="50px">
                <NuxtLink
                  class="
                    text-white
                    opacity-60
                    hover:opacity-80
                    focus:opacity-80
                    mr-4
                  "
                  :to="{ name: 'index' }"
                >
                  {{ dataUser.fullname }}
                </NuxtLink>
              </td>
              <td width="50px">
                <a
                  @click="logout()"
                  class="
                    text-white
                    opacity-60
                    hover:opacity-80
                    focus:opacity-80
                    mr-4
                  "
                  href="#"
                >
                  Sair
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </nav>

    {{ permissions }}
  </div>
</template>
<script>
import { adminSuper } from "@/global.js";

export default {
  name: "AdminHeader",
  data() {
    return {
      permissions: [],
      dataUser: {},
    };
  },

  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push({ name: "login" });
    },
  },

  mounted() {
    // this.permissions = this.$auth.user.permissions;
    // this.dataUser = this.$auth.user.user[0];

    // if (this.$auth.loggedIn == true) {
    //   this.$store.dispatch("auth-user/SET_USER_LOGGED", true);
    // } else {
    //   this.$store.dispatch("auth-user/SET_USER_LOGGED", false);
    // }



    


    // var menuUsers = [];
    // var menuService = [];
    // const p = this.$auth.user.permissions;
    // const isSuperADM = p.includes(`${adminSuper}`);
    // if (isSuperADM || p.includes("users")) {
    //   let menuRouteUsers = [
    //     "mdi-account-multiple-outline",
    //     "Usuários",
    //     { name: "admin-users" },
    //   ];
    //   menuUsers.push(menuRouteUsers);
    // }



  },
};
</script>
