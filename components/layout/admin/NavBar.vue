<template>
  <div>
    <nav class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-3
        bg-[#303F06]
        text-gray-200
        shadow-lg
        navbar navbar-expand-lg navbar-light
      ">
      <div class="flex flex-wrap">
        <div class="pt-3" v-if="isSm || isMd">
          <a aria-label="Open Menu" @click="setDrawer()">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" class="w-6 h-6">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </a>
        </div>
        <div class="">
          <NuxtLink :to="{ name: 'index' }">
            <img src="@/static/images/resources/logo-horizontal.webp" alt="Logo" />
          </NuxtLink>
        </div>
        <div v-if="isLg || isXl" class="text-white pt-3">
          <NuxtLink :to="{ name: 'admin' }" class="opacity-60 hover:text-lime-300 m-1">
            Dashboard
          </NuxtLink>
          <NuxtLink :to="{ name: 'admin-categorias' }" class="opacity-60 hover:text-lime-300 m-1">
            Categorias
          </NuxtLink>

          <a class="opacity-60 hover:text-lime-300 m-1" href="#">Projects</a>
        </div>
      </div>

      <div class="bg-orange-500">
        <NuxtLink class="text-white opacity-60 hover:text-lime-300 mr-4" :to="{ name: 'index' }">
          {{ dataUser.fullname }}
        </NuxtLink>
        <a @click="logout()" class="text-white opacity-60 hover:text-lime-300 mr-4" href="#">
          Sair
        </a>
      </div>
    </nav>

    {{ permissions }}
  </div>
</template>
<script>
// import { adminSuper } from '@/global.js'

export default {
  name: 'NavBar',
  data() {
    return {
      permissions: [],
      dataUser: {},
    }
  },

  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push({ name: 'login' })
    },
    setDrawer() {
      this.drawer = !this.drawer
    },
  },

  computed: {
    isXs() {
      return this.$breakpoints.xs
    },
    isSm() {
      return this.$breakpoints.sm
    },
    isMd() {
      return this.$breakpoints.md
    },
    isLg() {
      return this.$breakpoints.lg
    },
    isXl() {
      return this.$breakpoints.xl
    },

    drawer: {
      get() {
        return this.$store.state.drawer.show
      },
      set(val) {
        this.$store.dispatch('drawer/SET_DRAWER', val)
      },
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
}
</script>
