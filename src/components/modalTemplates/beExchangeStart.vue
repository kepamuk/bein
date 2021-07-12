<template>
  <div class="beModal text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button>
            <i class="icon-minus"></i>
          </button>
          <button @click="$modal.hide('exchange-start')">
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
      <div class="beModal__body exchange_start">
        <h2 class="beModal__title">Starting your exchange</h2>
        <p>
          Your XRP will arrive in up to 30 minutes. You can safely use Exodus or
          start a new exchange while waiting for your XRP deposit.
        </p>
        <div class="exchange_start__container my50">
          <div class="exchange_start__icon">
            <div class="currency__icon xrp">
              <i class="icon-currancy"></i>
            </div>
          </div>
          <div class="exchange_start__arrow">
            <i class="icon-arrow-right-middle"></i>
          </div>
          <div class="exchange_start__icon">
            <div class="currency__icon usdx">
              <img src="/images/client/balance-white.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="">
          <p class="mb5"><small>You will receive $ 47.59</small></p>
          <h2 class="text--purple">+ 47.477351 BIXRP</h2>
        </div>
      </div>
      <div class="beModal__footer"></div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$modal.hide("exchange-start");
      this.$modal.show("exchange-done");
    }, 3000);
  },
};
</script>
<style lang="scss" scoped>
.exchange_start {
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 1px dashed #0b111a;
  }
  &__arrow {
    margin: 0 30px;
  }
}
.currency__icon {
  width: 120px;
  flex: 0 0 120px;
  height: 120px;
  font-size: 52px;
  box-shadow: 5px 5px 20px rgba(23, 25, 31, 0.15);
  animation: icon-pulse 1s linear infinite;
  &.usdx {
    animation-delay: 0.3s;
  }
  img {
    display: block;
    width: 100%;
    max-width: 73px;
  }
}
@keyframes icon-pulse {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  75% {
    transform: scale(0.97);
  }
  to {
    transform: scale(1);
  }
}
.beModal__close {
  right: 10px;
}
</style>
