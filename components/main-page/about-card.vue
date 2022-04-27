<template>
  <div
    class="about-card-wrapper"
    data-aos="zoom-in-up"
    data-aos-delay="100"
    data-aos-duration="800"
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
  height: auto !important;
  transition: 0.1s;
  opacity: 0;
  cursor: default;
  .card-text {
    font-size: 18px;
    font-weight: 400 !important;
    color: $first-text-color;
  }
  @include max($phones) {
    width: 100%;
    padding: 4px 12px;
  }
  @include max($small-phones) {
    width: 100%;
    padding: 0 10px;
    // margin-bottom: 10px;
    .card-text {
      font-size: 14px;
      height: auto;
    }
  }
}
.hide {
  transition: 0.4s !important;
  opacity: 0 !important;
}
</style>