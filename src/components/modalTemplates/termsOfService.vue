<template>
  <div class="beModal beModal_step popup-text__wrapper" style="padding: 0; max-width: 100%">
    <div class="beModal__header">
      <div class="beModal__close">
        <div slot="top-right">
          <button @click="$modal.hide('modal-terms')">
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
        <h2 class="popup-text__title title">
          {{ "10 советов новичкам от создателей платежных систем:" }}
        </h2>
        <div class="popup-text__text">
          Устанавливайте лицензионные версии антивирусных и антишпионских
          программ, не забывая своевременно их обновлять. Не открывайте ссылки с
          заманчивыми предложениями, если они присланы неизвестными Вам лицами
          (конторами).
        </div>
        <strong style="font-weight: bolder">
          Используйте весь инструментарий безопасности для защиты виртуальных
          денег:</strong
        >
        <ul>
          <li>Explain your question in as much detail as possible</li>
          <li>The average response time during business hours is 5 minutes.</li>
          <li>Answer time may be prolonged in case of a busy workload</li>
          <li>
            You can close this window and read your answer later from this
            device, it will be saved
          </li>
          <li>
            You can write to <a href="" class="link-underline">support@beinxrp.com</a> and get your
            answer in an email
          </li>
          <li>Answers to most questions are listed below</li>
          <li>
            The Be In Wallet support agent never asks for personal information
            or writes to you from your personal social media account
          </li>
        </ul>
        <p>
          Держите конфиденциальные данные в защищенном месте. Рабочий стол
          компьютера – не лучшее место для хранения. Не публикуйте свои
          телефонные номера и адреса электронной почты на ресурсах с открытым
          доступом.

          <span class="red">
            Не используйте везде одинаковые кодовые фразы для восстановления.
          </span>
        </p>
      </div>
    </vueCustomScrollbar>
  </div>
</template>
<script>
export default {
  methods: {
    sendCode() {
      this.$modal.hide("modal-terms");
    },
  },
};
</script>
