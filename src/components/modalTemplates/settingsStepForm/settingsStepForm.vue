<template>
  <div class="beModal beModal_step">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('settings-step-form')">
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
          <h2 class="beModal__title">01. Identification documents</h2>
          <div class="row">
            <div class="col-7">
              <h4 class="select_label mb10">Select your country</h4>
              <beSelect
                :selectArray="selectCountryList"
                v-model="selectedCountryItem"
                class="full-width mb15 text--black"
              ></beSelect>
              <h4 class="select_label mb10">Type of document</h4>
              <beSelect
                :selectArray="selectDocumentList"
                v-model="selectedDocumentItem"
                class="full-width mb15 text--black"
              ></beSelect>
              <h4 class="select_label mb10">Document scan</h4>
              <beInputFile
                class="full-width"
                :isButton="true"
                v-model="selectedDocumentFile"
                label="Attach file"
              ></beInputFile>
            </div>
            <div class="col-5">
              <!-- <img class="full-width" :src="`${selectedDocumentFile}`" alt="" v-if="selectedDocumentFile && selectedDocumentFile.length"> -->
              <img class="full-width" src="/images/client/example.png" alt="" />
            </div>
          </div>
        </div>
        <div class="step step__content" :class="{ active: currentstep == 2 }">
          <h2 class="beModal__title">02. Selfie with documents</h2>
          <div class="row">
            <div class="col-7">
              <ul>
                <li>Your background is a light neutral color</li>
                <li>Look directly into the camera</li>
                <li>Take a photo without a headdress and glasses</li>
              </ul>
              <!-- <h4 class="select_label mb10">Selfie with documents</h4> -->
              <beInputFile
                class="full-width"
                :isButton="true"
                v-model="selectedSelfieFile"
                label="Attach file"
              ></beInputFile>
            </div>
            <div class="col-5">
              <!-- <img class="full-width" :src="`${selectedSelfieFile}`" alt="" v-if="selectedSelfieFile && selectedSelfieFile.length"> -->
              <div class="example">
                <img class="full-width" src="/images/client/example2.png" alt="" />
                <div class="example__text">EXAMPLE</div>
              </div>
            </div>
          </div>
        </div>
        <div class="step step__content" :class="{ active: currentstep == 3 }">
          <h2 class="beModal__title">03. Personal information</h2>
          <h4 class="mb10">Personal Data</h4>
          <div class="row mb20">
            <div class="col-6">
              <beInput class="full-width" placeholder="Name"></beInput>
            </div>
            <div class="col-6">
              <beInput class="full-width" placeholder="Surname"></beInput>
            </div>
          </div>
          <h4 class="mb10">Date of birth</h4>
          <div class="row mb20">
            <div class="col-4">
              <beInput
                class="full-width"
                placeholder="Day"
                type="number"
              ></beInput>
            </div>
            <div class="col-4">
              <beSelect
                :selectArray="getMonths"
                v-model="selectedMonth"
                class="full-width text--black"
                selectPlaceholder="Month"
              ></beSelect>
            </div>
            <div class="col-4">
              <beInput
                class="full-width"
                placeholder="Year"
                type="number"
              ></beInput>
            </div>
          </div>
          <h4 class="mb10">Contact information</h4>
          <beInput class="full-width mb15" placeholder="City"></beInput>
          <div class="row">
            <div class="col-6">
              <beInput class="full-width" placeholder="Address"></beInput>
            </div>
            <div class="col-6">
              <beInput
                class="full-width"
                placeholder="Zip Code"
                type="number"
              ></beInput>
            </div>
          </div>
        </div>
      </div>
      <div class="beModal__footer">
        <div class="row-flex justify-content-between">
          <beButton
            type="button"
            title="Complete later"
            class="text--grey"
            :link="true"
            @click="submitData"
          ></beButton>
          <beButton
            v-if="currentstep === 3"
            type="button"
            title="Submit"
            :shadow="true"
            @click="submitData"
          ></beButton>
          <beButton
            v-else
            type="button"
            title="Сontinue"
            class="confirm_button"
            :shadow="true"
            @click="nextStep"
          ></beButton>
        </div>
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
      console.log(this.selectedCountryItem);
      console.log(this.selectedDocumentItem);
      console.log(this.selectedDocumentFile);
      // this.$store.dispatch("verification", "vava");
    },
    submitData() {
      console.log("submit data");
      this.$modal.hide("settings-step-form");
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
