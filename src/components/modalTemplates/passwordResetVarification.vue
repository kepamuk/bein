<template>
  <div class="beModal beModal_step text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-reset-password-varification')">
            <i class="icon-close"></i>
          </button>
        </div>
      </div>
    </div>
    <vueCustomScrollbar
      class="modal_scroll rail__normal"
      :settings="{
        wheelPropagation: false,
        suppressScrollX: true,
      }"
    >
      <div class="beModal__body">
        <h2 class="beModal__title">{{ "Password reset" }}</h2>
        <div class="mb30">
          <beInput
            :type="isResetShown ? 'text' : 'password'"
            class="full-width mb15"
            placeholder="Recovery key"
            v-model="varification.recoveryKey"
          >
            <!-- <i
              :class="isResetShown ? 'icon-closed-eye' : 'icon-eye'"
              slot="right"
              @click="isResetShown = !isResetShown"
            ></i> -->
          </beInput>
          <beInput
            :type="isPasswordShown ? 'text' : 'password'"
            class="full-width mb15"
            placeholder="New password please"
          >
            <i
              :class="isPasswordShown ? 'icon-eye' : 'icon-closed-eye'"
              slot="right"
              @click="isPasswordShown = !isPasswordShown"
            ></i>
          </beInput>
          <beInput
            :type="isRepeatShown ? 'text' : 'password'"
            class="full-width"
            placeholder="Once again, please."
          >
            <i
              :class="isRepeatShown ? 'icon-eye' : 'icon-closed-eye'"
              slot="right"
              @click="isRepeatShown = !isRepeatShown"
            ></i>
          </beInput>
        </div>
        <beButton
          type="button"
          title="Reset"
          :shadow="true"
          @click="$modal.hide('modal-reset-password-varification')"
        ></beButton>
        <button
          @click="BackModals"
          v-if="login"
          class="js-btn-login-popup popup-recovery__sign"
        >
          <svg>
            <use xlink:href="/images/icons/icons.svg#arrow-left3"></use>
          </svg>
          <span>Back to Sign in</span>
        </button>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
export default {
  props: {
    login: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isResetShown: false,
      isPasswordShown: false,
      isRepeatShown: false,
      varification: {
        recoveryKey: null,
        password: null,
        passwordRepeat: null,
      },
    };
  },
  methods: {
    showInput() {},
    BackModals() {
      this.$modal.hide("modal-reset-password-varification");
      this.$modal.show("modal-login");
    },
  },
};
</script>
<style lang="scss" scoped>
.popup-recovery__sign {
  width: 100%;
}
</style>
