<template>
  <div class="beModal">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('walletExport1')">
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
        <h2 class="beModal__title">Wallet Export</h2>
        <div class="board">
          <div class="board__left">
            <img src="/images/wallet/fileDownload.svg" alt="">
            <span class="board__left-text">Keystore File (UTC/JSON)</span>
          </div>
          <div class="board__right">
            <img src="/images/wallet/arrowDownload.svg" alt="">
            <span class="board__right-text">Download</span>
          </div>
        </div>

        <div
          class="keyWrap"
          :class="{ toggle }"
        >
          <div class="board key">
            <div class="board__left">
              <img src="/images/wallet/key.svg" alt="">
              <span class="board__left-text">Private Key</span>
            </div>
            <div
              class="board__right"
              @click="keyToggle()"
              :class="{ toggleColor: toggle }"
            >
              <i :class="!toggle ? 'icon-eye' : 'icon-closed-eye'" slot="right"></i>
              <span
                class="board__right-text"
              >{{!toggle ? 'View' : 'Hide'}}</span>
            </div>
          </div>
          <beCopyText1
            :bordered="true"
            class="walet__hash"
            text="13tL5oHakHbsv1kGUtkLuE4hkyzGcyijmt"
          ></beCopyText1>
        </div>

        <div class="beModal__alert">
          <img src="/images/wallet/errorAlert.svg" alt="">
          <div class="beModal__alert-text">
            <p>ВНИМАНИЕ: ВСЕ ваши личные ключи секретны.</p>
            <p>Раскрытие только личного ключа может скомпрометировать весь каш кошелёк!</p>
            <p>В частности, НЕ ИСПОЛЬЗУЙТЕ службы третьих сторон, которые предлагают “получить личный ключ”</p>
          </div>
        </div>
      </div>
      <div class="beModal__footer text-center">
        <beButton
          type="button"
          title="Continue"
          class="confirm_button"
          :shadow="true"
        ></beButton>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        toggle: false
      };
    },
    methods: {
      keyToggle() {
        this.toggle = !this.toggle;
      }
    },
  };
</script>
<style lang="scss" scoped>
  .beModal__alert {
    background: rgba(255, 90, 107, 0.2);
    border: 1px solid #FF5A6B;
    border-radius: 5px;
    display: flex;
    align-items: start;
    padding: 16px;
    margin: 24px 0 20px 0;

    &-text {
      color: #FF5A6B;
      font-size: 16px;
      text-align: left;
      margin-left: 10px;

      p {
        margin-bottom: 10px;
      }

      p:last-child {
        margin-bottom: 0;
      }
    }
  }

  .board {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    color: rgba(11, 17, 26, 0.5);
    border-radius: 8px;
    cursor: pointer;
    height: 70px;
    padding: 0 20px;
    border: 1px solid #e9e9e9;

    &__left {
      display: flex;
      align-items: center;

      &-text {
        margin-left: 10px;
        color: #0B111A;
        font-weight: bold;
        font-size: 16px;
      }
    }

    &__right {
      display: flex;
      align-items: center;

      &-text {
        margin-left: 10px;
        font-weight: bold;
        font-size: 16px;
        color: #2864FF;
      }
    }
  }

  .keyWrap {
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid #e9e9e9;
    height: 70px;
    overflow: hidden;
    transition: height .25s;
  }

  .key {
    border: none;

    i {
      color: #2864FF;
      font-size: 22px;
    }
  }

  .toggle {
    height: 170px;
  }

  .toggleColor {

    i, span {
      color: rgba(11, 17, 26, 0.5);
    }
  }
</style>
