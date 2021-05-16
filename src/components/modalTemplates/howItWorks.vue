<template>
    <div class="beModal">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('how-it-works')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="beModal__body">
            <h2 class="beModal__title">How does AI work? <small class="dot--left text--alert ml10">Live</small></h2>
            <vueCustomScrollbar 
                class="table_scroll rail__normal"
                :settings="{
                    wheelPropagation: false
                }"
            >
                <table class="full-width table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Exchange / rate</th>
                            <th>Currency pair</th>
                            <th>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="row in rows" :key="row">
                            <td class="text--grey">21.03.2021  |  10:02</td>
                            <td>
                                <div class="exchange">
                                    <span class="exchange__item">
                                        <img src="@/assets/binance.png" alt="">
                                        <strong>Binance</strong>  <span class="text--grey ml5">5.00001</span>
                                    </span>
                                    <span class="exchange__item">
                                        <img src="@/assets/kraken.png" alt="">
                                        <strong>Kraken</strong> <span class="text--grey ml5">3.939900</span>
                                    </span>
                                </div>
                            </td>
                            <td><strong>XRP/ BTC</strong></td>
                            <td class="text--success">+18%</td>
                        </tr>
                    </tbody>
                </table>
            </vueCustomScrollbar>
        </div>
        <div class="beModal__footer">
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import {formatCurency} from '@/helpers/helpers'
import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
    data: ()=>({
        rows: 50
    }),
    components:{vueCustomScrollbar},
    computed: {
        ...mapGetters([
            'getXRP',
            'getUSDX'
        ]),
        balanceArr(){
			return formatCurency(this.getXRP.balance).split('.');
        }
    },
}
</script>
<style scoped lang="scss">
.table_scroll{
    width: calc(100% + 60px);
    height: 380px;
    padding: 0 30px;
    margin-left: -30px;
    @media(max-width: 767px){
        width: calc(100% + 30px);
        padding: 0 15px;
        margin-left: -15px;
    }
}
.table{
    border-collapse: collapse;
    min-width: 700px;
    @media(max-width: 767px){
        font-size: 14px;
    }
    tbody{
        tr{
            border-bottom: 1px solid #C4C4C4;
        }
    }
    th{
        color: rgba(#0B111A, .5);
        font-weight: 500;
        text-align: left;
        padding: 5px 0;
        &:last-child{
            text-align: right;
        }
    }
    td{
        padding: 10px 0;
        &:last-child{
            text-align: right;
        }
    }
}
.exchange{
    display: flex;
    align-items: center;
    &__item{
        display: flex;
        align-items: center;
        img{
            display: block;
            width: 30px;
            height: auto;
            margin-right: 10px;
        }
        & + &{
            position: relative;
            padding-left: 30px;
            margin-left: 30px;
            &:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                width: 15px;
                border: 2px solid rgba(#0B111A, .5);
                border-radius: 2px;
                transform: translate(-50%, -50%);
            }
        }
    }
}
</style>