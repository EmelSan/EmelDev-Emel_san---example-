<template>
  <div class="main-page-wrapper">
    <div
      class="section"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <AboutScene />
    </div>
    <div
      class="section"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <WebServicesScene />
    </div>
    <div
      class="section"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <DesignScene />
    </div>
    <div
      class="section"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <BrandingScene />
    </div>
    <div
      class="section"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <UiUxScene />
    </div>
  </div>
</template>

<script>
import AboutScene from "~/components/main-page/about-scene.vue";
import WebServicesScene from "~/components/main-page/web-services-scene.vue";
import DesignScene from "~/components/main-page/design-scene.vue";
import BrandingScene from "~/components/main-page/branding-scene.vue";
import UiUxScene from "~/components/main-page/ui-ux-scene.vue";
export default {
  components: {
    AboutScene,
    WebServicesScene,
    DesignScene,
    BrandingScene,
    UiUxScene,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-page-wrapper {
  // width: 100%;
  // height: 100vh;
  // overflow-y: scroll !important;
  // scroll-snap-type: y mandatory !important;

  .section {
    // scroll-snap-align: start !important;
    width: 100%;
    height: 100%;
  }
}
</style>