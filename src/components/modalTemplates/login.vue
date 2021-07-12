<template>
  <div class="beModal beModal_step text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-login')">
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
        <h2 class="login-popup__title title">
          {{ "Sign in to your personal cabinet" }}
        </h2>
        <beInput class="full-width mb15" placeholder="E-mail"></beInput>
        <beInput
          :type="isPasswordShown ? 'text' : 'password'"
          class="full-width mb25"
          placeholder="Password"
        >
          <i
            :class="isPasswordShown ? 'icon-eye' : 'icon-closed-eye'"
            slot="right"
            @click="isPasswordShown = !isPasswordShown"
          ></i>
        </beInput>
        <div class="login-popup__forgot-pass">
          <a
            href="#"
            @click="changeModals"
            class="js-btn-popup-recovery link-underline"
            >Forgot password?</a
          >
        </div>
        <beButton
          class="login-popup__btn"
          type="button"
          title="Sign In"
          :shadow="true"
          @click="sendCode"
        ></beButton>
        <div class="login-popup__login-block mb15">
          <span>Don't have an account?</span>
          <a href="#" @click="changeCreate" class="js-btn-register-popup link-underline">Create!</a>
        </div>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPasswordShown: false,
    };
  },
  methods: {
    sendCode() {
      this.$modal.hide("modal-login");
      this.$modal.show("modal-two-factor-auth");
    },
    changeModals() {
      this.$modal.hide("modal-login");
      this.$modal.show("modal-reset-password");
    },
    changeCreate() {
      this.$modal.hide("modal-login");
      this.$modal.show("modal-register");
    },
  },
};
</script>
