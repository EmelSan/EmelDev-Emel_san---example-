<template>
  <div
    class="hello-wrapper"
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="2000"
  >
    <p
      ref="helloWrp"
      class="hello-title text"
      v-html="$t('mainPage.helloText.title')"
    ></p>
    <!-- <h1
      class="hello-description text"
      v-html="$t('mainPage.helloText.description')"
    ></h1> -->
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      window.addEventListener("scroll", () => {
        let positionFromTop = this.$refs.helloWrp.getBoundingClientRect().y;
        if (positionFromTop < 140) {
          this.$refs.helloWrp.classList.add("hide");
        } else if (positionFromTop > 140) {
          this.$refs.helloWrp.classList.remove("hide");
        }
      });
    }, 300);
  },
};
</script>

<style lang="scss">
.hello-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.2s;
  .text {
    cursor: default;
    color: $first-text-color;
    span {
      color: $second-link-color;
    }
  }
  .hello-title {
    font-weight: bold;
    font-size: 36px;
    width: 40%;
  }
  .hello-description {
    font-weight: bold;
    font-size: 36px;
    width: 40%;
  }
  @include max($large-desktops) {
    .hello-title {
      width: 55%;
    }
    .hello-description {
      width: 55%;
    }
  }
  @include max($tablets) {
    .hello-title {
      width: 70%;
      font-size: 30px;
    }
    .hello-description {
      width: 70%;
      font-size: 30px;
    }
  }
  @include max($phones) {
    .hello-title {
      width: 90%;
      font-size: 28px;
    }
    .hello-description {
      width: 90%;
      font-size: 28px;
      margin-bottom: 100px;
    }
  }
  @include max($small-phones) {
    .hello-title {
      width: 94%;
      font-size: 24px;
    }
    .hello-description {
      width: 94%;
      font-size: 24px;
      margin-bottom: 100px;
    }
  }
}
.hide {
  transition: 0.2s !important;
  opacity: 0 !important;
}
</style>