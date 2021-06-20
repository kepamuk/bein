import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		menuOpen: false,
		screenWidth: null,
		XRP: {
			balance: 1256.45
		},
		USDX: {
			balance: 2560.45
		},
		selectItems: [
			{value: 1, label: 'Item 1'},
			{value: 2, label: 'Item 2'},
			{value: 3, label: 'Item 3'},
			{value: 4, label: 'Item 4'},
			{value: 5, label: 'Item 5'},
			{value: 6, label: 'Item 6'}
		],
		selectedItem: {value: 2, label: 'Item 2'},
		history: [
			{
				id: 1,
				date: '20/20/2020',
				status: 'Rejected',
				summ: '+320',
				buttonText: 'Wallet replenishment',
				currency: 1,
				waletName: 'Walet Name'
			},
			{
				id: 2,
				date: '20/20/2020',
				status: 'Approved',
				summ: '+320',
				buttonText: 'Wallet replenishment',
				currency: 2,
				waletName: 'Walet Name'
			},
			{
				id: 3,
				date: '20/20/2020',
				status: 'Waiting',
				summ: '+320',
				buttonText: 'Funds output',
				currency: 1,
				waletName: 'Walet Name'
			},
			{
				id: 4,
				date: '20/20/2020',
				status: 'Approved',
				summ: '+320',
				buttonText: 'Funds output',
				currency: 2,
				waletName: 'Walet Name'
			},
			{
				id: 5,
				date: '20/20/2020',
				status: 'Waiting',
				summ: '+320',
				buttonText: 'Funds output',
				currency: 1,
				waletName: 'Walet Name'
			},
			{
				id: 6,
				date: '20/20/2020',
				status: 'Approved',
				summ: '+320',
				buttonText: 'Funds output',
				currency: 1,
				waletName: 'Walet Name'
			},
		],
		months: [
			{value: 1, label: 'January'},
			{value: 2, label: 'February'},
			{value: 3, label: 'March'},
			{value: 4, label: 'April'},
			{value: 5, label: 'May'},
			{value: 6, label: 'June'},
			{value: 7, label: 'July'},
			{value: 8, label: 'August'},
			{value: 9, label: 'September'},
			{value: 10, label: 'October'},
			{value: 11, label: 'November'},
			{value: 12, label: 'December'},
		]
	},
	getters: {
		getSelectList: state => state.selectItems,
		getSelectedItem: state => state.selectedItem,
		getXRP: state => state.XRP,
		getUSDX: state => state.USDX,
		getHistory: state => state.history,
		getWindowWidth: state=> state.screenWidth,
		getMonths: state => state.months,
		getMenuState: state => state.menuOpen
	},
	mutations: {
		UPDAATE_WINDOW_WIDTH: (state, data) => {
			return state.screenWidth = data;
		},
		UPDATE_MENU_STATE: (state, data) => {
			let menuState = data === state.menuOpen ? !state.menuOpen : !!data; 
			if(state.screenWidth > 1024){
				menuState = true;
			}
			return state.menuOpen = menuState;
		}
	},
	actions: {
		resizeWindow: ({commit}, data)=>{
			commit('UPDAATE_WINDOW_WIDTH', data);
			commit('UPDATE_MENU_STATE')
		},
		changeMenuState: ({commit}, data) => {
			commit('UPDATE_MENU_STATE', data)
		},
	},
	modules: {},
});
