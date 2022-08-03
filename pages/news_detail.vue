<template>
  <div>
    <NavHeader />
    <PageHeader title="ARTIGOS E DICAS" />
    <BlogSingle />
    <Footer />
  </div>
</template>

<script>
import { company } from "@/global.js";
import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import BlogSingle from "@/components/BlogSingle.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavHeader,
    PageHeader,
    BlogSingle,
    Footer,
  },
  head() {
    return {
      title: `${company} | Serviços`,
    };
  },
};
</script>



