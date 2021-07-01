import Vue from "vue";
import Vuex from "vuex";
import currency from "./modules/currency";
import screenResize from "./modules/screenResize";
import exchangeHistory from "./modules/exchangeHistory";
import settings from "./modules/settings";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    history: [
      {
        id: 1,
        date: "20/20/2020",
        status: "Rejected",
        summ: "+320",
        buttonText: "Wallet replenishment",
        currency: 1,
        waletName: "Walet Name",
      },
      {
        id: 2,
        date: "20/20/2020",
        status: "Approved",
        summ: "+320",
        buttonText: "Wallet replenishment",
        currency: 2,
        waletName: "Walet Name",
      },
      {
        id: 3,
        date: "20/20/2020",
        status: "Waiting",
        summ: "+320",
        buttonText: "Funds output",
        currency: 1,
        waletName: "Walet Name",
      },
      {
        id: 4,
        date: "20/20/2020",
        status: "Approved",
        summ: "+320",
        buttonText: "Funds output",
        currency: 2,
        waletName: "Walet Name",
      },
      {
        id: 5,
        date: "20/20/2020",
        status: "Waiting",
        summ: "+320",
        buttonText: "Funds output",
        currency: 1,
        waletName: "Walet Name",
      },
      {
        id: 6,
        date: "20/20/2020",
        status: "Approved",
        summ: "+320",
        buttonText: "Funds output",
        currency: 1,
        waletName: "Walet Name",
      },
    ],
    months: [
      { value: 1, label: "January" },
      { value: 2, label: "February" },
      { value: 3, label: "March" },
      { value: 4, label: "April" },
      { value: 5, label: "May" },
      { value: 6, label: "June" },
      { value: 7, label: "July" },
      { value: 8, label: "August" },
      { value: 9, label: "September" },
      { value: 10, label: "October" },
      { value: 11, label: "November" },
      { value: 12, label: "December" },
    ],
    selectItems: [
      { value: 1, label: "Item 1" },
      { value: 2, label: "Item 2" },
      { value: 3, label: "Item 3" },
      { value: 4, label: "Item 4" },
      { value: 5, label: "Item 5" },
      { value: 6, label: "Item 6" },
    ],
    selectedItem: { value: 2, label: "Item 2" },
    test: null,
  },
  getters: {
    getHistory: (state) => state.history,
    getMonths: (state) => state.months,
    getSelectList: (state) => state.selectItems,
    getSelectedItem: (state) => state.selectedItem,
    getTest: (state) => state.test,
  },
  mutations: {
    TEST: (state, data) => {
      return (state.test = data);
    },
  },
  actions: {
    test: ({ commit }) => {
      axios.post("http://localhost:5000/postdata").then((res) => {
        commit("TEST", res.data);
      });
    },
  },
  modules: {
    currency,
    screenResize,
    exchangeHistory,
    settings,
  },
});
