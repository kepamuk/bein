<template>
  <div class="home">
    <button
      class="go-back"
      @click.prevent="$store.dispatch('menu/changeMenuState', true)"
      type="button"
    >
      <i class="icon-arrow-left-middle"></i>
    </button>
    <h1 class="page__title">
      <i class="page__title_icon icon-wallet"></i>
      Dashboard
    </h1>
    <div class="home__content row">
      <div class="col-7">
        <div class="balance-block">
          <div class="balance-block__wrapper">
            <img
              src="/images/client/dashboard-info.png"
              alt=""
              class="balance-block__bg"
            />
            <div class="balance-block__info">
              <div class="balance">
                <div class="balance-block__icon">
                  <p class="balance-block__total">$ 12,021</p>
                  <span class="balance-block__total-text">Total balance</span>
                  <svg
                    class="balance__circle"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      class="circle__main"
                      cx="50"
                      cy="50"
                      r="47"
                      stroke="#2898FF"
                      stroke-width="3"
                      stroke-dasharray="300"
                      :stroke-dashoffset="investmentXRPOffset - 290"
                    />
                    <circle
                      class="circle__investment"
                      cx="50"
                      cy="50"
                      r="47"
                      stroke="#F1AF0F"
                      stroke-width="3"
                      stroke-dasharray="300"
                      :stroke-dashoffset="investmentXRPOffset"
                    />
                  </svg>
                  <button class="balance-block__refresh">
                    <i class="icon-refresh"></i>
                  </button>
                </div>
                <div class="balance-summary">
                  <p class="balance-summary__day">
                    +$ 12,021
                    <span>24h Change</span>
                  </p>
                  <p class="balance-summary__highest">
                    $ 28,774 <span>Highest Balance</span>
                  </p>
                  <p class="balance-summary__age">
                    2 Year, 3 month, 30 days <span>Account Age</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="balance-block__actions">
              <beButton title="Buy">
                <i class="icon-plus-outline" slot="icon-left"></i>
              </beButton>
              <beButton
                type="button"
                title="Send"
                :outline="true"
                :white="true"
                @click="openSendModal()"
                ><i class="icon-sign-in" slot="icon-left"></i
              ></beButton>
              <beButton
                type="button"
                title="Receive"
                :outline="false"
                :white="true"
                class=""
                @click="openOutputModal('USDX')"
                ><i class="icon-sign-out" slot="icon-left"></i
              ></beButton>
            </div>
          </div>
        </div>
        <div class="transactions transactions_block transactions_general">
          <div
            class="
              transactions__header
              row-flex
              align-items-center
              justify-content-between
              mb25
              mt25
            "
          >
            <div class="row-flex">
              <div class="block__title">My Wallets</div>
              <div class="wallet-create">
                <button @click="$modal.show('modal-create-wallet')" class="wallet-create__btn" type="button">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      width="22"
                      height="22"
                      rx="11"
                      fill="#0B111A"
                    />
                    <path
                      opacity="0.5"
                      d="M11 8.06665V13.9333M8.06665 11H13.9333"
                      stroke="#0B111A"
                      stroke-width="1.5"
                    /></svg
                  ><span>Сreate wallet</span>
                </button>
              </div>
            </div>
            <div class="wallet__search">
              <i class="icon-search wallet__search-icon"></i>
              <input
                class="wallet__search-input"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div class="transactions__body" v-if="myWallets.length">
            <vue-custom-scrollbar
              :settings="{
                wheelPropagation: false,
              }"
              class="transactions__wrapper"
            >
              <div
                class="card card--white history"
                v-for="(item, idx) in myWallets"
                :key="idx"
                :class="[
                  item.status == 'Rejected'
                    ? 'alert'
                    : item.status == 'Approved'
                    ? 'success'
                    : 'inprogress',
                ]"
              >
                <div class="history__planish_link">
                  <button class="wallet_btn">
                    <img
                      class="wallet_btn__img"
                      :src="`/images/client/${item.icon}.svg`"
                      alt=""
                    />
                    <span class="wallet_btn__text">
                      <span class="wallet_btn__title">{{
                        item.waletText
                      }}</span>
                      <span class="wallet__name"
                        >Wallet: {{ item.waletName }}</span
                      >
                    </span>
                  </button>
                </div>
                <div v-if="item.status === 'Rejected'" class="history__finance">
                  -{{ item.percent }}<small>%</small>
                </div>
                <div v-else class="history__finance">
                  +{{ item.percent }}<small>%</small>
                </div>
                <div v-if="item.status === 'Rejected'" class="history__status">
                  <img src="/images/client/status-rejected.png" alt="" />
                </div>
                <div v-else class="history__status">
                  <img src="/images/client/status-approved.png" alt="" />
                </div>
                <div class="wallet__summary">
                  <div class="wallet_btn">
                    <span class="wallet_btn__text">
                      <span class="wallet_btn__title">{{ item.summ }}</span>
                      <span class="wallet__name">${{ item.dollars }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </vue-custom-scrollbar>
          </div>
          <div class="transactions__body empty" v-else>
            <div class="card card--white text-center">
              <p class="icon"><i class="icon-smile-sad"></i></p>
              <p class="empty__text">You don't have any transactions yet</p>
              <button class="empty__btn btn-grey">Buy crypto</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          col-5
          transactions transactions_inner transactions_block
          card--white
        "
      >
        <div class="transactions__filter">
          <div class="block__title">Transaction history</div>
          <div class="transactions__filter-block">
            <div class="transactions__filter-item">
              <label class="transactions__filter-label">Transaction type</label>
              <beSelect
                :selectArray="sortingList"
                v-model="selectedItem"
                selectPlaceholder="Select"
                class="full-width mb15"
                customIcon="arrows"
              ></beSelect>
            </div>
            <div class="transactions__filter-item">
              <label class="transactions__filter-label">Time</label>
              <beSelect
                :selectArray="sortingTime"
                v-model="selectedItem"
                selectPlaceholder="Select"
                class="full-width mb15"
                customIcon="hours"
              >
                <span slot="customField" @click="openDatepicker('xrp')"
                  >Select date</span
                ></beSelect
              >
            </div>
            <div class="transactions__filter-item">
              <label class="transactions__filter-label">Currency</label>
              <beSelect
                :selectArray="sortingCurrency"
                v-model="selectedItem"
                selectPlaceholder="Select"
                class="full-width mb15"
                customIcon="arrows"
              ></beSelect>
            </div>
          </div>
        </div>
        <div class="transactions__body" v-if="history.length">
          <vue-custom-scrollbar
            :settings="{
              wheelPropagation: false,
            }"
            class="transactions__wrapper"
          >
            <div
              class="history"
              v-for="(item, idx) in history"
              :key="idx"
              :class="[
                item.status == 'Rejected'
                  ? 'alert'
                  : item.status == 'Approved'
                  ? 'success'
                  : 'inprogress',
              ]"
            >
              <div class="history__wrapper">
                <div class="history__planish_link">
                  <button class="wallet_btn" @click="showModalType()">
                    <span v-if="item.buttonText === 'Wallet replenishment'"
                      ><i class="icon-sign-in" slot="icon-left"></i
                    ></span>
                    <span v-else
                      ><i class="icon-sign-out" slot="icon-left"></i
                    ></span>
                    <span class="wallet_btn__text">
                      <span class="wallet_btn__title">Receive</span>
                      <span class="wallet__name"
                        >Wallet: {{ item.waletName }}</span
                      >
                    </span>
                  </button>
                </div>
                <div class="history__finance">
                  {{ item.summ }}
                  <small>{{ item.currency == 1 ? "BIXRP" : "XRP" }}</small>
                  <div class="history__date">{{ item.date }}</div>
                </div>
                <span
                  class="history__status-icon history__status-icon_rejected"
                  v-if="item.status === 'Rejected'"
                >
                  <i class="icon-close"></i>
                </span>
                <span
                  class="history__status-icon history__status-icon_approved"
                  v-else-if="item.status === 'Approved'"
                >
                  <i class="icon-check"></i>
                </span>
                <span class="history__status-icon" v-else>
                  <span></span>
                </span>
                <button
                  class="history__more"
                  :class="{ show: item.itemShow }"
                  @click="item.itemShow = !item.itemShow"
                >
                  <i class="icon-arrow-bottom"></i>
                </button>
              </div>
              <div v-if="item.itemShow" class="history-info">
                <ul class="history-info__lists">
                  <li class="history-info__list">
                    <span class="history-info__name">Transaction ID</span>
                    <p class="history-info__text">
                      <beCopyText
                        class="walet__hash"
                        text="d8cc24355cf45a12949fb5d28d7dk211445a129491419г8аг9афоомфлf..."
                      ></beCopyText>
                    </p>
                  </li>
                  <li class="history-info__list">
                    <span class="history-info__name">To</span>
                    <p class="history-info__text">
                      d8cc24355cf45a12949fb5d28d7dk211445a12949f...
                    </p>
                  </li>
                  <li class="history-info__list">
                    <span class="history-info__name">Fee</span>
                    <p class="history-info__text">0.000024328 BTC</p>
                  </li>
                  <li class="history-info__list">
                    <span class="history-info__name">Date</span>
                    <p class="history-info__text">05/04/2021 6:43 PM</p>
                  </li>
                  <li class="history-info__list">
                    <span class="history-info__name">Now</span>
                    <p class="history-info__text">$ 77.44</p>
                  </li>
                  <li class="history-info__list">
                    <span class="history-info__name">May 4th </span>
                    <p class="history-info__text">$ 115.41</p>
                  </li>
                </ul>
              </div>
            </div>
          </vue-custom-scrollbar>
        </div>
        <div class="transactions__body empty" v-else>
          <div class="card card--white text-center">
            <p class="icon"><i class="icon-smile-sad"></i></p>
            <p class="empty__text">You don't have any transactions yet</p>
            <button class="empty__btn btn-grey">Buy crypto</button>
          </div>
        </div>
      </div>
    </div>
    <modal
      name="modal-create-wallet"
      class="create_wallet"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <createWallet></createWallet>
    </modal>
    <modal
      name="modal-another-wallet"
      class="send_to_walet_modal"
      width="90%"
      :maxWidth="600"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <receiveAnotherWallet></receiveAnotherWallet>
    </modal>
    <modal
      name="modal"
      class="send_to_walet_modal"
      width="90%"
      :maxWidth="600"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <!-- <foundsToWalletXRP v-if="sendXRP == 'XRP'"></foundsToWalletXRP> -->
      <foundsToWalletUSDX :innerWallet="innerWalletOutput"></foundsToWalletUSDX>
    </modal>
    <modal
      name="modal-output"
      class="receive_modal"
      width="90%"
      :maxWidth="600"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <!-- <foundsOutputXRP v-if="outputXRP == 'XRP'"></foundsOutputXRP> -->
      <foundsOutputUSDX :innerWallet="innerWalletOutput"></foundsOutputUSDX>
    </modal>
    <modal
      name="modal-confirm"
      class="transactions_send"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <transactionsSend @onModalClose="closeModalConfirm"></transactionsSend>
    </modal>
    <modal
      name="datepicker"
      width="90%"
      :maxWidth="400"
      height="auto"
      :scrollable="false"
      :adaptive="true"
      class="datepicker-modal"
    >
      <div class="beModal__header">
        <h2 class="date-modal-title">Chose a date</h2>
        <div class="beModal__close">
          <div slot="top-right">
            <button @click="canselDatepicker">
              <i class="icon-close"></i>
            </button>
          </div>
        </div>
      </div>
      <FunctionalCalendar
        class="calendar"
        v-model="getDate"
        :is-date-range="true"
        :isDatePicker="false"
        arrowsPosition="right"
        titlePosition="left"
      ></FunctionalCalendar>
      <div class="beModal__footer">
        <button
          class="btn full-width"
          type="button"
          @click="$modal.hide('datepicker')"
        >
          Confirm
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  layout: "lClient",
  name: "Dashboard",
  data() {
    return {
      sendXRP: null,
      outputXRP: null,
      currentDatepicker: null,
      getDate: {},
      XRP: {
        balance: 12021.23,
        investment: 2256.15,
        profit: 532.23,
      },
      USDX: {
        balance: 9854,
        investment: 3258.15,
        profit: 152.23,
      },
      selectItems: [
        { value: 1, label: "XRP" },
        { value: 2, label: "BIXRP" },
      ],
      selectedItem: null,
      innerWalletOutput: false,
      history: [
        {
          id: 1,
          date: "20.20.2020",
          status: "Rejected",
          summ: "+320",
          buttonText: "Wallet replenishment",
          currency: 1,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 2,
          date: "20.20.2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Wallet replenishment",
          currency: 2,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 3,
          date: "20.20.2020",
          status: "Waiting",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 4,
          date: "20.20.2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Funds output",
          currency: 2,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 5,
          date: "20.20.2020",
          status: "Waiting",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 6,
          date: "20.20.2020",
          status: "Approved",
          summ: "9.04",
          buttonText: "Funds output",
          currency: 1,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 7,
          date: "20.20.2020",
          status: "Waiting",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 8,
          date: "20.20.2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Funds output",
          currency: 2,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 9,
          date: "20.20.2020",
          status: "Waiting",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          itemShow: false,
          waletName: "Walet Name",
        },
        {
          id: 10,
          date: "20.20.2020",
          status: "Approved",
          summ: "9.04",
          buttonText: "Funds output",
          currency: 1,
          itemShow: false,
          waletName: "Walet Name",
        },
      ],
      myWallets: [
        {
          id: 11,
          icon: "wallet-1",
          dollars: "11,289",
          status: "Rejected",
          percent: "9.04",
          summ: "12.238",
          waletText: "BIXRP Wallet",
          currency: 1,
          waletName: "BIXRP",
        },
        {
          id: 12,
          icon: "wallet-2",
          dollars: "20",
          status: "Approved",
          percent: "23",
          summ: "500",
          waletText: "BIXRP Wallet",
          currency: 1,
          waletName: "USDT",
        },
        {
          id: 12,
          icon: "wallet-1",
          dollars: "11,289",
          status: "Rejected",
          percent: "9.04",
          summ: "12.238",
          waletText: "BIXRP Wallet",
          currency: 1,
          waletName: "BIXRP",
        },
        {
          id: 14,
          icon: "wallet-2",
          dollars: "20",
          status: "Approved",
          percent: "23",
          summ: "500",
          waletText: "BIXRP Wallet",
          currency: 1,
          waletName: "USDT",
        },
        {
          id: 15,
          icon: "wallet-1",
          dollars: "11,289",
          status: "Rejected",
          percent: "9.04",
          summ: "12.238",
          waletText: "BIXRP Wallet",
          currency: 1,
          waletName: "BIXRP",
        },
        {
          id: 16,
          icon: "wallet-2",
          dollars: "20",
          status: "Approved",
          percent: "23",
          summ: "500",
          waletText: "BIXRP Wallet",
          currency: 1,
          waletName: "USDT",
        },
      ],
      sortingList: [
        { value: 1, label: "Show all" },
        { value: 2, label: "Transfer" },
        { value: 4, label: "Exchange" },
      ],
      sortingTime: [
        { value: 1, label: "Show all" },
        { value: 2, label: "Last week" },
        { value: 3, label: "Last month" },
      ],
      sortingCurrency: [
        { value: 1, label: "Show all" },
        { value: 2, label: "BIXRP" },
        { value: 3, label: "FAN" },
        { value: 4, label: "PIN" },
      ],
      selectedSortItem: { value: 1, label: "By transaction date" },
      clientWidth: null,
      sorted: false,
    };
  },
  computed: {
    investmentXRPOffset() {
      return (300 * this.XRP.investment) / this.XRP.balance + 290;
    },
    investmentUSDXOffset() {
      return (300 * this.USDX.investment) / this.USDX.balance + 290;
    },
    balanceXRPArray() {
      return this.formatCurency(this.XRP.balance).split(".");
    },
    investmentXRPArray() {
      return this.formatCurency(this.XRP.investment).split(".");
    },
    profitXRPArray() {
      return this.formatCurency(this.XRP.profit).split(".");
    },
    balanceUSDXArray() {
      return this.formatCurency(this.USDX.balance).split(".");
    },
    investmentUSDXArray() {
      return this.formatCurency(this.USDX.investment).split(".");
    },
    profitUSDXArray() {
      return this.formatCurency(this.USDX.profit).split(".");
    },
  },
  created() {
    this.clientWidth = document.body.clientWidth;
  },
  mounted() {
    window.addEventListener("resize", this.getWindowWidth);
  },
  methods: {
    formatCurency(curency) {
      let formated = new Intl.NumberFormat("en-IN").format(curency);
      return formated;
    },
    openSendModal() {
      this.innerWalletOutput = false;
      this.$modal.show("modal-output");
    },
    showModalType() {
      this.innerWalletOutput = true;
      this.$modal.show("modal-another-wallet");
    },
    openOutputModal() {
      this.innerWalletOutput = false;
      this.$modal.show("modal");
    },
    goToWalets() {
      this.$router.push({ name: "Wallets" });
    },
    getWindowWidth() {
      this.clientWidth = document.body.clientWidth;
    },
    closeModalConfirm() {
      console.log("confirm modal close");
    },
    openDatepicker(currency) {
      this.getDate = {};
      this.currentDatepicker = currency;
      this.$modal.show("datepicker");
    },
    canselDatepicker() {
      this.$modal.hide("datepicker");
      this.currentDatepicker == "xrp"
        ? (this.XRPDate = null)
        : (this.USDXDate = null);
    },
  },
  watch: {
    getDate: {
      deep: true,
      handler(val) {
        this.currentDatepicker == "xrp"
          ? (this.XRPDate = val.dateRange)
          : (this.USDXDate = val.dateRange);
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>
