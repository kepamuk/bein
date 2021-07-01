import axios from "axios";

export default {
  state: {
    settings: {
      user: {},
    },
  },
  getters: {
    getSettings: (state) => state.settings,
  },
  actions: {
    user: ({ commit }) => {
      axios
        .post("http://localhost:5000/api/user/access-token-user")
        .then((res) => {
          commit("USER", res.data);
        });
    },
    verification: ({ commit }, sss) => {
      console.log(sss);
      console.log(1234);
      commit("SSS", 123);
    },
  },
  mutations: {
    USER: (state, data) => {
      return (state.settings = data);
    },
  },
};
