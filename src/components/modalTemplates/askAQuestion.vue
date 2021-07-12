<template>
  <div class="beModal beModal_step text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-ask-question')">
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
        <h2 class="popup-ask__title title">
          {{ "Ask a question" }}
        </h2>
        <beInput class="full-width mb15" placeholder="Your name"></beInput>
        <beInput class="full-width mb15" placeholder="E-mail"></beInput>
        <beInput class="full-width mb15" placeholder="Phone number"></beInput>
        <beTextarea class="full-width mb15" placeholder="E-mail"></beTextarea>
        <beButton
          class="login-popup__btn"
          type="button"
          title="Send"
          :shadow="true"
          @click="sendCode"
        ></beButton>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
export default {
  methods: {
    sendCode() {
      this.$modal.hide("modal-ask-question");
    }
  },
};
</script>
