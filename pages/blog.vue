<template>
  <div>
    <NavHeader />
    <PageHeader title="Artigos e Dicas" />
    <BlogPage />
    <Footer />
  </div>
</template>

<script>
import { company } from "@/global.js";
import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import BlogPage from "@/components/BlogPage.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavHeader,
    PageHeader,
    BlogPage,
    Footer,
  },
  head() {
    return {
      title: `Blog | ${company}`,	
    };
  },
};
</script>
