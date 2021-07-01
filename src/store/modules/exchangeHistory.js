export default {
    state: {
      sortingList: [
        {value: 1, label: 'By transaction date'},
        {value: 2, label: 'By status'},
      ],
      selectedSortItem: {value: 1, label: 'By transaction date'},
      exchangeHistory: {
        'Apr 10, 2021': [
          {
            id: 1,
            from: '-10.214 XRP',
            to: '+90.78 BIXRP',
            usd: '$102.83',
            status: 'complete'
          },
          {
            id: 2,
            from: '-10.214 XRP',
            to: '+90.78 BIXRP',
            usd: '$102.83',
            status: 'rejected'
          },
          {
            id: 3,
            from: '-10.214 XRP',
            to: '+90.78 BIXRP',
            usd: '$102.83',
            status: 'waiting'
          }
        ],
        'Apr 11, 2021': [{
          id: 4,
          from: '-10.214 XRP',
          to: '+90.78 BIXRP',
          usd: '$102.83',
          status: 'rejected'
        }],
        'Apr 12, 2021': [{
          id: 5,
          from: '-10.214 XRP',
          to: '+90.78 BIXRP',
          usd: '$102.83',
          status: 'rejected'
        }],
      }
    },
    getters: {
      getExchangeHistory: state => state.exchangeHistory
    },
    actions: {},
    mutations: {}
}