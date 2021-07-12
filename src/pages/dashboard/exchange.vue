<template>
  <div class="exchange">
    <button class="go-back" @click.prevent="$router.go(-1)" type="button">
      <i class="icon-arrow-left-middle"></i>
    </button>
    <h1 class="page__title">
      <i class="page__title_icon icon-dollar-bitcoin"></i>
      Exchange
    </h1>
    <div class="card card--white pb20">
      <h2 class="mb30">Exchange</h2>
      <div class="exchange_cards" :class="{ reversed: reverse }">
        <div class="exchange_cards__item exchange_card__xrp">
          <div class="row-flex align-items-center card card--gradient">
            <div class="exchange_cards__icon">
              <i class="icon-currancy"></i>
            </div>
            <div class="exchange_cards__info">
              <beSelect
                class="wallet__select mb5"
                :selectArray="exchangeWalletsXRP"
                v-model="exchangeWalletSelectedXRP"
                :transparent="true"
              ></beSelect>
              <p>
                {{ selectedWalletAmountXRP }}
                <span class="text--white50"
                  >| ${{ selectedWalletXRPUSDAmount }} USD</span
                >
              </p>
            </div>
          </div>
          <div class="mt15" style="display:flex">
            <beInputRadio
              class="exchange__radio"
              inputClass="radioGroup"
              name="exchangeRadioXRP"
              :button="true"
              placeholder="MAX"
              value="1"
              v-model="selectedRadioXRP"
            ></beInputRadio>
            <beInputRadio
              class="exchange__radio"
              inputClass="radioGroup"
              name="exchangeRadioXRP"
              :button="true"
              placeholder="Half"
              value="2"
              v-model="selectedRadioXRP"
            ></beInputRadio>
            <beInputRadio
              class="exchange__radio"
              inputClass="radioGroup"
              name="exchangeRadioXRP"
              :button="true"
              placeholder="MIN"
              value="3"
              v-model="selectedRadioXRP"
            ></beInputRadio>
          </div>
          <div class="mt40">
            <beInput
              type="number"
              class="xrp_exchange full-width"
              placeholder="0"
              :transparent="true"
              v-model="XRPExchange"
            >
              <span slot="right">XRP</span>
            </beInput>
            <div class="xrp_to_usd">
              <div class="converted_value">
                {{ xrpToUsd[0] }}<small>.{{ xrpToUsd[1] || "00" }}</small>
              </div>
              <div class="convert_to_currency">USD</div>
            </div>
          </div>
        </div>
        <div class="data_transfer_icon pointer" @click="reverse = !reverse">
          <i class="icon-data-transfer"></i>
        </div>
        <div class="exchange_cards__item exchange_card__usdx">
          <div class="card card--gradient-purple row-flex align-items-center">
            <div class="exchange_cards__icon">
              <img src="/images/client/balance.svg" alt="" />
            </div>
            <div class="exchange_cards__info">
              <p class="mb5">BIXRP Be in coin</p>
              <p>0.00 BIXRP <span class="text--white50">| $0.00 USD</span></p>
            </div>
          </div>
          <div class="mt15" style="display:flex">
            <beInputRadio
              class="exchange__radio"
              inputClass="radioGroup"
              name="exchangeRadioUSDX"
              :button="true"
              placeholder="MAX"
              value="1"
              v-model="selectedRadioUSDX"
            ></beInputRadio>
            <beInputRadio
              class="exchange__radio"
              inputClass="radioGroup"
              name="exchangeRadioUSDX"
              :button="true"
              placeholder="Half"
              value="2"
              v-model="selectedRadioUSDX"
            ></beInputRadio>
            <beInputRadio
              class="exchange__radio"
              inputClass="radioGroup"
              name="exchangeRadioUSDX"
              :button="true"
              placeholder="MIN"
              value="3"
              v-model="selectedRadioUSDX"
            ></beInputRadio>
          </div>
          <div class="mt40">
            <beInput
              type="number"
              class="usdx_exchange full-width"
              placeholder="0"
              :transparent="true"
              v-model="USDXExchange"
            >
              <span slot="right">BIXRP</span>
            </beInput>
            <div class="xrp_to_usd">
              <div class="converted_value">
                {{ usdxToUsd[0] }}<small>.{{ usdxToUsd[1] || "00" }}</small>
              </div>
              <div class="convert_to_currency">USD</div>
            </div>
          </div>
        </div>
      </div>
      <div class="exchange_info row justify-content-center mt30">
        <div class="card card--white col-6 items-half exchange_info__container">
          <div class="exchange_info__item">
            <h5 class="exchange_info__title">You are <br />exchanging</h5>
            <div v-if="!reverse">
              <p class="exchange_info__currency_amount text--primary">
                {{ XRPExchange || 0.0 }} <small>XRP</small>
              </p>
              <p class="exchange_info__currency_amount_usd">
                ${{ xrpToUsd[0] }}<small>.{{ xrpToUsd[1] || "00" }}</small>
              </p>
            </div>
            <div v-else>
              <p class="exchange_info__currency_amount text--purple">
                {{ USDXExchange || 0.0 }} <small>BIXRP</small>
              </p>
              <p class="exchange_info__currency_amount_usd">
                ${{ usdxToUsd[0] }}<small>.{{ usdxToUsd[1] || "00" }}</small>
              </p>
            </div>
          </div>
          <div class="exchange_info__icon">
            <i class="icon-arrow-right-middle"></i>
          </div>
          <div class="exchange_info__item">
            <h5 class="exchange_info__title">You will <br />receive</h5>
            <div v-if="reverse">
              <p class="exchange_info__currency_amount text--primary">
                {{ XRPExchange || 0.0 }} <small>XRP</small>
              </p>
              <p class="exchange_info__currency_amount_usd">
                ${{ xrpToUsd[0] }}<small>.{{ xrpToUsd[1] || "00" }}</small>
              </p>
            </div>
            <div v-else>
              <p class="exchange_info__currency_amount text--purple">
                {{ USDXExchange || 0.0 }} <small>BIXRP</small>
              </p>
              <p class="exchange_info__currency_amount_usd">
                ${{ usdxToUsd[0] }}<small>.{{ usdxToUsd[1] || "00" }}</small>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 text-center">
          <beButton
            title="Exchange"
            @click="$modal.show('exchange-start')"
          ></beButton>
        </div>
        <div class="col-12 row-flex justify-content-between mt50 box_info">
          <p class="text--grey">1 XRP = 1.000123 BIXRP</p>
          <nuxt-link
            to="exchange-history"
            class="more_link text--primary"
            ><span>View history</span> <i class="icon-arrow-right"></i
          ></nuxt-link>
        </div>
      </div>
    </div>
    <modal
      name="exchange-start"
      width="90%"
      :maxWidth="960"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <beExchangeStart></beExchangeStart>
    </modal>
    <modal
      name="exchange-done"
      width="90%"
      :maxWidth="960"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <beExchangeDone></beExchangeDone>
    </modal>
  </div>
