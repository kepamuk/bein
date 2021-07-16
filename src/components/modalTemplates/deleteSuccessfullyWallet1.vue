<template>
  <div class="beModal text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('deleteSuccessfullyWallet1')">
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
        <p class="beModal__icon">
          <img src="/images/wallet/deleteWalletCancel.svg" alt="">
        </p>
        <h2 class="beModal__title">
          Wallet "name" successfully deleted!
        </h2>
        <p class="beModal__text">
          Your wallet has been created and added to " My Wallets". You can get detailed information on transactions by clicking on the wallet card.
        </p>
      </div>
      <div class="beModal__footer">
        <beButton
          type="button"
          title="Try again"
          class="confirm_button"
          :shadow="true"
        ></beButton>
        <button class="later_button">Complete later</button>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
  export default {
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .beModal__text {
    color: rgba(11, 17, 26, .5);
  }

  .beModal__icon{
    img{
      margin: 0 auto;
    }
  }

  .beModal__title{
    color: #FF5A6B;
    font-weight: bold;
    font-size: 22px;
  }

  .beModal__title::after{
    background: linear-gradient(90deg, #FF5A6B 0%, rgba(255, 90, 107, 0) 100%);
  }

  .later_button{
    color: rgba(11, 17, 26, .4);
    height: 52px;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }
</style>
