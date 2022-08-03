<template>
  <div>
    <NavHeader />
    <PageHeader title="Detalhe do Servico" />
    <ServiceDetail />
    <Footer />
  </div>
</template>

<script>
import { company } from "@/global.js";

import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import ServiceDetail from "@/components/ServiceDetail.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavHeader,
    PageHeader,
    ServiceDetail,
    Footer,
  },
  head() {
    return {
      title: `Detalhes | ${company}`,
    };
  },
};
</script>
