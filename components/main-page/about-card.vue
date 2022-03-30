<template>
  <div class="about-card-wrapper">
    <h1 class="first-link-color--text card-text">
      {{ cardInfo.title }}
    </h1>
    <p class="card-text mt-6">{{ cardInfo.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.about-card-wrapper {
  width: 470px;
  .card-text {
    font-size: 18px;
    font-weight: 400 !important;
    color: $first-text-color;
  }
}
</style>