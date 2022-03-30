<template>
  <div>
    <v-btn color="transparent" depressed plain @click="changeLang">
      <span class="lang">{{
        `/${$t("header.lang")} = ${currentLang.iso}`
      }}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    currentLang() {
      return this.$i18n.locales.find(
        (lang) => lang.code === this.$i18n.loadedLanguages[0]
      );
    },
  },
  methods: {
    changeLang() {
      if (this.$i18n.locale === "en-EN") {
        this.$i18n.setLocale("ru-RU");
        window.location.reload();
      } else {
        this.$i18n.setLocale("en-EN");
        window.location.reload();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lang {
  color: $first-link-color;
  cursor: pointer;
  user-select: none;
  text-transform: lowercase !important;
}
</style>