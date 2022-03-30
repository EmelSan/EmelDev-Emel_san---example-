<template>
  <v-app>
    <v-main>
      <div class="container">
        <div class="noise"></div>
        <Scene class="scene" />
        <Header class="header" />
        <Nuxt class="main-content" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Header from "~/components/layout/header/index.vue";
import Scene from "~/components/layout/model-scene/index.vue";
export default {
  components: {
    Header,
    Scene,
  },
};
</script>

.<style lang="scss">
.container {
  .noise::before {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: "";
    opacity: 0.04;
    pointer-events: none;
    background: url("~/static/images/noise.gif");
  }
  .scene {
    z-index: 0;
  }
  .header {
    z-index: 99999;
  }
  .main-content {
    position: relative;
    z-index: 9999;
  }
}
</style>



