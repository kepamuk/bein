<template>
  <label class="input_file" :class="{ 'is-button': isButton }">
    <input
      type="file"
      @change="inputChange($event)"
      :accept="formats"
      :multiple="multiple"
      class="input_file__item"
    />
    <span class="input_file__container">
      <span class="input_file__empty" v-if="!fileName">
        <slot name="attach-icon"><i class="icon-submit-progress"></i></slot>
        {{ label }}
      </span>
      <span class="input_file__name" v-else>{{ fileName }}</span>
      <span v-if="fileName" class="input_file__clear">
        <button type="button" class="btn-clear" @click.prevent="clearInput">
          <slot name="delete">Delete</slot>
        </button>
      </span>
    </span>
  </label>
</template>
<script>
export default {
  name: "beInputFile",
  data() {
    return {
      files: [],
      inputVal: [],
    };
  },
  props: {
    multiple: {
      default: false,
    },
    formats: {
      default:
        "image/jpeg, image/png, image/svg, image/svg+xml, application/pdf",
    },
    label: {
      default: "Download file",
    },
    isButton: {
      default: true,
    },
  },
  computed: {
    fileName() {
      let file = "";
      if (this.inputVal.length > 1) {
        file = `${this.inputVal.length} files chosen`;
      } else if (this.inputVal.length == 1) {
        file = this.inputVal[0].name;
      }
      return file;
    },
  },
  methods: {
    inputChange(event) {
      this.files = [];
      this.inputVal = event.target.files;
      for (let file of this.inputVal) {
        (function (files) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            files.push(reader.result);
          };
        })(this.files);
      }
      this.$emit("input", this.files);
    },
    clearInput() {
      this.files = [];
      this.inputVal = [];
      this.$emit("input", this.files);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/partials/_colors.scss";
.input_file {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: rgba($primary, 0.1);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  line-height: 1;
  color: $primary;
  transition: 0.3s ease;
  &:hover {
    background-color: rgba($primary, 0.3);
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    i {
      font-size: 22px;
      margin-right: 10px;
    }
  }
  &__item {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }
  &__empty {
    display: flex;
    align-items: center;
  }
  &__clear {
    margin-left: 15px;
  }
  .btn-clear {
    display: inline-flex;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
    background-color: rgba($primary, 0.2);
    height: 30px;
    border-radius: 5px;

    font-weight: 600;
    line-height: 1;
  }
  &:not(.is-button) {
    height: auto;
    padding: 0px;
    background-color: transparent;
    color: $grey;
    &:hover {
      color: $primary;
    }
    .btn-clear {
      height: auto;
      padding: 0;
      background-color: transparent;
      i {
        font-size: 0.8em;
        margin-right: 0px;
      }
    }
  }
}
</style>
