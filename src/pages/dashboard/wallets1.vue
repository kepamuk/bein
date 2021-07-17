<template>
  <div class="wallets">
    <div class="container container__wallets">
      <div class="row">
        <div class="col-8 fluid">
          <button
            @click="openOutputModal()"
          >
            aboutBTC
          </button>
          <button
            @click="walletExportModal()"
          >
            walletExport
          </button>
          <button
            @click="walletExportModal1()"
          >
            walletExport1
          </button>
          <button
            @click="downloadAutomatModal()"
          >
            downloadAutomat
          </button>
          <button
            @click="deleteWalletModal()"
          >
            deleteWallet
          </button>
          <button
            @click="deleteSuccessfullyWalletModal()"
          >
            deleteSuccessfullyWallet
          </button>
          <button
            @click="deleteSuccessfullyWallet1Modal()"
          >
            deleteSuccessfullyWallet1
          </button>
          <div class="bitcoinWallet">
            <div class="more_links text-center">
              <div class="more_links__title">
                <i class="icon-more"/>
              </div>
              <div class="more_links__dropdown">
                <div class="more_links__item">
                  <div class="nav__link">
                    <span class="nav_icon">
                      <img src="/images/wallet/export.svg" alt="">
                    </span>
                    <span class="more_links__text">Export Wallet</span>
                  </div>
                  <div class="nav__link">
                    <span class="nav_icon">
                      <img src="/images/wallet/delete.svg" alt="">
                    </span>
                    <span class="more_links__text">Delete Wallet</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bitcoinWallet__bg" />
            <div class="bitcoinInfo">
              <img src="/images/wallet/bitcoin.png" alt="" />
              <div class="money">
                <beSelect
                  class="money__select"
                  :selectArray="sortingList"
                  v-model="selectedSortItem"
                  :transparent="true"
                ></beSelect>
                <div class="btc">
                  <div class="btc__number">
                    <span class="btc__number-int">1 002 8811</span>
                    <span class="btc__number-currency">BTC</span>
                  </div>
                  <div class="btc__refresh">
                    <div class="btc__refresh-bg" />
                  </div>
                </div>
                <div class="money__number">
                  $591 414
                </div>
              </div>
              <div class="bitcoinBtns">
                <div class="bitcoinBtns__button">
                  <img
                    class="bitcoinBtns__button-icon"
                    src="/images/wallet/btn1.svg"
                    alt=""
                  />
                  <div class="bitcoinBtns__button-text">Buy</div>
                </div>
                <div class="bitcoinBtns__button">
                  <img
                    class="bitcoinBtns__button-icon"
                    src="/images/wallet/btn2.svg"
                    alt=""
                  />
                  <div class="bitcoinBtns__button-text">Send</div>
                </div>
                <div class="bitcoinBtns__button">
                  <img
                    class="bitcoinBtns__button-icon"
                    src="/images/wallet/btn3.svg"
                    alt=""
                  />
                  <div class="bitcoinBtns__button-text">Receive</div>
                </div>
              </div>
            </div>
          </div>

          <div class="transactionHistory">
            <div class="transactionHistory__header">
              <span class="transactionHistory__header-title"
                >Transaction history</span
              >
              <div class="filterWrap">
                <div class="filter">
                  <span class="filter__text">Transaction type:</span>
                  <img
                    class="filter__icon"
                    src="/images/wallet/arrows.svg"
                    alt=""
                  />
                  <beSelect
                    class="select__wallet"
                    :selectArray="sortingList"
                    v-model="selectedSortItem"
                    :transparent="true"
                  ></beSelect>
                </div>

                <div class="delimiter" />

                <div class="filter">
                  <span class="filter__text">Time:</span>
                  <img
                    class="filter__icon"
                    src="/images/wallet/clock.svg"
                    alt=""
                  />
                  <beSelect
                    class="select__wallet"
                    :selectArray="sortingList"
                    v-model="selectedSortItem"
                    :transparent="true"
                  ></beSelect>
                </div>
              </div>
            </div>

            <div
              class="transactionHistory__table"
              v-if="history.length === 0"
            >
              <div
                class="item"
                v-for="(item, idx) in history"
                :key="idx"
                :class="[
                  item.status === 'Rejected'
                    ? 'alert'
                    : item.status === 'Approved'
                    ? 'success'
                    : 'inprogress'
                ]"
              >
                <div class="receive">
                  <i slot="icon-left" class="icon-sign-in receive__icon"></i>
                  <div class="receive__text">
                    <span class="receive__text-top">Receive</span>
                    <span class="receive__text-bottom"
                      >Wallet: Wallet Name</span
                    >
                  </div>
                </div>
                <div class="info">
                  <div class="info__text">
                    <span class="info__text-top">+320 XRP</span>
                    <span class="info__text-bottom">29 Jun, 2021</span>
                  </div>
                  <div v-if="item.status === 'Rejected'">
                    <img src="/images/wallet/error.svg" alt=""/>
                  </div>
                  <div v-else-if="item.status === 'Approved'">
                    <img src="/images/wallet/success.svg" alt=""/>
                  </div>
                  <div v-else>
                    <img src="/images/wallet/empty.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="transactionHistory__notFound"
              v-else
            >
              <div class="notFound__content">
                <img src="/images/wallet/notFound.svg" alt="">
                <span class="notFound__content-text">You don't have any transaction yet</span>
                <div class="notFound__content-btn">Buy crypto</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="HODLWrap">
            <div class="HODL">
              <div class="HODL__left">
                <span class="btcNumber"><span>0.000521</span> <small>BTC</small></span>
                <span class="btcText">in HODL</span>
                <div class="dollars">
                  <img src="/images/wallet/holdArrows.svg" alt="">
                  <span>$521.23</span>
                </div>
                <beSelect
                  class="money__select"
                  :selectArray="sortingList"
                  v-model="selectedSortItem"
                  :transparent="true"
                ></beSelect>
                <div class="details">
                  Details
                </div>
              </div>
              <img src="/images/wallet/HODLChart.png" alt="">
            </div>
            <div class="btnBlue">
              HODL
            </div>
          </div>

          <div class="chartBtc">
            <div class="infoChartBtc">
              <img src="/images/wallet/BTCCHART.svg" alt="">
              <div class="infoChartBtc__data">
                <div class="number">
                  <span>$</span>
                  <span>38,123</span>
                </div>
                <div class="currency">BTC/USD</div>
              </div>
            </div>
            <img class="question" src="/images/wallet/question.svg" alt="">
            <img src="/images/wallet/chartBTC.png" alt="">
          </div>

          <ul class="btcFilter">
            <li class="active">1d</li>
            <li>5d</li>
            <li>1 mo</li>
            <li>3 mos</li>
            <li>6 mos</li>
            <li>1 yr</li>
          </ul>
        </div>
      </div>
    </div>
    <modal
      name="aboutBTC"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <aboutBTC></aboutBTC>
    </modal>
    <modal
      name="walletExport"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <walletExport></walletExport>
    </modal>
    <modal
      name="walletExport1"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <walletExport1></walletExport1>
    </modal>
    <modal
      name="downloadAutomat"
      class="create_wallet"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <downloadAutomat></downloadAutomat>
    </modal>
    <modal
      name="deleteWallet"
      class="create_wallet"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <deleteWallet></deleteWallet>
    </modal>
    <modal
      name="deleteSuccessfullyWallet"
      class="create_wallet"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <deleteSuccessfullyWallet></deleteSuccessfullyWallet>
    </modal>
    <modal
      name="deleteSuccessfullyWallet1"
      class="create_wallet"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <deleteSuccessfullyWallet1></deleteSuccessfullyWallet1>
    </modal>
  </div>
