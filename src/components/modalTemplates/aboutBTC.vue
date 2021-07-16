<template>
  <div class="beModal text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('aboutBTC')">
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
      <div class="beModal__body aboutBTC">
        <div class="aboutBTC__title">
          <img src="/images/wallet/BTCCHART.svg" alt="">
          <span class="aboutBTC__title-text">About BTC</span>
        </div>
        <p class="aboutBTC__text">There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc.</p>
      <ul class="btcList">
        <li class="btcList__list">
          <img src="/images/wallet/aboutBTCicon1.svg" alt="">
          <span class="btcList__list-text">Market Cap</span>
          <span class="btcList__list-money">$651,058,240,905</span>
        </li>
        <li class="btcList__list">
          <img src="/images/wallet/aboutBTCicon2.svg" alt="">
          <span class="btcList__list-text">Volume (24h)</span>
          <span class="btcList__list-money">$32.48 B</span>
        </li>
        <li class="btcList__list">
          <img src="/images/wallet/aboutBTCicon3.svg" alt="">
          <span class="btcList__list-text">Circulating Supply</span>
          <span class="btcList__list-money">18,745,237 BTC</span>
        </li>
      </ul>
      <ul class="btcList">
        <li class="btcList__list">
          <img src="/images/wallet/aboutBTCicon4.svg" alt="">
          <span class="btcList__list-text">Website</span>
          <span class="btcList__list-link">ethereum.org</span>
        </li>
        <li class="btcList__list">
          <img src="/images/wallet/aboutBTCicon5.svg" alt="">
          <span class="btcList__list-text">Explorer</span>
          <span class="btcList__list-link">etherscan.io</span>
        </li>
      </ul>
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
  .aboutBTC {
    text-align: left;

    &__title {
      display: flex;
      align-items: center;

      &-text {
        margin-left: 12px;
        color: #0B111A;
        font-weight: bold;
        font-size: 22px;
      }
    }

    &__text {
      color: #0B111A;
      font-weight: 500;
      font-size: 16px;
      margin: 24px 0;
    }

    .btcList {
      margin-bottom: 20px;

      &__list {
        display: flex;
        border-bottom: rgba(105, 105, 105, .15) solid 1px;
        padding: 6px 0;

        &-text {
          margin-left: 4px;
          color: #0B111A;
          font-weight: bold;
          font-size: 16px;
        }

        &-money {
          margin-left: auto;
          color: rgba(11, 17, 26, .8);
          font-size: 16px;
        }

        &-link {
          font-size: 16px;
          color: #2864FF;
          margin-left: auto;
        }
      }
    }
  }
</style>
