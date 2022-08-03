<template>
  <div>
    <NavHeader />
    <PageHeader title="Sobre a Evoterra" />
    <InfoCompany />
    <MissionVision />
    <BestCompany />
    <TeamOne id="team" />
    <Footer />
  </div>
</template>

<script>
import { company } from "@/global.js";

import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import InfoCompany from "@/components/InfoCompany.vue";
import MissionVision from "@/components/MissionVision.vue";
import TeamOne from "@/components/TeamOne.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavHeader,
    PageHeader,
    InfoCompany,
    MissionVision,
    TeamOne,
    Footer,
  },
  head() {
    return {
      title: `Sobre nós | ${company}`,
    };
  },
};
</script>
