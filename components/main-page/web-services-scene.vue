<template>
  <div class="web-scene">
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
        title: this.$t("mainPage.ourServices.webServices.title"),
        description: this.$t("mainPage.ourServices.webServices.description"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.web-scene {
  width: 100%;
  height: 100vh;
  .about-card {
    margin-top: 35vh;
    position: absolute;
    right: 0;
  }
}
</style>