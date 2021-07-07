<template>
  <div class="exchange_history_page">
    <div class="card card--white">
      <button
        class="go-back text--grey"
        @click.prevent="$router.go(-1)"
        type="button"
      >
        <i class="icon-arrow-left-middle"> </i><span>Back</span>
      </button>
      <h1 class="my15">Exchange history</h1>
      <div class="row-flex">
        <div class="sorting__item mr5">
          <button type="button" @click="sorted = !sorted">
            <i class="icon-ascending-sorting" v-if="!sorted"></i>
            <i class="icon-ascending-sorting-up" v-else></i>
          </button>
        </div>
        <beSelect
          :selectArray="sortingList"
          v-model="selectedSortItem"
          :transparent="true"
        ></beSelect>
      </div>
    </div>
    <div v-for="(item, date) in exchangeHistory" :key="date">
      <div class="my30">
        <h2 class="block__title">{{ date }}</h2>
      </div>
      <div class="exchange_history">
        <div
          class="card card--white"
          v-for="exchangeItem in item"
          :key="exchangeItem.id"
        >
          <div class="exchange_history__item">
            <div class="exchange_history__from_to">
              <div class="exchange_history__from xrp">
                <div class="currency__icon xrp">
                  <i class="icon-currancy"></i>
                </div>
                <div class="currency__amount">{{ exchangeItem.from }}</div>
              </div>
              <div class="icon_transfer">
                <i class="icon-arrow-right-middle"></i>
              </div>
              <div class="exchange_history__to usdx">
                <div class="currency__icon usdx">
                  <img src="/images/balance-white.svg" alt="" />
                </div>
                <div class="currency__amount">{{ exchangeItem.to }}</div>
              </div>
            </div>
            <div
              class="exchange_history__amount_status"
              :class="exchangeItem.status"
            >
              <div class="exchange_history__amount">{{ exchangeItem.usd }}</div>
              <div class="exchange_history__status">
                {{ exchangeItem.status }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sorted: false,
      exchangeHistory: {
        "Apr 10, 2021": [
          {
            id: 1,
            from: "-10.214 XRP",
            to: "+90.78 BIXRP",
            usd: "$102.83",
            status: "complete",
          },
          {
            id: 2,
            from: "-10.214 XRP",
            to: "+90.78 BIXRP",
            usd: "$102.83",
            status: "rejected",
          },
          {
            id: 3,
            from: "-10.214 XRP",
            to: "+90.78 BIXRP",
            usd: "$102.83",
            status: "waiting",
          },
        ],
        "Apr 11, 2021": [
          {
            id: 4,
            from: "-10.214 XRP",
            to: "+90.78 BIXRP",
            usd: "$102.83",
            status: "rejected",
          },
        ],
        "Apr 12, 2021": [
          {
            id: 5,
            from: "-10.214 XRP",
            to: "+90.78 BIXRP",
            usd: "$102.83",
            status: "rejected",
          },
        ],
      },
      sortingList: [
        { value: 1, label: "By transaction date" },
        { value: 2, label: "By status" },
      ],
      selectedSortItem: { value: 1, label: "By transaction date" },
    };
  },
};
</script>