</template>
<script>
export default {
  layout: "lClient",
  data() {
    return {
      sortingList: [
        { value: 1, label: "By transaction date" },
        { value: 2, label: "By sum" },
        { value: 3, label: "By wallet" },
        { value: 4, label: "By status" }
      ],
      selectedSortItem: { value: 1, label: "Bitcoin Wallet" },
      history: [
        {
          id: 1,
          date: "20/20/2020",
          status: "Rejected",
          summ: "+320",
          buttonText: "Wallet replenishment",
          currency: 1,
          waletName: "Walet Name"
        },
        {
          id: 2,
          date: "20/20/2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Wallet replenishment",
          currency: 2,
          waletName: "Walet Name"
        },
        {
          id: 3,
          date: "20/20/2020",
          status: "Waiting",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          waletName: "Walet Name"
        },
        {
          id: 4,
          date: "20/20/2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Funds output",
          currency: 2,
          waletName: "Walet Name"
        },
        {
          id: 5,
          date: "20/20/2020",
          status: "Waiting",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          waletName: "Walet Name"
        },
        {
          id: 6,
          date: "20/20/2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          waletName: "Walet Name"
        }
      ]
    };
  },
  methods: {
    openOutputModal() {
      this.$modal.show("aboutBTC");
    },
    walletExportModal() {
      this.$modal.show("walletExport");
    },
    walletExportModal1() {
      this.$modal.show("walletExport1");
    },
    downloadAutomatModal() {
      this.$modal.show("downloadAutomat");
    },
    deleteWalletModal() {
      this.$modal.show("deleteWallet");
    },
    deleteSuccessfullyWalletModal() {
      this.$modal.show("deleteSuccessfullyWallet");
    },
    deleteSuccessfullyWallet1Modal() {
      this.$modal.show("deleteSuccessfullyWallet1");
    }
  },
  mounted() {

  }
};
</script>
