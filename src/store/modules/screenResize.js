export default {
  state: {
    menuOpen: false,
    screenWidth: null,
  },
  getters: {
    getWindowWidth: (state) => state.screenWidth,
    getMenuState: (state) => state.menuOpen,
  },
  actions: {
    resizeWindow: ({ commit }, data) => {
      commit("UPDAATE_WINDOW_WIDTH", data);
      commit("UPDATE_MENU_STATE");
    },
    changeMenuState: ({ commit }, data) => {
      commit("UPDATE_MENU_STATE", data);
    },
  },
  mutations: {
    UPDAATE_WINDOW_WIDTH: (state, data) => {
      return (state.screenWidth = data);
    },
    UPDATE_MENU_STATE: (state, data) => {
      let menuState = data === state.menuOpen ? !state.menuOpen : !!data;
      if (state.screenWidth > 1024) {
        menuState = true;
      }
      return (state.menuOpen = menuState);
    },
  },
};
