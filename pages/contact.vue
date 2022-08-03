<template>
  <div>
    <NavHeader />
    <PageHeader title="Contato" />
    <Location />
    <ContactTwo />
    <GMap />
    <Footer />
  </div>
</template>

<script>
import { company } from "@/global.js";

import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import Location from "@/components/Location.vue";
import ContactTwo from "@/components/ContactTwo.vue";
import GMap from "@/components/GMap.vue";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    NavHeader,
    PageHeader,
    Location,
    ContactTwo,
    GMap,
    Footer,
  },
  head() {
    return {
      title: `Contato | ${company}`,
    };
  },
};
</script>
