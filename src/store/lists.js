export const state = () => ({
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
})
export const getters = {
  getHistory: (state) => state.history,
  getMonths: (state) => state.months,
  getSelectList: (state) => state.selectItems,
  getSelectedItem: (state) => state.selectedItem,
  getTest: (state) => state.test,
}
