const UPDATE_WINDOW_WIDTH = 'UPDATE_WINDOW_WIDTH'
const UPDATE_MENU_STATE = 'UPDATE_MENU_STATE'

export const state = () => ({
  menuOpen: true,
  screenWidth: null,
})
export const getters = {
  getWindowWidth: state => state.screenWidth,
  getMenuState: state => state.menuOpen,
}
export const actions = {
  resizeWindow({ commit }, data) {
    commit("UPDATE_WINDOW_WIDTH", data);
    commit("UPDATE_MENU_STATE");
  },
  changeMenuState({ commit }, data) {
    commit("UPDATE_MENU_STATE", data);
  },
}
export const mutations = {
  [UPDATE_WINDOW_WIDTH](state, data) {
    return (state.screenWidth = data);
  },
  [UPDATE_MENU_STATE](state, data) {
    let menuState = data === state.menuOpen ? !state.menuOpen : !!data;
    if (state.screenWidth > 1024) {
      menuState = true;
    }
    return (state.menuOpen = menuState);
  },
};
