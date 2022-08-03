<template>
  <div>
    <AdminHeader />
    <div class="py-6 px-6">
      <nuxt />
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/layout/AdminHeader.vue";
export default {
  name: "restrict",
  middleware: ["guest"],
  components: {
    AdminHeader,
  },
  data() {
    return {};
  },

  mounted() {
    if (this.$auth.loggedIn == true) {
      this.$store.dispatch("auth-user/SET_USER_LOGGED", true);
    } else {
      this.$store.dispatch("auth-user/SET_USER_LOGGED", false);
    }
  },
};
</script>
