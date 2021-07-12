<template>
  <label
    class="beInput beInput_textarea"
    :class="{ beInput__transparent: transparent }"
  >
    <textarea
      :type="type || 'text'"
      class="beInput__item"
      placeholder=" "
      v-model="inputValue"
      @input="$emit('input', inputValue)"
      :min="minVal"
      :max="maxVal"
      :name="name"
      :step="step"
    ></textarea>
    <span class="beInput__placeholder">{{ placeholder }}</span>
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
    "minVal",
    "maxVal",
    "name",
    "step",
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
  &.beInput_textarea {
    .beInput__item {
      padding: 19px 26px;
      height: auto;
    }
    .beInput__placeholder {
      top: 30px;
    }
  }
}
</style>
