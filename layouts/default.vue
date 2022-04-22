<template>
  <v-app class="main-wrapper">
    <v-main class="content-wrapper">
      <v-container>
        <div class="content-container">
          <div class="huy" v-if="$device.IS_MOBILE"></div>
          <Scene class="scene" v-else />
          <div class="noise"></div>
          <div class="bg-animation">
            <lottie
              class="lottie"
              :width="3840"
              :height="2230"
              :options="lottieOptions"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <Header class="header" />
          <Console />
          <Nuxt class="main-content" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "~/components/layout/header/index.vue";
const Console = () => import("~/components/layout/console.vue");
const Scene = () => import("~/components/layout/model-scene/index.vue");
const lottie = () => import("vue-lottie/src/lottie.vue");
import * as animationData from "~/static/animation.json";

export default {
  components: {
    Header,
    Console,
    Scene,
    lottie,
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
        animationSpeed: "0.1",
      },
    };
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
      this.anim.setSpeed(0.34);
    },
  },
};
</script>

.<style lang="scss">
.main-wrapper {
  .container {
    position: relative;
    max-width: 1920px !important;
    padding: 0;
    .content-container {
      margin: 0 auto;
      max-width: $main-wrapper-width;
      padding: 0 80px;
      overflow: hidden;
      .huy {
        color: #ffffff;
        font-size: 30px;
      }
      .noise::before {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        content: "";
        opacity: 0.1;
        pointer-events: none;
        background: url("~/static/images/noise.gif");
      }
      .bg-animation {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity: 0.2;
        pointer-events: none;
      }
      .scene {
        z-index: 0;
      }
      .header {
        z-index: 9999;
      }
      .main-content {
        position: relative;
        z-index: 9998;
      }
      @include max($tablets) {
        padding: 0 24px;
      }
      @include max($small-phones) {
        padding: 0 8px;
      }
    }
  }
}
</style>



