<template>
  <v-card dark outlined color="#141414" class="contacts-card">
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
      <a
        class="contact-item"
        :href="'tel:' + $t('contacts.contactsMain.mobilePhone')"
      >
        <span class="item-title first-text-color--text">
          {{ $t("contacts.contactsMain.mobilePhoneTitle") }}
        </span>
        <span class="item-description second-text-color--text">
          {{ $t("contacts.contactsMain.mobilePhone") }}
        </span>
      </a>
      <a
        class="contact-item"
        :href="'tel:' + $t('contacts.contactsMain.phone')"
      >
        <span class="item-title first-text-color--text">
          {{ $t("contacts.contactsMain.phoneTitle") }}
        </span>
        <span class="item-description second-text-color--text">
          {{ $t("contacts.contactsMain.phone") }}
        </span>
      </a>

      <div class="contact-item">
        <span class="item-title first-text-color--text">
          {{ $t("contacts.contactsMain.adressTitle") }}
        </span>
        <span class="item-description second-text-color--text">
          {{ $t("contacts.contactsMain.adress") }}
        </span>
      </div>
      <a
        class="contact-item"
        :href="'mailto:' + $t('contacts.contactsMain.mail')"
      >
        <span class="item-title first-text-color--text">
          {{ $t("contacts.contactsMain.mailTitle") }}
        </span>
        <span class="item-description second-text-color--text">
          {{ $t("contacts.contactsMain.mail") }}
        </span>
      </a>
    </div>

    <!-- <div class="social-info">
      <h1 class="social-title second-link-color--text">
        {{ $t("contacts.socials.title") }}
      </h1>
      <div class="social-item" v-for="(item, index) in socialInfo" :key="index">
        <span class="item-title first-text-color--text">{{ item.title }}</span>
        <span class="item-description second-text-color--text">{{
          item.description
        }}</span>
      </div>
    </div> -->
  </v-card>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts-card {
  padding: 24px 30px 30px 30px;
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
      display: flex;
      justify-content: space-between;
      margin: 8px 0;
      text-decoration: none;
      transition: 0.3s;
      padding: 0 0 0 16px;
      &:hover {
        background-color: rgba($color: #ffffff, $alpha: 0.06);
        border-radius: 2px;
        // padding: 2px 18px;
      }
      .item-title {
        display: inline-block !important;
        width: 34% !important;
        font-size: 18px;
      }
      .item-description {
        display: inline-block !important;
        width: 64% !important;
        font-size: 18px;
      }
    }
    @include max($phones) {
      margin-top: 30px;
      padding: 0;
      .contacts-title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .contact-item {
        flex-direction: column;
        .item-title {
          font-size: 16px;
          width: 100% !important;
        }
        .item-description {
          font-size: 16px;
          width: 100% !important;
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