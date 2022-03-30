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
        title: this.$t("mainPage.ourServices.uiUxDesign.title"),
        description: this.$t("mainPage.ourServices.uiUxDesign.description"),
      },
    };
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
}
</style>