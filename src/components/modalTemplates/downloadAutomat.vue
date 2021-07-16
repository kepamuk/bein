<template>
  <div class="beModal text-center">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="closeModal">
            <i class="icon-close"></i>
          </button>
        </div>
      </div>
    </div>
    <vueCustomScrollbar
      class="modal_scroll rail__normal"
    >
      <div class="beModal__body">
        <p class="beModal__icon">
          <img src="/images/wallet/downloadAutomat.svg" alt="">
        </p>
        <h2 class="beModal__title">
          Загрузка начнется автоматически
        </h2>
        <p class="beModal__text">
          Дождитесь автоматического скачивания файла, если загрузка не началась,
          <router-link
            :to="{ name: 'test' }"
            class="link"
          >
            нажмите здесь
          </router-link>
        </p>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
  export default {
    props: ["successTitle", "successText", "buttonText"],
    methods: {
      closeModal() {
        this.$modal.hide("downloadAutomat");
      },
    },
  };
</script>
<style lang="scss" scoped>
  .beModal__icon {

    img {
      margin: 0 auto;
    }
  }

  .modal_scroll {
    margin-bottom: 110px;
    margin-top: 40px;
  }
</style>
