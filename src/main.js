import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VModal from 'vue-js-modal'

import '@/includes/styles/global.scss';
import '@/includes/fonts/gilroy/gilroy.scss';
import '@/includes/fonts/fontello/fontello.scss';


import beButton from '@/components/beButton';
import bePrompt from '@/components/bePrompt';
import beSelect from '@/components/beSelect';
import beCopyText from '@/components/beCopyText';
import beInput from '@/components/beInput';
import beInputRadio from '@/components/beInputRadio';
import beInputCheckbox from '@/components/beInputCheckbox';
import beAccordeon from '@/components/beAccordeon';

import FunctionalCalendar from 'vue-functional-calendar';
Vue.use(FunctionalCalendar, {
    dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
});

Vue.use(VModal, {dialog: true, dynamic: true});
Vue.component('beButton', beButton);
Vue.component('bePrompt', bePrompt);
Vue.component('beSelect', beSelect);
Vue.component('beCopyText', beCopyText);
Vue.component('beInput', beInput);
Vue.component('beInputRadio', beInputRadio);
Vue.component('beInputCheckbox', beInputCheckbox);
Vue.component('beAccordeon', beAccordeon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