</template>
<script>
export default {
  layout: "lClient",
  data() {
    return {
      reverse: false,
      exchangeWalletsXRP: [
        { value: 1, label: "XRP Ripple", amount: "225.15 XRP" },
        { value: 2, label: "XRP Ripple 2", amount: "125.15 XRP" },
        { value: 3, label: "XRP Ripple 3", amount: "1365.15 XRP" },
        { value: 4, label: "XRP Ripple 4", amount: "856.15 XRP" },
      ],
      exchangeWalletSelectedXRP: {
        value: 1,
        label: "XRP Ripple",
        amount: "225.15 XRP",
      },
      selectedRadioXRP: null,
      selectedRadioUSDX: null,
      XRPExchange: 0.0,
      USDXExchange: 0.0,
      coef: 1.000123,
    };
  },
  computed: {
    selectedWalletAmountXRP() {
      return this.exchangeWalletSelectedXRP.amount;
    },
    selectedWalletXRPUSDAmount() {
      let number = this.selectedWalletAmountXRP.split(" ");
      return this.formatCurency(+number[0] * 2);
    },
    selectedWalletAmountUSDX() {
      return this.exchangeWalletSelectedUSDX.amount;
    },
    selectedWalletUSDXUSDAmount() {
      let number = this.selectedWalletAmountUSDX.split(" ");
      return this.formatCurency(+number[0] * 2);
    },
    xrpToUsd() {
      return this.formatCurency(this.XRPExchange * 2).split(".");
    },
    usdxToUsd() {
      return this.formatCurency(this.USDXExchange * 2).split(".");
    },
  },
};
</script>
