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
    <div class="home__content">
      <div
        class="
          xrp_block
          card card--gradient
          row-flex
          align-items-center
          justify-content-between
        "
      >
        <div class="balance">
          <div class="balance__icon">
            <i class="icon-currancy"></i>
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
                stroke="#fff"
                stroke-width="5"
                stroke-dasharray="300"
                :stroke-dashoffset="investmentXRPOffset - 290"
              />
              <circle
                class="circle__investment"
                cx="50"
                cy="50"
                r="47"
                stroke="rgba(255,255,255,.5)"
                stroke-width="5"
                stroke-dasharray="300"
                :stroke-dashoffset="investmentXRPOffset"
              />
            </svg>
          </div>
          <div class="balance__info">
            <div class="balance__title">XRP balance</div>
            <div class="balance__actual">
              <div class="atual__item">
                {{ balanceXRPArray[0]
                }}<small>.{{ balanceXRPArray[1] || "00" }}</small>
                <small class="balance__currancy">XRP</small>
              </div>
            </div>
            <div class="add_wallet">
              <beButton title="Add wallet" :link="true" @click="goToWalets">
                <i class="icon-plus-outline" slot="icon-left"></i>
              </beButton>
            </div>
          </div>
        </div>
        <div class="btns">
          <beButton
            type="button"
            title="Send"
            :outline="true"
            :white="true"
            @click="openSendModal('XRP')"
            ><i class="icon-sign-out" slot="icon-left"></i
          ></beButton>
          <beButton
            type="button"
            title="Receive"
            :outline="false"
            :white="true"
            class="ml10"
            @click="openOutputModal('XRP')"
            ><i class="icon-sign-in" slot="icon-left"></i
          ></beButton>
        </div>
      </div>
      <div
        class="
          card
          usdx_block
          card--gradient-purple
          row-flex
          align-items-center
          justify-content-between
        "
      >
        <div class="balance">
          <div class="balance__icon">
            <!-- <i class="icon-wallet-outline"></i> -->
            <img class="currency__icon" src="/images/balance.svg" alt="" />
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
                stroke="#fff"
                stroke-width="5"
                stroke-dasharray="300"
                :stroke-dashoffset="investmentUSDXOffset - 290"
              />
              <circle
                class="circle__investment"
                cx="50"
                cy="50"
                r="47"
                stroke="rgba(255,255,255,.5)"
                stroke-width="5"
                stroke-dasharray="300"
                :stroke-dashoffset="investmentUSDXOffset"
              />
            </svg>
          </div>
          <div class="balance__info">
            <div class="balance__title">BIXRP balance</div>
            <div class="balance__actual">
              <div class="atual__item">
                {{ balanceUSDXArray[0]
                }}<small>.{{ balanceUSDXArray[1] || "00" }}</small>
                <small>BIXRP</small>
              </div>
            </div>
            <div class="add_wallet">1 BIXRP = 1$</div>
          </div>
        </div>
        <div class="btns">
          <beButton
            type="button"
            title="Send"
            :outline="true"
            :white="true"
            @click="openSendModal('USDX')"
            ><i class="icon-sign-out" slot="icon-left"></i
          ></beButton>
          <beButton
            type="button"
            title="Receive"
            :outline="false"
            :white="true"
            class="ml10"
            @click="openOutputModal('USDX')"
            ><i class="icon-sign-in" slot="icon-left"></i
          ></beButton>
        </div>
      </div>
      <div class="hold_block card card--white">
        <div class="balance">
          <div class="balance__info">
            <div class="balance__title">
              <span class="mr5">HODL balance</span>
              <bePrompt
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit a, doloribus tenetur ipsum eveniet incidunt rem totam labore eos ut."
              ></bePrompt>
            </div>
            <div class="balance__actual row-flex">
              <div class="atual__item">
                <div class="balance__amount">
                  <small class="balance__currancy"
                    ><i class="icon-currancy"></i
                  ></small>
                  {{ investmentXRPArray[0]
                  }}<small>.{{ investmentXRPArray[1] || "00" }}</small>
                </div>
                <div class="profit">
                  <span class="profit__finance">
                    <i class="icon-arrow-up-double"></i> {{ XRP.profit }}
                  </span>
                  <small>for{{ "\xa0" }}yesterday</small>
                </div>
              </div>
              <div class="atual__item">
                <div class="balance__amount">
                  {{ investmentUSDXArray[0]
                  }}<small>.{{ investmentUSDXArray[1] || "00" }} BIXRP</small>
                </div>
                <div class="profit">
                  <span class="profit__finance loss">
                    <i class="icon-arrow-up-double"></i>
                    {{ USDX.profit }} BIXRP
                  </span>
                  <small>for{{ "\xa0" }}yesterday</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="graph_block">
        <div class="graph">
          <img src="/images/graph.png" alt="" />
        </div>
      </div>
      <div class="transactions transactions_block">
        <div
          class="
            transactions__header
            row-flex
            align-items-center
            justify-content-start
            mb15
            mt15
          "
        >
          <div class="block__title">Transaction history</div>
          <div class="sorting__item mr5">
            <button type="button" @click="sorted = !sorted">
              <i class="icon-ascending-sorting" v-if="!sorted"></i>
              <i class="icon-ascending-sorting-up" v-else></i>
            </button>
          </div>
          <beSelect
            :selectArray="sortingList"
            v-model="selectedSortItem"
            :transparent="true"
          ></beSelect>
          <div class="block__link" v-if="clientWidth >= 890">
            <router-link
              :to="{ name: 'Wallets' }"
              class="btn btn-link more_link"
              ><span>Details</span> <i class="icon-arrow-right"></i
            ></router-link>
          </div>
        </div>
        <div class="transactions__body" v-if="history">
          <vue-custom-scrollbar
            :settings="{
              wheelPropagation: false,
            }"
            class="transactions__wrapper"
          >
            <div
              class="card card--white history"
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
              <div class="history__date">{{ item.date }}</div>
              <div class="history__planish_link">
                <button class="wallet_btn">
                  <span v-if="item.buttonText === 'Wallet replenishment'"
                    ><i class="icon-sign-in" slot="icon-left"></i
                  ></span>
                  <span v-else
                    ><i class="icon-sign-out" slot="icon-left"></i
                  ></span>
                  <span class="wallet_btn__text">
                    <span class="wallet_btn__title">{{ item.buttonText }}</span>
                    <span class="wallet__name"
                      >Wallet: {{ item.waletName }}</span
                    >
                  </span>
                </button>
              </div>
              <div class="history__status">{{ item.status }}</div>
              <div class="history__finance">
                {{ item.summ }}
                <small>{{ item.currency == 1 ? "BIXRP" : "XRP" }}</small>
              </div>
            </div>
          </vue-custom-scrollbar>
        </div>
        <div class="transactions__body empty" v-else>
          <div class="card card--white text-center">
            <p class="icon"><i class="icon-smile-sad"></i></p>
            <p class="empty__text">You don't have any transactions yet</p>
          </div>
        </div>
        <div class="block__link" v-if="clientWidth < 890">
          <router-link :to="{ name: 'Wallets' }" class="btn btn-link more_link"
            ><span>Details</span> <i class="icon-arrow-right"></i
          ></router-link>
        </div>
      </div>
    </div>
    <modal
      name="modal"
      class="send_to_walet_modal"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <foundsToWalletXRP v-if="sendXRP == 'XRP'"></foundsToWalletXRP>
      <foundsToWalletUSDX v-else></foundsToWalletUSDX>
    </modal>
    <modal
      name="modal-output"
      class="receive_modal"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <foundsOutputXRP v-if="outputXRP == 'XRP'"></foundsOutputXRP>
      <foundsOutputUSDX v-else></foundsOutputUSDX>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      sendXRP: null,
      outputXRP: null,
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
      history: [
        {
          id: 1,
          date: "20/20/2020",
          status: "Rejected",
          summ: "+320",
          buttonText: "Wallet replenishment",
          currency: 1,
          waletName: "Walet Name",
        },
        {
          id: 2,
          date: "20/20/2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Wallet replenishment",
          currency: 2,
          waletName: "Walet Name",
        },
        {
          id: 3,
          date: "20/20/2020",
          status: "Waiting",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          waletName: "Walet Name",
        },
        {
          id: 4,
          date: "20/20/2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Funds output",
          currency: 2,
          waletName: "Walet Name",
        },
        {
          id: 5,
          date: "20/20/2020",
          status: "Waiting",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          waletName: "Walet Name",
        },
        {
          id: 6,
          date: "20/20/2020",
          status: "Approved",
          summ: "+320",
          buttonText: "Funds output",
          currency: 1,
          waletName: "Walet Name",
        },
      ],
      sortingList: [
        { value: 1, label: "By transaction date" },
        { value: 2, label: "By sum" },
        { value: 3, label: "By wallet" },
        { value: 4, label: "By status" },
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
    openSendModal(type) {
      this.outputXRP = type;
      this.$modal.show("modal-output");
    },
    openOutputModal(type) {
      this.sendXRP = type;
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
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>
