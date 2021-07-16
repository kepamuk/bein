<template>
  <div class="beModal text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('deleteSuccessfullyWallet')">
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
          Wallet "name" successfully deleted!
        </h2>
        <p class="beModal__text">
          Your wallet has been created and added to " My Wallets". You can get detailed information on transactions by
          clicking on the wallet card.
        </p>
      </div>
      <div class="beModal__footer">
        <beButton
          type="button"
          title="Done"
          class="confirm_button"
          :shadow="true"
        ></beButton>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
  export default {
    methods: {

    },
  };
</script>
<style lang="scss" scoped>
  .beModal__text {
    color: rgba(11, 17, 26, .5);
  }
</style>
