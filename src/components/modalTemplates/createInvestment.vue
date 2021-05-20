<template>
    <div class="create_investment beModal">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('create-investment-modal')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <vueCustomScrollbar 
            class="modal_scroll rail__normal"
            :settings="{
                wheelPropagation: false
            }"
        >
            <div class="beModal__body">
                <h2 class="beModal__title">Creation of investments</h2>
                <div class="step mb20">
                    <h4><strong>01. Choose a Wallet</strong></h4>
                    <beSelect 
                        :selectArray="selectList"
                        v-model="selectedItem"
                        class="wallet_select"
                    >
                        <span slot="small_text">X 354.12</span>
                    </beSelect>
                </div>
                <div class="step mb20">
                    <h4><strong>02. Enter the deposit amount</strong></h4>
                    <beInput
                        type="number"
                        class="full-width"
                        placeholder="The deposit amount"
                        :transparent="false"
                        step="0.01"
                        v-model="currencyAmount"
                    ></beInput>
                </div>
                <div class="step mb30">
                    <h4><strong>03. Select the duration of the investment</strong></h4>
                    <div class="duration">
                        <beInputRadio
                            class="duration__radio"
                            name="durationRadio"
                            :button="true"
                            placeholder="1 mon"
                            value="1"
                            v-model="selectedRadio"
                        ></beInputRadio>
                        <beInputRadio 
                            class="duration__radio"
                            name="durationRadio"
                            :button="true"
                            placeholder="3 mon"
                            value="2"
                            v-model="selectedRadio"
                        ></beInputRadio>
                        <beInputRadio 
                            class="duration__radio"
                            name="durationRadio"
                            :button="true"
                            placeholder="6 mon"
                            value="3"
                            v-model="selectedRadio"
                        ></beInputRadio>
                    </div>
                    <beInputCheckbox 
                        class="mt20"
                        name="restartCheckbox"
                        :button="true"
                        placeholder="Restart automatically"
                        value="4"
                        v-model="selectedRestart"
                    ></beInputCheckbox>
                </div>
            </div>
            <div class="rejected_earnings">
                <h4 class="rejected_earnings__title">Projected earnings</h4>
                <p class="rejected_earnings__value">0,2% <small>/ daily</small></p>
            </div>
            <div class="info_block">
                <p class="mb15">
                    <i class="icon-loyalty-card text--primary"></i> You will earn: 
                    <span class="text--success">+3.198 XRP</span> 
                    <bePrompt class="text--primary ml10" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit a, doloribus tenetur ipsum eveniet incidunt rem totam labore eos ut."></bePrompt>
                </p>
                <p><i class="icon-ticket text--primary"></i> You will receive  <span class="text--primary">122 giveaway tickets</span> </p>
            </div>
        </vueCustomScrollbar>
        <div class="beModal__footer">
            <beButton
                title="Invest"
                class="full-width"
                :shadow="true"
            >
            </beButton>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import {formatCurency} from '@/helpers/helpers'
import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
    data:()=>({
        selectList: null,
        selectedItem: null,
        selectedRadio: 1,
        selectedRestart: 4,
        inputVal: 0,
        XRP: null,
        USDX: null,
        currencyAmount: null
    }),
    components:{
        vueCustomScrollbar
    },
    props:{
        currency: {
            default: '',
            type: String,
            required: true
        }
    },
    watch:{
        currencyAmount(val){
            if(val > this.getXRP.balance){
                this.openBalancePlanner();
                return;
            }
        }
    },
    computed: {
        ...mapGetters([
            'getSelectList',
            'getSelectedItem',
            'getXRP',
            'getUSDX'
        ]),
        xrpToUsd(){
			return formatCurency(this.inputVal * 2).split('.');
        }
    },
    created(){
        this.XRP = this.getXRP;
        this.USDX = this.getUSDX;
        this.selectList = this.getSelectList;
        this.selectedItem = this.getSelectedItem;
    },
    methods: {
        openBalancePlanner(){
            this.$modal.show('balance-planner');
        }
    }
}
</script>
<style lang="scss">
.modal_scroll{
    height: calc(90vh - 185px);
    @media (max-width: 1600px) {
        height: calc(90vh - 150px);
    }
}
.step{
    h4{
        margin-bottom: 22px;
        font-weight: 500;
    }
    .wallet_select{
        margin-bottom: 0px;
    }
}
.duration{
    display: flex;
    margin: 0 -5px;
    &__radio{
        flex-grow: 1;
        width: calc(100% + 10px);
        margin: 0 5px;
    }
}
.rejected_earnings{
    padding: 30px 55px;
    border: none;
    border-top: 2px dashed rgba(#0B111A, .5);
    border-bottom: 2px dashed rgba(#0B111A, .5);
    @media(max-width: 767px){
        padding: 30px 30px;
    }
    &__title{
        color: rgba(#0B111A, .7);
        font-weight: 500;
    }
    &__value{
        font-size: 36px;
        font-weight: 400;
        margin-top: 15px;
        color: #2864FF;
    }
}
.info_block{
    padding: 30px 55px 0px;
    @media(max-width: 767px){
        padding: 30px 30px 0;
    }
}
</style>