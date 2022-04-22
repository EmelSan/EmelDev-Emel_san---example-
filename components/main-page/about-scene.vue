<template>
  <div class="about-scene">
    <AboutCard :cardInfo="cardInfo" class="about-card" />
  </div>
</template>

<script>
import AboutCard from "~/components/main-page/about-card.vue";

export default {
  components: {
    AboutCard,
  },
  data() {
    return {
      cardInfo: {
        title: this.$t("mainPage.aboutText.title"),
        description: this.$t("mainPage.aboutText.description"),
      },
    };
  },
  methods: {
    changeScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.about-scene {
  width: 100%;
  height: 100vh;
  .about-card {
    margin-top: 35vh;
  }
  @include max($phones) {
    height: 50vh;
    .about-card {
      margin-top: 25vh;
    }
  }
}
</style>