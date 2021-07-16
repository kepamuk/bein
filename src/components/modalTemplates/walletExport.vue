<template>
  <div class="beModal">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('walletExport')">
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
      <div class="beModal__body text-center">
        <h2 class="beModal__title">Wallet Export</h2>
        <beInput
          class="xrp_address mb15"
          placeholder=""
          :transparent="false"
        >
          <i class="icon-eye" slot="right"></i>
        </beInput>
        <beInput
          class="xrp_address mb15"
          placeholder="Repeat, please"
          :transparent="false"
        >
          <i class="icon-closed-eye" slot="right"></i>
        </beInput>
        <div class="beModal__alert">
          <img src="/images/wallet/errorAlert.svg" alt="">
          <div class="beModal__alert-text">
            <p>ВНИМАНИЕ: ВСЕ ваши личные ключи секретны.</p>

            <p>Раскрытие только личного ключа может скомпрометировать весь каш кошелёк!</p>

            <p>В частности, НЕ ИСПОЛЬЗУЙТЕ службы третьих сторон, которые предлагают “получить личный ключ”</p>
          </div>
        </div>
      </div>
      <div class="beModal__footer text-center">
        <beButton
          type="button"
          title="Continue"
          class="confirm_button"
          :shadow="true"
        ></beButton>
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
  .beModal__alert {
    background: rgba(255, 90, 107, 0.2);
    border: 1px solid #FF5A6B;
    border-radius: 5px;
    display: flex;
    align-items: start;
    padding: 16px;
    margin: 24px 0 20px 0;

    &-text {
      color: #FF5A6B;
      font-size: 16px;
      text-align: left;
      margin-left: 10px;

      p {
        margin-bottom: 10px;
      }

      p:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
