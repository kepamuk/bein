<template>
  <div class="wallets">
    <button class="go-back" @click.prevent="$router.go(-1)" type="button">
      <i class="icon-arrow-left-middle"></i>
    </button>
    <h1 class="page__title">
      <i class="page__title_icon icon-wallets"></i>
      My wallets
    </h1>
    <div class="container wallets__container">
      <div class="row">
        <div class="col-4 card card--gradient-purple wallet card--bg-lines">
          <div class="wallet__header">
            <div class="wallet__icon pointer" @click="walletInfo('walletUSDX')">
              <i class="icon-wallet-outline"></i>
            </div>
            <div class="balance__info">
              <div class="balance__actual">
                <div class="atual__item">
                  12,021<small>.{{ 23 || "00" }} BIXRP</small>
                </div>
              </div>
              <div class="balance__title">BIXRP Wallet</div>
            </div>
          </div>
          <div class="wallet__body"></div>
          <div class="btns wallet__footer row-flex">
            <beButton
              class="flex-full"
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
              class="ml10 flex-full"
              @click="openOutputModal('USDX')"
              ><i class="icon-sign-in" slot="icon-left"></i
            ></beButton>
          </div>
        </div>
        <div class="col-4 card card--gradient wallet card--bg-lines">
          <div class="wallet__header">
            <div class="wallet__icon pointer" @click="walletInfo('walletXRP')">
              <i class="icon-wallet-outline"></i>
            </div>
            <div class="balance__info">
              <div class="balance__actual">
                <div class="atual__item">
                  <!-- <small class="balance__currancy"><i class="icon-currancy"></i></small> -->
                  12,021<small>.{{ 23 || "00" }} </small> <small>XRP</small>
                </div>
              </div>
              <div class="balance__title">XRP Wallet</div>
            </div>
          </div>
          <div class="wallet__body"></div>
          <div class="btns wallet__footer row-flex">
            <beButton
              class="flex-full"
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
              class="ml10 flex-full"
              @click="openOutputModal('XRP')"
              ><i class="icon-sign-in" slot="icon-left"></i
            ></beButton>
          </div>
        </div>
        <div class="col-4 create_btn">
          <span class="select_wallet_type">
            <span class="icon"></span>
            <span class="type_dropdown">
              <span class="type_dropdown__item" @click="createWallet"
                >Create new wallet</span
              >
              <span class="type_dropdown__item" @click="addWallet"
                >Add a wallet</span
              >
            </span>
          </span>
          <span class="text">Add a Wallet</span>
        </div>
      </div>
    </div>
    <div class="transactions transactions_block mt30">
      <div class="transactions__header card card--white mb15">
        <div class="block__title mb15">Transaction history</div>
        <div class="row-flex">
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
        </div>
      </div>
      <div class="transactions__body" v-if="history">
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
              <span v-else><i class="icon-sign-out" slot="icon-left"></i></span>
              <span class="wallet_btn__text">
                <span class="wallet_btn__title">{{ item.buttonText }}</span>
                <span class="wallet__name">Wallet: {{ item.waletName }}</span>
              </span>
            </button>
          </div>
          <div class="history__status">{{ item.status }}</div>
          <div class="history__finance">
            {{ item.summ }}
            <small>{{ item.currency == 1 ? "BIXRP" : "XRP" }}</small>
          </div>
        </div>
      </div>
      <div class="transactions__body empty" v-else>
        <div class="card card--white text-center">
          <p class="icon"><i class="icon-smile-sad"></i></p>
          <p class="empty__text">You don't have any transactions yet</p>
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
      name="modal-add-wallet"
      class="add_wallet"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <addWallet></addWallet>
    </modal>
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
      <transactionsSend></transactionsSend>
    </modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sendXRP: null,
      outputXRP: null,
      sorted: false,
      sortingList: [
        { value: 1, label: "By transaction date" },
        { value: 2, label: "By sum" },
        { value: 3, label: "By wallet" },
        { value: 4, label: "By status" },
      ],
      selectedSortItem: { value: 1, label: "By transaction date" },
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
    };
  },
  methods: {
    createWallet() {
      console.log("Create new wallet");
      this.$modal.show("modal-create-wallet");
    },
    addWallet() {
      console.log("Add wallet");
      this.$modal.show("modal-add-wallet");
    },
    walletInfo(wallet) {
      let waletName = wallet == "walletUSDX" ? "BIXRP Wallet" : "XRP Wallet";
      let waletUSDX = wallet == "walletUSDX" ? true : false;
      this.$modal.show(
        walletInfo,
        {
          waletName,
          waletUSDX,
        },
        { height: "auto", width: "90%", maxWidth: 880, adaptive: true }
      );
    },
    openSendModal(type) {
      this.outputXRP = type;
      this.$modal.show("modal-output");
    },
    openOutputModal(type) {
      this.sendXRP = type;
      this.$modal.show("modal");
    },
  },
};
</script>
