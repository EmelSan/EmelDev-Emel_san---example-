<template>
  <!-- <div class="main-page-wrapper"> -->
  <full-page :options="options">
    <div class="section" data-aos="fade-up">
      <AboutScene />
    </div>
    <div class="section" data-aos="fade-up">
      <WebServicesScene />
    </div>
    <div class="section" data-aos="fade-up">
      <DesignScene />
    </div>
    <div class="section" data-aos="fade-up">
      <BrandingScene />
    </div>
    <div class="section" data-aos="fade-up">
      <UiUxScene />
    </div>
  </full-page>
  <!-- </div> -->
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
    return {
      options: {
        paddingTop: "0px",
        scrollingSpeed: "500",
        scrollBar: true,
        loopTop: true,
        loopBottom: true,
      },
    };
  },
  // destroyed() {
  //   $.fn.fullpage.destroy("all");
  // },
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  height: 100vh;
}
</style>