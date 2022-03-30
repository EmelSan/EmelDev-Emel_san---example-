<template>
  <div>
    <v-dialog v-model="contactPopup" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="transparent" depressed plain>
          <span class="contact-button">{{
            `/${$t("header.contact")} = ${contactPopup}`
          }}</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> </v-card-title>
        <v-card-text> </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="contactPopup = false"> </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactPopup: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-button {
  color: $second-link-color;
  cursor: pointer;
  user-select: none;
  text-transform: lowercase !important;
}
</style>