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
        <h2 class="beModal__title">Receive BIXRP</h2>
        <!-- <beSelect
          :selectArray="selectList"
          v-model="selectedItem"
          class="wallet_select text--black"
        >
          <span slot="small_text">354.12 BIXRP</span>
        </beSelect> -->
        <div class="beModal__qr_code">
          <img src="/images/client/qr.svg" alt="" />
        </div>
        <div class="qr_code__label">Your BIXRP Address</div>
        <beCopyText
          :bordered="true"
          class="walet__hash"
          text="13tL5oHakHbsv1kGUtkLuE4hkyzGcyijmt"
        ></beCopyText>
      </div>
      <div class="beModal__footer text-center row-flex justify-content-between">
        <button @click="back" class="popup-verify__btn-back">
          <span>Back</span>
        </button>
        <button @click="confirmSending" class="popup-verify__btn-continue">
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
      this.$modal.hide("modal");
      this.$modal.show("modal-confirm");
    },
    back() {
      this.$modal.hide("modal");
    },
  },
};
</script>
