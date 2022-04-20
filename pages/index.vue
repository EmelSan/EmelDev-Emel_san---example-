<template>
  <div class="main-page-wrapper">
    <div class="section">
      <HelloScene />
    </div>
    <div class="section">
      <AboutScene />
    </div>
    <div class="section">
      <WebServicesScene />
    </div>
    <div class="section">
      <DesignScene />
    </div>
    <div class="section">
      <BrandingScene />
    </div>
    <div class="section">
      <UiUxScene />
    </div>
  </div>
</template>

<script>
import HelloScene from "~/components/main-page/hello-scene.vue";
import AboutScene from "~/components/main-page/about-scene.vue";
import WebServicesScene from "~/components/main-page/web-services-scene.vue";
import DesignScene from "~/components/main-page/design-scene.vue";
import BrandingScene from "~/components/main-page/branding-scene.vue";
import UiUxScene from "~/components/main-page/ui-ux-scene.vue";
export default {
  components: {
    HelloScene,
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

<style lang="scss">
.main-page-wrapper {
  overflow-y: scroll;
  .section {
    scroll-snap-align: center;
    position: relative;
  }
}
</style>