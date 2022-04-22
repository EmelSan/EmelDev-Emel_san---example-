<template>
  <div class="layout-header">
    <div class="container">
      <div class="logo">
        <img
          src="~/static/images/logo.png"
          alt="emel-san digital agency logo"
        />
      </div>
      <div class="buttons">
        <div class="contacts">
          <ContactButton />
        </div>
        <div class="language-selector">
          <LangButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ContactButton = () => import("./contact-button.vue");
import LangButton from "./lang-button.vue";

export default {
  components: {
    ContactButton,
    LangButton,
  },
};
</script>

<style lang="scss" scoped>
.layout-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  padding-top: 40px;
  padding-bottom: 10px;
  @include max($tablets) {
    padding-top: 20px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    @include max($tablets) {
      padding: 0 24px;
    }
    @include max($small-phones) {
      padding: 0 8px;
    }
    .logo {
      width: 110px;
      height: 81px;
      @include max($tablets) {
        width: 86px;
        height: 59px;
      }
      img {
        user-select: none;
        height: 100%;
      }
    }
    .buttons {
      display: flex;
      @include max($small-phones) {
        flex-direction: column-reverse;
      }
    }
  }
}
</style>