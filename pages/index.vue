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
const HelloScene = () => import("~/components/main-page/hello-scene.vue");
const AboutScene = () => import("~/components/main-page/about-scene.vue");
const WebServicesScene = () =>
  import("~/components/main-page/web-services-scene.vue");
const DesignScene = () => import("~/components/main-page/design-scene.vue");
const BrandingScene = () => import("~/components/main-page/branding-scene.vue");
const UiUxScene = () => import("~/components/main-page/ui-ux-scene.vue");
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