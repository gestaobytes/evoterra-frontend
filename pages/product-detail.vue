<template>
  <div>
    <NavHeader />
    <PageHeader title="Detalhes" />
    <ProductDetail />
    <Footer />
  </div>
</template>

<script>
import { company } from '@/global.js';
import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    NavHeader,
    PageHeader,
    ProductDetail,
    Footer,
},
  head() {
    return {
      title: `${company} | Detalhes`,
    };
  },
};
</script>