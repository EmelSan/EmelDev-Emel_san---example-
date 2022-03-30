<template>
  <div class="layout-header pt-10">
    <div class="container">
      <div class="logo">
        <img src="~/static/images/logo.png" alt="emel-san logo" />
      </div>
      <div class="buttons">
        <div class="contacts mr-10">
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
import ContactButton from "./contact.button.vue";
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
  // background-color: $background-color;
  // color: #1201ff;
  top: 0;
  left: 0;
  z-index: 999;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 110px;
      height: 81px;
      img {
        user-select: none;
        width: 100%;
      }
    }
    .buttons {
      display: flex;
    }
  }
}
</style>