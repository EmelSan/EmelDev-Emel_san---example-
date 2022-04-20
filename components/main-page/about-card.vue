<template>
  <div
    class="about-card-wrapper"
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="1000"
    ref="abtCrd"
  >
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
  mounted() {
    setTimeout(() => {
      window.addEventListener("scroll", () => {
        let positionFromTop = this.$refs.abtCrd.getBoundingClientRect().y;
        if (positionFromTop < 140) {
          this.$refs.abtCrd.classList.add("hide");
        } else if (positionFromTop > 140) {
          this.$refs.abtCrd.classList.remove("hide");
        }
      });
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.about-card-wrapper {
  width: 470px;
  transition: 0.1s;
  opacity: 0;
  cursor: default;
  .card-text {
    font-size: 18px;
    font-weight: 400 !important;
    color: $first-text-color;
  }
  @include max($small-phones) {
    width: 100%;
    padding: 0 10px;
    .card-text {
      font-size: 14px;
    }
  }
}
.hide {
  transition: 0.4s !important;
  opacity: 0 !important;
}
</style>