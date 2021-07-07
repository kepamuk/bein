<template>
  <div class="beModal text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('balance-planner')">
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
        <h3>The balance of your wallet is</h3>
        <h2 class="beModal__title text--primary mt15">
          {{ balanceArr[0] }}<small>.{{ balanceArr[1] }}</small>
        </h2>
        <p>Replenish your wallet to make a deposit</p>
      </div>
      <div class="beModal__footer">
        <beButton
          type="button"
          title="Replenish"
          class="confirm_button"
          :shadow="true"
          @click="$router.push({ name: 'Wallets' })"
        ></beButton>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      XRP: {
        balance: 1256.45,
      },
    };
  },
  computed: {
    balanceArr() {
      return this.formatCurency(this.XRP.balance).split(".");
    },
  },
};
</script>
