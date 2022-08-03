<template>
  <div>
    <NavHeader />
    <PageHeader title="Serviços" />
    <ServicePage />
    <Footer />
  </div>
</template>

<script>
import { company } from '@/global.js';
import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import ServicePage from "@/components/ServicePage.vue";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    NavHeader,
    PageHeader,
    ServicePage,
    Footer,
},
  head() {
    return {
      title: `${company} | Serviços`,
    };
  },
};
</script>
