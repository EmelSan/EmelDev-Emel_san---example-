<template>
  <v-card dark outlined color="#000000" class="contacts-card">
    <v-card-actions class="contacts-card-buttons">
      <v-btn
        color="button-green-color"
        fab
        height="16"
        width="16"
        @click="closePopup"
        class="mr-2"
      ></v-btn>
      <v-btn
        color="button-yellow-color"
        fab
        height="16"
        width="16"
        @click="closePopup"
        class="mr-2"
      ></v-btn>
      <v-btn
        color="button-red-color"
        fab
        height="16"
        width="16"
        @click="closePopup"
      ></v-btn>
    </v-card-actions>

    <div class="contacts-info">
      <h1 class="contacts-title first-link-color--text">
        {{ $t("contacts.contactsMain.title") }}
      </h1>
      <div
        class="contact-item"
        v-for="(item, index) in contactsInfo"
        :key="index"
      >
        <span class="item-title first-text-color--text">{{ item.title }}</span>
        <span class="item-description second-text-color--text">{{
          item.description
        }}</span>
      </div>
    </div>

    <div class="social-info">
      <h1 class="social-title second-link-color--text">
        {{ $t("contacts.socials.title") }}
      </h1>
      <div class="social-item" v-for="(item, index) in socialInfo" :key="index">
        <span class="item-title first-text-color--text">{{ item.title }}</span>
        <span class="item-description second-text-color--text">{{
          item.description
        }}</span>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      contactsInfo: [
        {
          title: this.$t("contacts.contactsMain.phoneTitle"),
          description: this.$t("contacts.contactsMain.phone"),
        },
        {
          title: this.$t("contacts.contactsMain.mobilePhoneTitle"),
          description: this.$t("contacts.contactsMain.mobilePhone"),
        },
        {
          title: this.$t("contacts.contactsMain.adressTitle"),
          description: this.$t("contacts.contactsMain.adress"),
        },
        {
          title: this.$t("contacts.contactsMain.mailTitle"),
          description: this.$t("contacts.contactsMain.mail"),
        },
      ],
      socialInfo: [
        {
          title: this.$t("contacts.socials.telegram"),
          description: this.$t("contacts.socials.telegramAdress"),
        },
        {
          title: this.$t("contacts.socials.instagram"),
          description: this.$t("contacts.socials.instagramAdress"),
        },
      ],
    };
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts-card {
  padding: 24px 40px 40px 40px;
  .contacts-card-buttons {
    padding: 0 !important;
    display: flex;
    justify-content: flex-end;
  }
  .contacts-info {
    margin-top: 40px;
    .contacts-title {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .contact-item {
      cursor: pointer;
      .item-title {
        display: inline-block !important;
        width: 100px !important;
        font-size: 18px;
      }
      .item-description {
        display: inline-block !important;
        padding-left: 20px;
        font-size: 18px;
      }
    }
    @include max($phones) {
      margin-top: 30px;
      .contacts-title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .contact-item {
        .item-title {
          width: 80px !important;
          font-size: 16px;
        }
        .item-description {
          font-size: 16px;
          padding-left: 0;
        }
      }
    }
    @include max($small-phones) {
      .contacts-title {
        font-size: 14px;
      }
      .contact-item {
        .item-title {
          font-size: 14px;
        }
        .item-description {
          font-size: 14px;
        }
      }
    }
  }
  .social-info {
    margin-top: 40px;
    .social-title {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .social-item {
      cursor: pointer;
      .item-title {
        display: inline-block !important;
        width: 100px !important;
        font-size: 18px;
      }
      .item-description {
        display: inline-block !important;
        padding-left: 20px;
        font-size: 18px;
      }
    }
    @include max($phones) {
      margin-top: 30px;
      .social-title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .social-item {
        .item-title {
          width: 80px !important;
          font-size: 16px;
        }
        .item-description {
          font-size: 16px;
          padding-left: 0;
        }
      }
    }
    @include max($small-phones) {
      .social-title {
        font-size: 14px;
      }
      .social-item {
        .item-title {
          font-size: 14px;
        }
        .item-description {
          font-size: 14px;
        }
      }
    }
  }
  @include max($phones) {
    padding: 12px;
  }
}
</style>