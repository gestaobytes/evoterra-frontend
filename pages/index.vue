<template>
  <div>
    <NavHeader />
    <Slider />
    <WelcomeOne />
    <NeedAll />
    <ServiceTwo />
    <BlogOne />
    <Footer />
  </div>
</template>

<script>
import { company } from "@/global";
import NavHeader from "@/components/NavHeader.vue";
import Slider from "@/components/Slider.vue";
import WelcomeOne from "@/components/WelcomeOne.vue";
import NeedAll from "@/components/NeedAll.vue";
import ServiceTwo from "@/components/ServiceTwo.vue";
import BlogOne from "@/components/BlogOne.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavHeader,
    Slider,
    WelcomeOne,
    NeedAll,
    ServiceTwo,
    BlogOne,
    Footer,
  },
  head() {
    return {
      title: `${company}`,
    };
  },
};
</script>
