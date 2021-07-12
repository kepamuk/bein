<template>
  <div class="about">
    <button class="go-back" @click.prevent="$router.go(-1)" type="button">
      <i class="icon-arrow-left-middle"></i>
    </button>
    <h1 class="page__title">
      <i class="page__title_icon icon-exchange"></i>
      {{ $route.meta.linkText }}
    </h1>
    <div class="container currency__info">
      <div
        class="
          card card--white
          row-flex
          align-items-center
          justify-content-between
          p30
          hold_xrp
        "
      >
        <div class="balance">
          <div class="balance__info">
            <div class="balance__title">
              <span class="text--primary">XRP</span>{{ "\xa0" }}HODL balance
            </div>
            <div class="balance__actual">
              <div class="atual__item">
                <small class="balance__currancy"
                  ><i class="icon-currancy"></i></small
                >{{ balanceXRPArray[0]
                }}<small>.{{ balanceXRPArray[1] || "00" }}</small>
              </div>
            </div>
            <beSelect
              class="refresh_select mt5"
              selectedItemClass="text--primary"
              selectPlaceholder="Change currency"
              :selectArray="refreshArr"
              :refreshIcon="true"
              v-model="refreshSelected"
              :transparent="true"
              :dropdownIcon="false"
            >
            </beSelect>
          </div>
        </div>
        <div class="btns">
          <beButton
            type="button"
            title="Invest"
            :outline="false"
            :white="false"
            :shadow="true"
            @click="createInvestmentOpen('xrp')"
            ><i class="icon-plus-outline" slot="icon-left"></i
          ></beButton>
        </div>
      </div>
      <div
        class="card card--white p30 balance hold_xrp__details"
        v-if="windowWidth > 767"
      >
        <div class="balance__actual border-between-items items-half flex-full">
          <div class="balance__info">
            <div class="balance__title font-normal">Daily P&L</div>
            <div class="balance__actual">
              <div class="atual__item text--primary">
                {{ balanceXRPArray[0]
                }}<small>.{{ balanceXRPArray[1] || "00" }} XRP</small>
              </div>
            </div>
          </div>
          <div class="balance__info">
            <div class="balance__title font-normal">
              <span class="mr5">Income for</span>
              <span
                class="text-underline text--primary datepicker__value"
                v-if="XRPDate"
              >
                <span v-if="XRPDate.start == XRPDate.end || !XRPDate.end">{{
                  XRPDate.start
                }}</span>
                <span v-else>{{ `${XRPDate.start}-${XRPDate.end}` }}</span>
                <i class="icon-close ml5 pointer" @click="XRPDate = null"></i>
              </span>
              <beSelect
                v-else
                class="income_select"
                selectedItemClass="text-underline text--primary"
                :selectArray="incomeListXRP"
                v-model="selectedIncomeItemXRP"
                :transparent="true"
              >
                <span slot="customField" @click="openDatepicker('xrp')"
                  >choose a date</span
                >
              </beSelect>
            </div>
            <div class="balance__actual">
              <div class="atual__item yesterday">
                {{ balanceXRPArray[0]
                }}<small>.{{ balanceXRPArray[1] || "00" }} XRP</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <beAccordeon v-else>
        <div slot="title">Details</div>
        <div class="balance__actual" slot="content">
          <div class="balance__info">
            <div class="balance__title">Daily P&L</div>
            <div class="balance__actual">
              <div class="atual__item text--primary">
                <small><i class="icon-currancy"></i></small>
                {{ balanceXRPArray[0]
                }}<small>.{{ balanceXRPArray[1] || "00" }}</small>
              </div>
            </div>
          </div>
          <div class="balance__info">
            <div class="balance__title font-normal">
              <span class="mr5">Income for</span>
              <span
                class="text-underline text--primary datepicker__value"
                v-if="XRPDate"
              >
                <span v-if="XRPDate.start == XRPDate.end || !XRPDate.end">{{
                  XRPDate.start
                }}</span>
                <span v-else>{{ `${XRPDate.start}-${XRPDate.end}` }}</span>
                <i class="icon-close ml5 pointer" @click="XRPDate = null"></i>
              </span>
              <beSelect
                v-else
                class="income_select"
                selectedItemClass="text-underline text--primary"
                :selectArray="incomeListXRP"
                v-model="selectedIncomeItemXRP"
                :transparent="true"
              >
                <span slot="customField" @click="openDatepicker('xrp')"
                  >choose a date</span
                >
              </beSelect>
            </div>
            <div class="balance__actual">
              <div class="atual__item yesterday">
                <small><i class="icon-currancy"></i></small>
                {{ balanceXRPArray[0]
                }}<small>.{{ balanceXRPArray[1] || "00" }}</small>
              </div>
            </div>
          </div>
        </div>
      </beAccordeon>
      <div
        class="
          card card--white
          row-flex
          align-items-center
          justify-content-between
          p30
          hold_usdx
        "
      >
        <div class="balance">
          <div class="balance__info">
            <div class="balance__title">
              <span class="text--purple">BIXRP</span>{{ "\xa0" }}HODL balance
            </div>
            <div class="balance__actual">
              <div class="atual__item">
                {{ balanceUSDXArray[0]
                }}<small>.{{ balanceUSDXArray[1] || "00" }} BIXRP</small>
              </div>
            </div>
          </div>
        </div>
        <div class="btns">
          <beButton
            type="button"
            title="Invest"
            :outline="false"
            :white="false"
            :shadow="true"
            @click="createInvestmentOpen('usdx')"
            ><i class="icon-plus-outline" slot="icon-left"></i
          ></beButton>
        </div>
      </div>
      <div
        class="card card--white p30 balance hold_usdx__details"
        v-if="windowWidth > 767"
      >
        <div class="balance__actual border-between-items items-half flex-full">
          <div class="balance__info">
            <div class="balance__title font-normal">Daily P&L</div>
            <div class="balance__actual">
              <div class="atual__item text--primary">
                {{ balanceUSDXArray[0]
                }}<small>.{{ balanceUSDXArray[1] || "00" }} BIXRP</small>
              </div>
            </div>
          </div>
          <div class="balance__info">
            <div class="balance__title font-normal">
              <span class="mr5">Income for</span>
              <span
                class="text-underline text--primary datepicker__value"
                v-if="USDXDate"
              >
                <span v-if="USDXDate.start == USDXDate.end || !USDXDate.end">{{
                  USDXDate.start
                }}</span>
                <span v-else>{{ `${USDXDate.start}-${USDXDate.end}` }}</span>
                <i class="icon-close ml5 pointer" @click="USDXDate = null"></i>
              </span>
              <beSelect
                v-else
                class="income_select"
                selectedItemClass="text-underline text--primary"
                :selectArray="incomeListUSDX"
                v-model="selectedIncomeItemUSDX"
                :transparent="true"
              >
                <span slot="customField" @click="openDatepicker('usdx')"
                  >choose a date</span
                >
              </beSelect>
            </div>
            <div class="balance__actual">
              <div class="atual__item yesterday">
                {{ balanceUSDXArray[0]
                }}<small>.{{ balanceUSDXArray[1] || "00" }} BIXRP</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <beAccordeon v-else>
        <div slot="title">Details</div>
        <div class="balance__actual" slot="content">
          <div class="balance__info">
            <div class="balance__title">Daily P&L</div>
            <div class="balance__actual">
              <div class="atual__item text--primary">
                {{ balanceUSDXArray[0]
                }}<small>.{{ balanceUSDXArray[1] || "00" }} BIXRP</small>
              </div>
            </div>
          </div>
          <div class="balance__info">
            <div class="balance__title">
              <span class="mr5">Income for</span>
              <span
                class="text-underline text--primary datepicker__value"
                v-if="USDXDate"
              >
                <span v-if="USDXDate.start == USDXDate.end || !USDXDate.end">{{
                  USDXDate.start
                }}</span>
                <span v-else>{{ `${USDXDate.start}-${USDXDate.end}` }}</span>
                <i class="icon-close ml5 pointer" @click="USDXDate = null"></i>
              </span>
              <beSelect
                v-else
                class="income_select"
                selectedItemClass="text-underline text--primary"
                :selectArray="incomeListUSDX"
                v-model="selectedIncomeItemUSDX"
                :transparent="true"
              >
                <span slot="customField" @click="openDatepicker('usdx')"
                  >choose a date</span
                >
              </beSelect>
            </div>
            <div class="balance__actual">
              <div class="atual__item yesterday">
                {{ balanceUSDXArray[0]
                }}<small>.{{ balanceUSDXArray[1] || "00" }} BIXRP</small>
              </div>
            </div>
          </div>
        </div>
      </beAccordeon>
    </div>
    <div class="pt30 pb15 row-flex filters__block">
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
        class="mr15"
      ></beSelect>
      <div class="info_btn">
        <button class="info_popup link" @click="$modal.show('how-it-works')">
          <strong><i class="icon-info"></i> How does Al work?</strong>
        </button>
      </div>
    </div>
    <div class="container tickets">
      <div class="row">
        <div class="col-flex col-3 card card--gradient card--bg-lines">
          <div class="card--title">
            <small><i class="icon-currancy"></i></small>
            {{ balanceXRPArray[0]
            }}<small>.{{ balanceXRPArray[1] || "00" }}</small>
          </div>
          <div class="card--info">
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-increase"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">102.78%</div>
                <p class="card--info-text">Profit</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-calendar"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">+244.37 / 15,021.00</div>
                <p class="card--info-text">Earned</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-wallet"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">9 янв, 22:47 - 10 янв 23:37</div>
                <p class="card--info-text">Deposit - End Date</p>
              </div>
            </div>
            <div class="card--info-item">
              <beInputCheckbox placeholder="Investment extension" :white="true">
                <bePrompt text="Ты шо дурачёк?"></bePrompt>
              </beInputCheckbox>
            </div>
          </div>
          <div class="pt20">
            <beButton
              type="button"
              title="In the work"
              :outline="true"
              :white="true"
              :shadow="false"
              class="full-width"
              ><i class="icon-coins" slot="icon-left"></i
            ></beButton>
          </div>
        </div>
        <div class="col-flex col-3 card card--gradient-purple card--bg-lines">
          <div class="card--title">
            {{ balanceXRPArray[0]
            }}<small>.{{ balanceXRPArray[1] || "00" }} BIXRP</small>
          </div>
          <div class="card--info">
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-increase"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">102.78%</div>
                <p class="card--info-text">Profit</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-calendar"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">+244.37 / 15,021.00</div>
                <p class="card--info-text">Earned</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-wallet"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">9 янв, 22:47 - 10 янв 23:37</div>
                <p class="card--info-text">Deposit - End Date</p>
              </div>
            </div>
            <div class="card--info-item">
              <beInputCheckbox placeholder="Investment extension" :white="true">
                <bePrompt text="Ты шо дурачёк?"></bePrompt>
              </beInputCheckbox>
            </div>
          </div>
          <div class="pt20">
            <beButton
              type="button"
              title="In the work"
              :outline="true"
              :white="true"
              :shadow="false"
              class="full-width"
              ><i class="icon-coins" slot="icon-left"></i
            ></beButton>
          </div>
        </div>
        <div class="col-flex col-3 card card--gradient-dark card--bg-lines">
          <div class="card--title">
            <small><i class="icon-currancy"></i></small>
            {{ balanceXRPArray[0]
            }}<small>.{{ balanceXRPArray[1] || "00" }}</small>
          </div>
          <div class="card--info">
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-increase"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">102.78%</div>
                <p class="card--info-text">Profit</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-calendar"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">+244.37 / 15,021.00</div>
                <p class="card--info-text">Earned</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-wallet"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">9 янв, 22:47 - 10 янв 23:37</div>
                <p class="card--info-text">Deposit - End Date</p>
              </div>
            </div>
          </div>
          <div class="pt20">
            <beButton
              type="button"
              title="Successfully"
              :outline="false"
              :white="false"
              :shadow="false"
              class="full-width"
              ><i class="icon-checked" slot="icon-left"></i
            ></beButton>
          </div>
        </div>
        <div class="col-flex col-3 card card--gradient card--bg-lines">
          <div class="card--title">
            <small><i class="icon-currancy"></i></small>
            {{ balanceXRPArray[0]
            }}<small>.{{ balanceXRPArray[1] || "00" }}</small>
          </div>
          <div class="card--info">
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-increase"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">102.78%</div>
                <p class="card--info-text">Profit</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-calendar"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">+244.37 / 15,021.00</div>
                <p class="card--info-text">Earned</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-wallet"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">9 янв, 22:47 - 10 янв 23:37</div>
                <p class="card--info-text">Deposit - End Date</p>
              </div>
            </div>
            <div class="card--info-item">
              <beInputCheckbox placeholder="Investment extension" :white="true">
                <bePrompt text="Ты шо дурачёк?"></bePrompt>
              </beInputCheckbox>
            </div>
          </div>
          <div class="pt20">
            <beButton
              type="button"
              title="In the work"
              :outline="true"
              :white="true"
              :shadow="false"
              class="full-width"
              ><i class="icon-coins" slot="icon-left"></i
            ></beButton>
          </div>
        </div>
        <div class="col-flex col-3 card card--gradient card--bg-lines">
          <div class="card--title">
            <small><i class="icon-currancy"></i></small>
            {{ balanceXRPArray[0]
            }}<small>.{{ balanceXRPArray[1] || "00" }}</small>
          </div>
          <div class="card--info">
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-increase"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">102.78%</div>
                <p class="card--info-text">Profit</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-calendar"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">+244.37 / 15,021.00</div>
                <p class="card--info-text">Earned</p>
              </div>
            </div>
            <div class="card--info-item">
              <div class="card--info-icon">
                <i class="icon-wallet"></i>
              </div>
              <div class="card--info-text">
                <div class="card--info-title">9 янв, 22:47 - 10 янв 23:37</div>
                <p class="card--info-text">Deposit - End Date</p>
              </div>
            </div>
            <div class="card--info-item">
              <beInputCheckbox placeholder="Investment extension" :white="true">
                <bePrompt text="Ты шо дурачёк?"></bePrompt>
              </beInputCheckbox>
            </div>
          </div>
          <div class="pt20">
            <beButton
              type="button"
              title="In the work"
              :outline="true"
              :white="true"
              :shadow="false"
              class="full-width"
              ><i class="icon-coins" slot="icon-left"></i
            ></beButton>
          </div>
        </div>
        <button class="col-3 create_btn" @click="createInvestmentOpen()">
          <span class="icon"></span>
          <span class="text">Invest</span>
        </button>
      </div>
    </div>
    <modal
      name="create-investment-modal"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <createInvestment :currency="currencyValue"></createInvestment>
    </modal>
    <modal
      name="balance-planner"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <balancePlanner></balancePlanner>
    </modal>
    <modal
      name="how-it-works"
      width="90%"
      :maxWidth="1055"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <howItWorks></howItWorks>
    </modal>
    <modal
      name="datepicker"
      width="90%"
      :maxWidth="400"
      height="auto"
      :scrollable="false"
      :adaptive="true"
      class="datepicker-modal"
    >
      <div class="beModal__header">
        <h2 class="date-modal-title">Chose a date</h2>
        <div class="beModal__close">
          <div slot="top-right">
            <button @click="canselDatepicker">
              <i class="icon-close"></i>
            </button>
          </div>
        </div>
      </div>
      <FunctionalCalendar
        class="calendar"
        v-model="getDate"
        :is-date-range="true"
        :isDatePicker="false"
        arrowsPosition="right"
        titlePosition="left"
      ></FunctionalCalendar>
      <div class="beModal__footer">
        <button
          class="btn full-width"
          type="button"
          @click="$modal.hide('datepicker')"
        >
          Confirm
        </button>
      </div>
    </modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  layout: "lClient",
  data() {
    return {
      windowWidth: null,
      sorted: false,
      currencyValue: null,
      XRPDate: null,
      USDXDate: null,
      currentDatepicker: null,
      getDate: {},
      refreshArr: [
        { value: 1, label: "Select item 1" },
        { value: 2, label: "Select item 2" },
        { value: 3, label: "Select item 3" },
        { value: 4, label: "Select item 4" },
      ],
      refreshSelected: {},
      XRP: {
        balance: 12021.23,
        investment: 2256.15,
        profit: 532.23,
      },
      USDX: {
        balance: 9854,
        investment: 3258.15,
        profit: 152.23,
      },
      sortingList: [
        { value: 1, label: "By transaction date" },
        { value: 2, label: "By sum" },
        { value: 3, label: "By wallet" },
        { value: 4, label: "By status" },
      ],
      selectedSortItem: { value: 1, label: "By transaction date" },
      incomeListXRP: [
        { value: 1, label: "yesterday" },
        { value: 2, label: "week" },
        { value: 3, label: "month" },
      ],
      selectedIncomeItemXRP: { value: 1, label: "yesterday" },
      incomeListUSDX: [
        { value: 1, label: "yesterday" },
        { value: 2, label: "week" },
        { value: 3, label: "month" },
      ],
      selectedIncomeItemUSDX: { value: 1, label: "yesterday" },
    };
  },
  watch: {
    getWindowWidth(val) {
      this.windowWidth = val;
    },
    getDate: {
      deep: true,
      handler(val) {
        this.currentDatepicker == "xrp"
          ? (this.XRPDate = val.dateRange)
          : (this.USDXDate = val.dateRange);
      },
    },
  },
  computed: {
    ...mapGetters({
      getWindowWidth: "menu/getWindowWidth",
    }),
    balanceXRPArray() {
      return this.formatCurency(this.XRP.balance).split(".");
    },
    balanceUSDXArray() {
      return this.formatCurency(this.USDX.balance).split(".");
    },
    getDateRangeUSDXstartDate() {
      return this.USDXDate ? this.USDXDate.dateRange.start : "";
    },
    getDateRangeUSDXendDate() {
      return this.USDXDate ? this.USDXDate?.dateRange.end : "";
    },
  },
  created() {
    this.windowWidth = document.body.clientWidth;
  },
  methods: {
    createInvestmentOpen(currancy) {
      this.currencyValue = currancy;
      this.$modal.show("create-investment-modal");
    },
    openDatepicker(currency) {
      this.getDate = {};
      this.currentDatepicker = currency;
      this.$modal.show("datepicker");
    },
    canselDatepicker() {
      this.$modal.hide("datepicker");
      this.currentDatepicker == "xrp"
        ? (this.XRPDate = null)
        : (this.USDXDate = null);
    },
  },
};
</script>
