<template>
  <label class="beInput" :class="{ beInput__transparent: transparent }">
    <input
      :type="type || 'text'"
      class="beInput__item"
      placeholder=" "
      v-model="inputValue"
      @input="$emit('input', inputValue)"
      :min="minVal"
      :max="maxVal"
      :name="name"
      :step="step"
    />
    <span class="beInput__placeholder">{{ placeholder }}</span>
    <i class="recomended" v-if="recomended">(Recomended)</i>
    <!-- <span class="" v-if="sublabel">{{ sublabel }}</span> -->
    <span class="beInput__right">
      <slot name="right"></slot>
    </span>
  </label>
</template>
<script>
export default {
  data() {
    return {
      inputValue: null,
    };
  },
  props: [
    "placeholder",
    "transparent",
    "type",
    "recomended",
    "minVal",
    "maxVal",
    "name",
    "step",
    // placeholder: {
    //   type: String,
    //   default: ''
    // },
    // transparent: {
    //   type: String,
    //   default: ''
    // },
    // type: {
    //   type: String,
    //   default: ''
    // },
    // recomended: {
    //   type: Boolean,
    //   default: false
    // },
    // minVal: {
    //   type: String,
    //   default: ''
    // },
    // maxVal: {
    //   type: String,
    //   default: ''
    // },
    // name: {
    //   type: String,
    //   default: ''
    // },
    // step: {
    //   type: String,
    //   default: ''
    // },
    // sublabel: {
    //   type: String,
    //   default: ''
    // },
  ],
  watch: {
    inputValue(val) {
      if (val > this.maxVal) {
        this.inputValue = this.maxVal;
      }
    },
  },
};
</script>
<style lang="scss">
.beInput {
  display: inline-block;
  background-color: #f8f8f8;
  position: relative;
  &:not(.beInput__transparent) &__item {
    background-color: transparent;
    border: 1px solid #e9e9e9;
    padding: 0 30px;
    border-bottom: 2px solid #d0d0d0;
  }
  &__item {
    display: block;
    width: 100%;
    border: none;
    height: 60px;
    border-radius: 8px 8px 0 0;
    border-bottom: 2px solid #d0d0d0;
    box-sizing: border-box;
    font-size: 18px;

    @media (max-width: 1700px) {
      font-size: 16px;
      height: 45px;
    }
    &:focus {
      outline: transparent;
    }
    &:focus ~ .beInput__placeholder,
    &:not(:placeholder-shown) ~ .beInput__placeholder {
      opacity: 0;
    }
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  &:not(.beInput__transparent) &__placeholder {
    left: 30px;
  }
  &__placeholder {
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    pointer-events: none;
    color: rgba(#0b111a, 0.5);
    transition: 0.3s ease;
  }
  &:not(.beInput__transparent) &__right {
    right: 15px;
  }
  &__right {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    font-size: 16px;
    color: inherit;
    @media (max-width: 1700px) {
      font-size: 14px;
    }
  }
  .recomended {
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    font-size: 16px;
    @media (max-width: 1700px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
  &__placeholder {
    left: 30px;
  }
  &__right {
    right: 15px;
  }
}
</style>
