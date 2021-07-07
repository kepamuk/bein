<template>
  <div class="beModal text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="closeModal">
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
        <p class="beModal__icon"><i class="icon-checked"></i></p>
        <h2 class="beModal__title">
          {{ successTitle || "Your transaction is being processed" }}
        </h2>
        <p class="beModal__text">
          {{ successText || "You can monitor the status in" }}
          <router-link
            :to="{ name: 'Wallets' }"
            class="link"
            v-if="!successText"
          >
            Transaction History
          </router-link>
        </p>
      </div>
      <div class="beModal__footer">
        <beButton
          type="button"
          :title="buttonText || 'OK'"
          class="confirm_button"
          :shadow="true"
          @click="closeModal"
        ></beButton>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
export default {
  props: ["successTitle", "successText", "buttonText"],
  methods: {
    closeModal() {
      this.$modal.hide("modal-confirm");
      this.$modal.hideAll();
      this.$emit("onModalClose");
    },
  },
};
</script>
