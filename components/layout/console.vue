<template>
  <label for="input">
    <div class="console-wrapper">
      <div class="console-field" ref="enteredCommands">
        <p
          class="entered-command"
          v-for="(command, index) in enteredCommands"
          :key="index"
        >
          {{ command }}
        </p>
      </div>
      <div class="console-input">
        <span class="blinking-symbol">$></span>
        <form
          ref="consoleForm"
          @submit.prevent="submitCommand"
          autocomplete="off"
        >
          <input ref="consoleInput" type="text" class="input" id="input" />
        </form>
      </div>
    </div>
  </label>
</template>

<script>
import { commands } from "./commands";
export default {
  data() {
    return {
      consoleInput: this.$refs.consoleInput,
      enteredCommands: [`${this.$t("mainPage.console.title")}`],
      helpCommand: [
        `-> ${this.$t("mainPage.console.help.openContacts")}`,
        `-> ${this.$t("mainPage.console.help.changeLang")}`,
        `-> ${this.$t("mainPage.console.help.clear")}`,
        `-> ${this.$t("mainPage.console.help.close")}`,
        `-> ${this.$t("mainPage.console.help.other")}`,
      ],
    };
  },
  methods: {
    submitCommand(event) {
      let command = this.$refs["consoleInput"].value;
      if (command === commands.changeLang) {
        let [currentLang] = this.$i18n.loadedLanguages;
        let [newLang] = this.$i18n.localeCodes.filter(
          (lang) => lang !== currentLang
        );
        this.$i18n.setLocale(newLang);
        window.location.reload();
      } else if (command === commands.openContacts) {
        this.$store.commit("contacts/changeState", true);
        this.enteredCommands.push("* " + command);
      } else if (command === commands.help) {
        this.enteredCommands.push("* " + command);
        for (let i = 0; i < this.helpCommand.length + 1; i++) {
          this.enteredCommands.push(this.helpCommand[i]);
        }
      } else if (command === commands.clear) {
        this.enteredCommands = [];
      } else if (command === commands.close) {
        this.enteredCommands.push(
          "* " + `${this.$t("mainPage.console.close")}`
        );
        setTimeout(() => {
          window.close();
        }, 2000);
      } else {
        this.enteredCommands.push(
          "* " + command + ` : ${this.$t("mainPage.console.unknown")}`
        );
      }
      setTimeout(() => {
        this.$refs.enteredCommands.scrollTo(
          0,
          this.$refs.enteredCommands.scrollHeight
        );
      }, 300);
      this.$refs.consoleInput.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.console-wrapper {
  z-index: 9999;
  padding: 16px 16px;
  position: fixed;
  bottom: 4%;
  right: 80px;
  width: 500px;
  height: 200px;
  background-color: rgba($color: #000000, $alpha: 0.4);
  border-radius: 10px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .console-field {
    overflow-y: scroll;
    height: 84%;
    .entered-command {
      color: $first-text-color;
      font-size: 14px;
      margin: 0;
    }
  }
  .console-input {
    position: fixed;
    bottom: 16px;
    left: 16px;
    color: $first-link-color;
    width: 100%;
    display: flex;
    form {
      width: 100%;
      input {
        width: 90%;
      }
    }
    ::-webkit-input-placeholder {
      color: $first-text-color;
    }
    ::-moz-placeholder {
      color: $first-text-color;
    } /* Firefox 19+ */
    :-moz-placeholder {
      color: $first-text-color;
    } /* Firefox 18- */
    :-ms-input-placeholder {
      color: $first-text-color;
    }
    .blinking-symbol {
      animation: blink 1.4s linear infinite;
    }
    @keyframes blink {
      50% {
        opacity: 1;
      }
      51% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
    .input {
      padding-left: 15px;
      outline: none;
      color: $first-link-color;
    }
  }
  @include max($desktops) {
    right: 40px;
    height: 180px;
    width: 420px;
  }
  @include max($tablets) {
    width: 50%;
    height: 160px;
    right: 24px;
    bottom: 18px;
    .console-field {
      .entered-command {
        font-size: 12px;
      }
    }
  }
  @include max($phones) {
    width: auto;
    height: 180px;
    right: 16px;
    left: 16px;
    .console-field {
      .entered-command {
        font-size: 12px;
      }
    }
  }
}
</style>