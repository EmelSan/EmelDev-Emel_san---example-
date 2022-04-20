<template>
  <v-dialog
    v-model="contactPopup"
    :width="popupWidth"
    overlay-opacity="0.98"
    dark
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        color="transparent"
        depressed
        plain
        height="30px"
      >
        <span v-if="$device.IS_MOBILE" class="contact-button">{{
          `/${$t("header.contact")}`
        }}</span>
        <span v-else class="contact-button">{{
          `/${$t("header.contact")} = ${contactPopup}`
        }}</span>
      </v-btn>
    </template>
    <ContactsPopupCard @closePopup="contactPopup = false" />
  </v-dialog>
</template>

<script>
import ContactsPopupCard from "./contacts-popup-card.vue";

export default {
  components: {
    ContactsPopupCard,
  },
  data() {
    return {
      contactPopup: false,
    };
  },
  computed: {
    storeWisible() {
      return this.$store.getters["contacts/visible"];
    },
    popupWidth() {
      if (this.$device.IS_MOBILE) {
        return "94%";
      } else {
        return "740px";
      }
    },
  },
  watch: {
    contactPopup(val) {
      if (val) {
        this.$store.commit("contacts/changeState", true);
      } else {
        this.$store.commit("contacts/changeState", false);
      }
    },
    storeWisible(val) {
      if (val) {
        this.contactPopup = true;
      } else {
        this.contactPopup = false;
      }
    },
  },
  methods: {
    closePopup() {
      this.$store.commit("contacts/changeState", false);
    },
  },
};
</script>

<style lang="scss" >
.contact-button {
  color: $second-link-color;
  cursor: pointer;
  user-select: none;
  text-transform: lowercase !important;
}
</style>