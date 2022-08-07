<template>
  <div>
    <NavBar />
    <div class="py-6 px-6">
      <nuxt />
    </div>
    <NavBottom
      v-if="isXs"
      class="sm:invisible md:invisible lg:invisible xl:md:invisible"
    />
    <NavSidebar />
  </div>
</template>

<script>
import NavBar from '@/components/layout/admin/NavBar.vue'
import NavSidebar from '@/components/layout/admin/NavSidebar.vue'
import NavBottom from '@/components/layout/admin/NavBottom.vue'
export default {
  name: 'LayoutRestrict',
  // middleware: ["guest"],
  components: {
    NavBar,
    NavBottom,
    NavSidebar,
  },
  data() {
    return {}
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
  },

  // mounted() {
  //   if (this.$auth.loggedIn == true) {
  //     this.$store.dispatch("auth-user/SET_USER_LOGGED", true);
  //   } else {
  //     this.$store.dispatch("auth-user/SET_USER_LOGGED", false);
  //   }
  // },
}
</script>
