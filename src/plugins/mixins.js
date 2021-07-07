import Vue from 'vue'

const mixin = {
  methods: {
    formatCurency(curency) {
      let formated = new Intl.NumberFormat('en-IN').format(curency);
      return formated;
    }
  }
}

Vue.mixin(mixin)
