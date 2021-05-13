import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
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
	},
	getters: {
		getSelectList: state => state.selectItems,
		getSelectedItem: state => state.selectedItem,
		getXRP: state => state.XRP,
		getUSDX: state => state.USDX,
		getHistory: state => state.history
	},
	mutations: {},
	actions: {},
	modules: {},
});
