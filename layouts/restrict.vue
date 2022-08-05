<template>
  <div>
    <AdminHeader />
    <div class="py-6 px-6">
      <nuxt />
    </div>
    <AdminBottom class="sm:invisible md:invisible lg:invisible xl:md:invisible" />
  </div>
</template>

<script>
import AdminHeader from "@/components/layout/AdminHeader.vue";
import AdminBottom from "@/components/layout/AdminBottom.vue";
export default {
  name: "restrict",
  // middleware: ["guest"],
  components: {
    AdminHeader,
    AdminBottom,
  },
  data() {
    return {};
  },

  // mounted() {
  //   if (this.$auth.loggedIn == true) {
  //     this.$store.dispatch("auth-user/SET_USER_LOGGED", true);
  //   } else {
  //     this.$store.dispatch("auth-user/SET_USER_LOGGED", false);
  //   }
  // },
};
</script>
