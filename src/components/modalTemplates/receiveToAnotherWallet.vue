<template>
  <div class="beModal beModal_another-wallet">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-another-wallet')">
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
        <h2 class="beModal__title">
          {{ "Receive From Another Wallet" }}
        </h2>
        <div class="gAuth_steps">
          <div class="card card--grey card--nonshadow">
            <p class="wallet__label text--black">Select cryptocurrency</p>
            <beSelect
              :selectArray="selectList"
              v-model="selectedItem"
              class="wallet_select text--black"
              wallet
              walletIcon
            >
            </beSelect>
          </div>
          <div class="card card--grey card--nonshadow">
            <p class="wallet__label text--black">Select XRP Wallet</p>
            <beSelect
              :selectArray="selectList"
              v-model="selectedItem"
              class="wallet_select text--black"
              wallet
            >
            </beSelect>
          </div>
        </div>
      </div>
      <div class="beModal__footer text-center row-flex justify-content-between">
        <button
          @click="back"
          class="beModal__btn beModal__back popup-verify__btn-back"
        >
          <span>Cancel</span>
        </button>
        <button
          @click="confirmSending"
          class="beModal__btn beModal__continue popup-verify__btn-continue"
        >
          <span>Continue</span>
        </button>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectList: null,
      selectedItem: null,
    };
  },
  computed: {
    ...mapGetters({
      getSelectList: "lists/getSelectList",
      getSelectedItem: "lists/getSelectedItem",
    }),
  },
  created() {
    this.selectList = this.getSelectList;
    this.selectedItem = this.getSelectedItem;
  },
  methods: {
    confirmSending() {
      this.$modal.hide("modal-another-wallet");
      this.$modal.show("modal");
    },
    back() {
      this.$modal.hide("modal-another-wallet");
    },
  },
};
</script>
<style lang="scss">
.beModal__info {
  font-size: 14px;
  margin-top: 10px;
  color: rgba(#0b111a, 0.5);
  a {
    color: #2864ff;
  }
}
.cancel-btn {
  font-size: 18px;
}
.gAuth_steps {
  counter-reset: my-awesome-counter;
  font-size: 16px;
  p {
    margin-bottom: 1em;
  }
  img {
    margin: 0 auto;
  }
  .card {
    position: relative;
    margin-bottom: 15px;
    counter-increment: my-awesome-counter;
    &::before {
      content: "0" counter(my-awesome-counter);
      position: absolute;
      top: 15px;
      left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      font-size: 16px;
      color: #fff;
      background-color: #2864ff;
      border-radius: 50%;
      transform: translateX(-50%);
    }
  }
  .beInput__right {
    color: rgba(#0b111a, 0.5);
  }
}
</style>
