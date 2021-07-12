<template>
  <div class="beModal beModal_step">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-notification')">
            <i class="icon-close"></i>
          </button>
        </div>
      </div>
      <div class="steps">
        <div
          class="steps__item"
          @click="goToStep(1)"
          :class="{
            active: currentstep === 1 || currentstep === 2 || currentstep === 3,
          }"
        ></div>
        <div
          class="steps__item"
          @click="goToStep(2)"
          :class="{ active: currentstep === 2 || currentstep === 3 }"
        ></div>
        <div
          class="steps__item"
          @click="goToStep(3)"
          :class="{ active: currentstep === 3 }"
        ></div>
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
        <div class="step step__content" :class="{ active: currentstep === 1 }">
          <h2 class="popup-verify__title title">01. Verify your email</h2>
          <div class="popup-verify__input">
            <beInput class="full-width" placeholder="E-mail"></beInput>
            <div class="save-btn">
              <a href="#" class="save">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#check2"></use>
                </svg>
                <span>Save</span>
              </a>
              <a href="#" class="delete">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#close"></use>
                </svg>
              </a>
            </div>
          </div>
          <div class="popup-verify__input mb15 mt15">
            <p>
              We have sent you an email with a confirmation code, please enter
              it here
            </p>
          </div>
          <beInput class="full-width" placeholder="E-mail code"></beInput>
          <div class="popup-verify__input mb15">
            <a href="" class="send-again link-underline">Send it again</a>
          </div>
        </div>
        <div class="step step__content" :class="{ active: currentstep == 2 }">
          <h2 class="popup-verify__title title">
            02. Verify your phone number
          </h2>
          <div class="popup-verify__input">
            <beInput class="full-width" placeholder="Phone Number"></beInput>
            <a href="" class="edit link-underline">Edit</a>
          </div>
          <div class="popup-verify__input mb15 mt15">
            <p>
              We have sent you a confirmation code by phone, please enter it
              here
            </p>
          </div>
          <beInput class="full-width" placeholder="SMS code"></beInput>
          <div class="popup-verify__input mb15">
            <a href="" class="send-again link-underline">Send it again</a>
          </div>
        </div>
        <div class="step step__content" :class="{ active: currentstep == 3 }">
          <h2 class="popup-verify__title title">03. Recovery key</h2>
          <h3 class="popup-verify__subtitle">Your recovery key</h3>
          <div class="popup-verify__input">
            <beInput class="full-width mb15" placeholder="NQCXMHHR6K525FDO">
              <i class="icon-copy" slot="right"></i>
            </beInput>
            <p>
              <b>NOTE:</b> Make a note of your Recovery key, it will help you to
              restore your account in case you lose your password. This code
              cannot be recovered. Keep it out of reach to avoid the possibility
              of hacking your account.
            </p>
          </div>
        </div>
      </div>
      <div class="beModal__footer row-flex justify-content-between">
        <button @click="prevStep" class="popup-verify__btn-back">
          <svg>
            <use xlink:href="/images/icons/icons.svg#arrow-left"></use>
          </svg>
          <span>Back</span>
        </button>
        <button
          v-if="currentstep === 3"
          @click="submitData"
          class="popup-verify__btn-continue popup-verify__btn-continue_last"
        >
          <svg>
            <use xlink:href="/images/icons/icons.svg#approval"></use>
          </svg>
          <span>Complete</span>
        </button>
        <button v-else @click="nextStep" class="popup-verify__btn-continue">
          <span>Continue</span>
          <svg>
            <use xlink:href="/images/icons/icons.svg#arrow-left"></use>
          </svg>
        </button>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import transactionsSend from "@/components/modalTemplates/transactionsSend";

export default {
  data() {
    return {
      currentstep: 1,
      clickedItem: null,
      selectCountryList: [
        { value: 1, label: "Country 1" },
        { value: 2, label: "Country 2" },
        { value: 3, label: "Country 3" },
        { value: 4, label: "Country 4" },
        { value: 5, label: "Country 5" },
        { value: 6, label: "Country 6" },
      ],
      selectedCountryItem: null,
      selectDocumentList: [
        { value: 1, label: "Document 1" },
        { value: 2, label: "Document 2" },
        { value: 3, label: "Document 3" },
        { value: 4, label: "Document 4" },
        { value: 5, label: "Document 5" },
        { value: 6, label: "Document 6" },
      ],
      selectedDocumentItem: null,
      selectedDocumentFile: null,
      selectedSelfieFile: null,
      selectedMonth: null,
    };
  },
  computed: {
    ...mapGetters({
      getMonths: "lists/getMonths",
    }),
  },
  methods: {
    goToStep(step) {
      this.currentstep = step;
    },
    nextStep() {
      this.currentstep++;
      if (this.currentstep > 3) {
        this.currentstep = 3;
      }
    },
    prevStep() {
      this.currentstep--;
    },
    submitData() {
      this.$modal.hide("modal-notification");
      this.$modal.show(
        transactionsSend,
        {
          successTitle: "Information have been save",
          successText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat rerum amet ut sit corrupti unde fugiat similique? Quas, reprehenderit deserunt nobis nisi eligendi error ratione amet. Dicta, sequi repudiandae!",
        },
        { height: "auto", width: "90%", maxWidth: 540, adaptive: true }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.popup-verify__input .save-btn {
  top: 50%;
  transform: translateY(-50%);
}
.popup-verify__btn-continue_last svg {
  transform: rotate(0);
}
@media all and (max-width: 650px) {
  .beModal__footer {
    flex-direction: column-reverse;
    padding-top: 30px;
  }
  .beModal_step .beModal__header {
    padding: 30px;
  }
}
</style>
