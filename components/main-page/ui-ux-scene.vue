<template>
  <div class="ui-ux-scene">
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
        title: this.$t("mainPage.ourServices.uiUxDesign.title"),
        description: this.$t("mainPage.ourServices.uiUxDesign.description"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.ui-ux-scene {
  width: 100%;
  height: 100vh;
  .about-card {
    margin-top: 35vh;
  }
  @include max($phones) {
    height: 100vh;
    .about-card {
      margin-top: 25vh;
    }
  }
}
</style>