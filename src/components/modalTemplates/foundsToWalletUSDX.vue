<template>
  <div class="beModal">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal')">
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
        <h2 class="beModal__title">{{innerWallet ? 'Receive BIXRP' : 'Receive'}}</h2>
        <!-- <beSelect
          :selectArray="selectList"
          v-model="selectedItem"
          class="wallet_select text--black"
        >
          <span slot="small_text">354.12 BIXRP</span>
        </beSelect> -->
        <div class="beModal__gray-bg">
          <img src="/images/client/qr.svg" alt="" />
          <div class="qr_code__label">Your BIXRP Address</div>
          <beCopyText
            :bordered="true"
            class="walet__hash"
            text="0x2762e927128408324vb913ab945d4e38sd132cdea2"
          ></beCopyText>
        </div>
      </div>
      <div class="beModal__qr_code"></div>
      <div class="beModal__footer text-center row-flex justify-content-between">
        <button v-if="innerWallet" @click="back" class="beModal__btn beModal__back popup-verify__btn-back">
          <span>Back</span>
        </button>
          <button
          v-else
          @click="cancel"
          class="beModal__btn beModal__back popup-verify__btn-back"
        >
          <span>Cancel</span>
        </button>
        <button @click="confirmSending" class="beModal__btn beModal__continue popup-verify__btn-continue">
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
      this.$modal.hide("modal");
      this.$modal.show("modal-confirm");
    },
    back() {
      this.$modal.hide("modal");
      this.$modal.show("modal-another-wallet");
    },
     cancel() {
      this.$modal.hide("modal");
    },
  },
};
</script>
