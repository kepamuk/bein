<template>
  <div class="settings">
    <button class="go-back" @click.prevent="$router.go(-1)" type="button">
      <i class="icon-arrow-left-middle"></i>
    </button>
    <div class="card card--white settings__container profile">
      <h2 class="font-large">Profile settings</h2>
      <div class="settings__block">
        <h3 class="settings__block_title">Personal information</h3>
        <div class="settings__block_item">
          <div class="settings__block_label">Profile image</div>
          <div class="settings__block_info">
            <div class="profile__image">
              <img :src="selectedUserPhoto" alt="" />
            </div>
          </div>
          <div class="settings__block_edit">
            <button class="edit_button" @click="$refs.userPhoto.click()">
              <input
                class="edit_button__input"
                type="file"
                ref="userPhoto"
                @change="getUserPhoto($event)"
                accept="image/jpeg, image/png"
              />
              <span class="edit_button__label">Edit</span>
              <i class="icon-angle-right"></i>
            </button>
          </div>
        </div>
        <div class="settings__block_item">
          <div class="settings__block_label">E-mail</div>
          <div class="settings__block_info">{{ getSettings.user.email }}</div>
        </div>
        <div class="settings__block_item">
          <div class="settings__block_label">Phone number</div>
          <div class="settings__block_info">{{ getSettings.user.mobile }}</div>
        </div>
        <div class="settings__block_item">
          <div class="settings__block_label">Verification</div>
          <div class="settings__block_info">
            <span v-if="isApproved" class="text--success">Approved</span>&nbsp;
            <span v-else class="text--alert">{{
              getSettings.user.verification
            }}</span>
          </div>
          <div class="settings__block_edit" v-if="!isApproved">
            <button
              class="edit_button"
              @click="$modal.show('settings-step-form')"
            >
              <span class="edit_button__label">Get verified</span>
              <i class="icon-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="settings__block">
        <h3 class="settings__block_title">Security</h3>
        <div class="settings__block_item">
          <div class="settings__block_label">Password</div>
          <div class="settings__block_info">********</div>
          <div class="settings__block_edit">
            <button
              class="edit_button"
              @click="$modal.show('modal-reset-password')"
            >
              <span class="edit_button__label">Reset</span>
              <i class="icon-angle-right"></i>
            </button>
          </div>
        </div>
        <div class="settings__block_item">
          <div class="settings__block_label">Two-factor authentication</div>
          <div class="settings__block_info">
            {{ getSettings.user.twoFactorVerification }}
          </div>
          <div class="settings__block_edit">
            <button
              class="edit_button"
              @click="$modal.show('modal-two-factor-auth')"
            >
              <span class="edit_button__label">Turn on</span>
              <i class="icon-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <modal
      name="settings-step-form"
      width="90%"
      :maxWidth="744"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <settingsStepForm></settingsStepForm>
    </modal>
    <modal
      name="modal-reset-password"
      width="90%"
      :maxWidth="500"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <passwordReset></passwordReset>
    </modal>
    <modal
      name="modal-reset-password-varification"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <passwordResetVarification></passwordResetVarification>
    </modal>
    <modal
      name="modal-two-factor-auth"
      width="90%"
      :maxWidth="650"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <twoFactorAuth></twoFactorAuth>
    </modal>
    <modal
      name="modal-two-factor-code"
      width="90%"
      :maxWidth="500"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <twoFactorCode></twoFactorCode>
    </modal>
    <modal
      name="modal-two-factor-gauth"
      width="90%"
      :maxWidth="500"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <twoFactorGAuth></twoFactorGAuth>
    </modal>
    {{ getSettings.user.verification }}
    {{ getSettings.user }}
  </div>
</template>
<script>
import settingsStepForm from "@/components/modalTemplates/settingsStepForm/settingsStepForm";
import passwordReset from "@/components/modalTemplates/passwordReset";
import twoFactorAuth from "@/components/modalTemplates/twoFactorAuth";
import twoFactorCode from "@/components/modalTemplates/twoFactorCode";
import passwordResetVarification from "@/components/modalTemplates/passwordResetVarification";
import twoFactorGAuth from "@/components/modalTemplates/twoFactorGAuth";
import defaultPoto from "@/assets/image.png";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    isApproved: false,
    selectedPhoto: defaultPoto,
  }),
  components: {
    settingsStepForm,
    passwordReset,
    twoFactorAuth,
    twoFactorCode,
    passwordResetVarification,
    twoFactorGAuth,
  },
  computed: {
    selectedUserPhoto() {
      return this.selectedPhoto;
    },
    ...mapGetters(["getSettings"]),
  },
  created() {},
  async mounted() {
    console.log(this.getSettings);
    this.$store.dispatch("user");
  },
  methods: {
    getUserPhoto(event) {
      let inputVal = event.target.files[0];
      let photo = new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsDataURL(inputVal);
        reader.onload = function () {
          resolve(reader.result);
        };
      });
      photo.then((responce) => {
        this.selectedPhoto = responce;
      });
    },
  },
};
</script>
<style lang="scss" src="./Settings.scss"></style>
