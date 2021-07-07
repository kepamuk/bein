<template>
  <div class="beModal beModal_step text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hideAll()">
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
        <h2 class="beModal__title">{{ "Password reset" }}</h2>
        <div class="mb30">
          <beInputRadio
            class="mr25"
            placeholder="By E-mail"
            :round="true"
            value="1"
            v-model="resetType"
          ></beInputRadio>
          <beInputRadio
            value="2"
            :round="true"
            placeholder="By phone"
            v-model="resetType"
          ></beInputRadio>
        </div>
        <div class="mb30" v-if="resetType == 1">
          <beInput class="full-width" placeholder="E-mail"></beInput>
        </div>
        <div class="mb30" v-else>
          <beInput
            class="full-width"
            type="number"
            placeholder="Phone"
          ></beInput>
        </div>
        <beButton
          type="button"
          title="Continue"
          :shadow="true"
          @click="resetPassword"
        ></beButton>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resetType: 1,
    };
  },
  methods: {
    resetPassword() {
      this.$modal.hide("modal-reset-password");
      this.$modal.show("modal-reset-password-varification");
    },
  },
};
</script>
