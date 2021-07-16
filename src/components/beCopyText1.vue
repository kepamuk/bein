<template>
  <div
    class="copy_text"
    :class="{ bordered: bordered }"
    @click="copyTextValue($event)"
  >
    <span class="copy_title">Your private key</span>
    <div class="copy_textWrap">
      <span class="copy_text__value">{{ text }}</span> <i class="icon-copy"></i>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["text", "bordered"],
    data() {
      return {
        textValue: null,
      };
    },
    created() {
      this.textValue = this.text;
    },
    methods: {
      copyTextValue(event) {

      },
    },
  };
</script>
<style lang="scss" scoped>
  .copy_text {
    text-align: left;
    padding: 24px 30px;
  }

  .copy_title {
    color: rgba(11, 17, 26, .5);
    font-size: 12px;
  }

  .copy_textWrap {
    display: flex;
    justify-content: space-between;
  }

  .copy_text__value {
    color: #0B111A;
  }

  .icon-copy {
    color: rgba(11, 17, 26, .3);
  }
</style>
