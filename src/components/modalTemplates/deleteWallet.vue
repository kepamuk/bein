<template>
  <div class="beModal">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('deleteWallet')">
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
        <h2 class="beModal__title">Delete wallet</h2>

        <div class="paper">
          <div class="paper__title">Account password</div>
          <beInput
            class="xrp_address mb15"
            placeholder="Enter password"
            :transparent="true"
          >
            <i class="icon-eye" slot="right"></i>
          </beInput>
          <beInput
            class="xrp_address mb15"
            placeholder="Repeat, please"
            :transparent="true"
          >
            <i class="icon-closed-eye" slot="right"></i>
          </beInput>
        </div>
        <div class="paper">
          <div class="paper__title">
            Ваши ХОДЛы этого кошелька будут перенесены на дефолт кошелек такой же валюты
          </div>
          <div class="paper__paragraph">
            <span>Бла бла бла бла бла бла бла бла бла бла</span> <span>НУЖЕН ТЕКСТ</span>
          </div>
        </div>
        <div class="paper">
          <div class="paper__title">
            You have <span>220.20 XRP</span> left on this wallet
          </div>
          <div class="paper__paragraph">
            You can transfer the balance on your wallet to the BIHRP wallet to continue to conveniently use dividends
          </div>
          <hr>
          <beInputCheckbox
            placeholder="Перевести остаток на кошелек BIXRP"
          />
        </div>
      </div>

      <div class="beModal__footer text-center">
        <beButton
          type="button"
          title="Delete"
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
  .paper {
    background: #F6F6F6;
    border-radius: 12px;
    padding: 20px 36px;
    margin-bottom: 12px;

    &__title {
      margin-bottom: 10px;
      color: #0B111A;
      font-weight: bold;
      font-size: 16px;

      > span {
        color: #2C67FF;
      }
    }

    &__paragraph {
      color: rgba(11, 17, 26, 0.5);
      font-size: 16px;

      span:first-child {
        color: rgba(11, 17, 26, 0.5);
        font-size: 16px;
      }

      span:last-child {
        color: #FF5A6B;
      }
    }
  }

  hr {
    background: rgba(196, 196, 196, .5);
    height: 1px;
    width: 100%;
    border: none;
  }
</style>
