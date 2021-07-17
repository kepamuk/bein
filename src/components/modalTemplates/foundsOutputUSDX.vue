<template>
  <div class="beModal">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-output')">
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
        <h2 class="beModal__title">{{innerWallet ? 'Send BIXRP' : 'Send'}}</h2>
        <!-- <beSelect
          :selectArray="selectList"
          v-model="selectedItem"
          class="wallet_select mb15 text--black"
        >
          <span slot="small_text">354.12 BIXRP</span>
        </beSelect> -->
        <div class="beModal__gray-bg">
          <beInput
            class="xrp_address mb15"
            placeholder="Send to BIXRP address"
            :transparent="true"
          >
            <i class="icon-qr-code" slot="right"></i>
          </beInput>
          <beInput
            class="destination_tag mb15"
            placeholder="Destination tag"
            type="number"
            :recomended="true"
            :transparent="true"
          >
            <bePrompt
              slot="right"
              text="Indicate the beneficiary or destination of the transaction"
              class="text--primary"
            ></bePrompt>
          </beInput>
          <div class="xrp_ballance__amount">
            <label class="beModal__small">Amount</label>
            <beInput
              type="number"
              class="xrp_ballance"
              placeholder="0"
              v-model="inputVal"
              :maxVal="XRP.balance"
            >
              <span slot="right">MAX</span>
            </beInput>
            <div class="xrp_to_usd">
              <div class="converted_value beModal__small">
                ${{ xrpToUsd[0] }}<small>.{{ xrpToUsd[1] || "00" }}</small>
              </div>
              <div class="convert_to_currency beModal__small">
                Available: 4,82939 XRP
              </div>
            </div>
          </div>
          <div class="xrp_ballance__network">
            <label class="xrp_ballance__label beModal__small"
              >Network fee:</label
            >
            <p class="xrp_ballance__network-number beModal__small">
              $1.79 / 0.00005242 BTC
            </p>
          </div>
        </div>
      </div>
      <div class="beModal__footer text-center row-flex justify-content-between">
        <button
          v-if="innerWallet"
          @click="back"
          class="beModal__btn beModal__back popup-verify__btn-back"
        >
          <span>Back</span>
        </button>
        <button
          v-else
          @click="cancel"
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
  props: {
    innerWallet: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectList: null,
      selectedItem: null,
      inputVal: 0,
      XRP: {
        balance: 1256.45,
      },
      walletBalance: null,
    };
  },
  computed: {
    ...mapGetters({
      getSelectList: "lists/getSelectList",
      getSelectedItem: "lists/getSelectedItem",
    }),
    xrpToUsd() {
      return this.formatCurency(this.inputVal * 2).split(".");
    },
  },
  created() {
    this.selectList = this.getSelectList;
    this.selectedItem = this.getSelectedItem;
  },
  methods: {
    confirmSending() {
      this.$modal.hide("modal-output");
      this.$modal.show("modal-confirm");
    },
    back() {
      this.$modal.hide("modal-output");
      this.$modal.show("modal-another-wallet");
    },
    cancel() {
      this.$modal.hide("modal-output");
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/partials/_colors.scss";
.destination_tag,
.xrp_ballance,
.xrp_address {
  width: 100%;
}
.xrp_ballance {
  color: $primary;
  input {
    font-size: 18px;
    color: $primary;
  }
  .beInput__placeholder {
    font-size: 18px;
    color: $primary;
  }
}
.xrp_to_usd {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  font-size: 18px;
  small {
    font-size: 14px;
  }
}
// .convert_to_currency {
//   font-size: 16px;
//   @media (max-width: 1700px) {
//     font-size: 14px;
//   }
// }
</style>
