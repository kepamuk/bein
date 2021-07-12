<template>
  <div class="beModal beModal_step text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-register')">
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
        <h2 class="create-account__title title">
          {{ "Creating an Account" }}
        </h2>
        <beInput
          class="full-width"
          placeholder="Name or nickname"
          sublabel="Name is used to refer to your personal account and mail messages"
        ></beInput>
        <div class="create-account__input mb30" style="width: 100%; margin: 0">
          <span
            >Name is used to refer to your personal account and mail
            messages</span
          >
        </div>
        <div class="row mb20">
          <div class="col-6">
            <beInput class="full-width" placeholder="E-mail"></beInput>
            <div class="create-account__input">
              <span
                >A code to confirm registration will be sent to the mail.</span
              >
            </div>
          </div>
          <div class="col-6">
            <beInput class="full-width" placeholder="Phone number"></beInput>
            <div class="create-account__input">
              <span>Add your actual phone number</span>
            </div>
          </div>
        </div>
        <div class="row mb20">
          <div class="col-6">
            <beInput
              :type="isPasswordShown ? 'text' : 'password'"
              class="full-width"
              placeholder="Password"
            >
              <i
                :class="isPasswordShown ? 'icon-eye' : 'icon-closed-eye'"
                slot="right"
                @click="isPasswordShown = !isPasswordShown"
              ></i>
            </beInput>
            <div class="create-account__input">
              <span
                >We recommend using Latin letters, numbers and special
                characters.</span
              >
            </div>
          </div>
          <div class="col-6">
            <beInput
              :type="isPasswordRepeatShown ? 'text' : 'password'"
              class="full-width"
              placeholder="Repeat password"
            >
              <i
                :class="isPasswordRepeatShown ? 'icon-eye' : 'icon-closed-eye'"
                slot="right"
                @click="isPasswordRepeatShown = !isPasswordRepeatShown"
              ></i>
            </beInput>
            <div class="create-account__input">
              <span>Check that you are not mistaken.</span>
            </div>
          </div>
        </div>
        <div class="create-account__checkbox">
          <input type="checkbox" class="checkbox" id="checkbox" />
          <label for="checkbox"
            >I agree with the
            <a href="#" @click="changeTerms" class="js-btn-popup-text link-underline">terms of service</a></label
          >
        </div>
        <beButton
          class="create-account__btn"
          type="button"
          title="Register"
          :shadow="true"
          @click="sendCode"
        ></beButton>
        <div class="create-account__login mb15">
          <span>Already have an account?</span>
          <a
            href="#"
            @click="changeCreate"
            class="js-btn-register-popup link-underline"
            >Sign in!</a
          >
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
      isPasswordRepeatShown: false,
    };
  },
  methods: {
    sendCode() {
      this.$modal.hide("modal-register");
      this.$modal.show("modal-notification");
    },
    changeCreate() {
      this.$modal.hide("modal-register");
      this.$modal.show("modal-login");
    },
    changeTerms() {
      this.$modal.hide("modal-register");
      this.$modal.show("modal-terms");
    },
  },
};
</script>
<style lang="scss">
.create-account__input {
  width: 100%;
  margin: 0;
  span {
    text-align: left;
  }
}
</style>
