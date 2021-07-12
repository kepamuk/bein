<template>
  <div class="beModal beModal_step text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-two-factor-gauth')">
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
          {{ "Enabling two-factor authentication" }}
        </h2>
        <div class="gAuth_steps">
          <div class="card card--grey card--nonshadow">
            <p>
              After installing an authentication app (e.g. Google
              Authenticator), scan the QR code below with the camera of your
              phone:
            </p>
            <p class="text-center"><img src="/images/client/qr.svg" alt="" /></p>
            <p class="text--grey">
              If you have any problems with the QR code, enter this code
              manually into the app:
            </p>
            <beInput class="full-width" placeholder="NQCXMHHR6K525FDO">
              <i class="icon-copy" slot="right"></i>
            </beInput>
          </div>
          <div class="card card--grey card--nonshadow">
            <p class="text--grey">Enter the Two-Step Authentication code:</p>
            <beInput class="full-width" placeholder="NQCXMHHR6K525FDO">
              <i class="icon-copy" slot="right"></i>
            </beInput>
          </div>
        </div>
        <div>
          <beButton
            type="button"
            title="Verify Code"
            class="mb15"
            :shadow="true"
          ></beButton>
          <br />
          <beButton
            class="text--grey cancel-btn"
            type="button"
            title="Cancel"
            :link="true"
            @click="$modal.hide('modal-two-factor-gauth')"
          ></beButton>
        </div>
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
