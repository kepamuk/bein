<template>
    <div class="exchange">
		<button class="go-back" @click.prevent="$router.go(-1)" type="button">
            <i class="icon-arrow-left-middle"></i>
		</button>
        <h1 class="page__title">
            <i :class="$route.meta.icon" class="page__title_icon"></i> 
            {{$route.name}}
        </h1>
        <div class="card card--white pb20">
            <h2 class="mb30">{{$route.name}}</h2>
            <div class="exchange_cards" :class="{reversed: reverse}">
                <div class="exchange_cards__item exchange_card__xrp">
                    <div class="row-flex align-items-center card card--gradient ">
                        <div class="exchange_cards__icon">
                            <i class="icon-currancy"></i>
                        </div>
                        <div class="exchange_cards__info">
                            <beSelect
                                class="wallet__select mb5"
                                :selectArray="exchangeWalletsXRP"
                                v-model="exchangeWalletSelectedXRP"
                                :transparent="true"
                            ></beSelect>
                            <p>{{selectedWalletAmountXRP}} <span class="text--white50">| ${{selectedWalletXRPUSDAmount}} USD</span></p>
                        </div>
                    </div>
                    <div class="mt15">
                        <beInputRadio
                            class="exchange__radio"
                            inputClass="radioGroup"
                            name="exchangeRadioXRP"
                            :button="true"
                            placeholder="MAX"
                            value="1"
                            v-model="selectedRadioXRP"
                        ></beInputRadio>
                        <beInputRadio
                            class="exchange__radio"
                            inputClass="radioGroup"
                            name="exchangeRadioXRP"
                            :button="true"
                            placeholder="Half"
                            value="2"
                            v-model="selectedRadioXRP"
                        ></beInputRadio>
                        <beInputRadio
                            class="exchange__radio"
                            inputClass="radioGroup"
                            name="exchangeRadioXRP"
                            :button="true"
                            placeholder="MIN"
                            value="3"
                            v-model="selectedRadioXRP"
                        ></beInputRadio>
                    </div>
                    <div class="mt40">
                        <beInput 
                            type="number"
                            class="xrp_exchange full-width"
                            placeholder="0"
                            :transparent="true"
                            v-model="XRPExchange"
                        >
                            <span slot="right">XRP</span>
                        </beInput>
                        <div class="xrp_to_usd">
                            <div class="converted_value">{{xrpToUsd[0]}}<small>.{{xrpToUsd[1] || '00'}}</small></div>
                            <div class="convert_to_currency">USD</div>
                        </div>
                    </div>
                </div>
                <div class="data_transfer_icon pointer" @click="reverse = !reverse"><i class="icon-data-transfer"></i></div>
                <div class="exchange_cards__item exchange_card__usdx">
                    <div class="card card--gradient-purple row-flex align-items-center">
                        <div class="exchange_cards__icon">
                            <img src="@/assets/balance.svg" alt="">
                        </div>
                        <div class="exchange_cards__info">
                            <p class="mb5">USDX Be in coin</p>
                            <p>0.00 USDX <span class="text--white50">| $0.00 USD</span></p>
                        </div>
                    </div>
                    <div class="mt15">
                        <beInputRadio
                            class="exchange__radio"
                            inputClass="radioGroup"
                            name="exchangeRadioUSDX"
                            :button="true"
                            placeholder="MAX"
                            value="1"
                            v-model="selectedRadioUSDX"
                        ></beInputRadio>
                        <beInputRadio
                            class="exchange__radio"
                            inputClass="radioGroup"
                            name="exchangeRadioUSDX"
                            :button="true"
                            placeholder="Half"
                            value="2"
                            v-model="selectedRadioUSDX"
                        ></beInputRadio>
                        <beInputRadio
                            class="exchange__radio"
                            inputClass="radioGroup"
                            name="exchangeRadioUSDX"
                            :button="true"
                            placeholder="MIN"
                            value="3"
                            v-model="selectedRadioUSDX"
                        ></beInputRadio>
                    </div>
                    <div class="mt40">
                        <beInput 
                            type="number"
                            class="usdx_exchange full-width"
                            placeholder="0"
                            :transparent="true"
                            v-model="USDXExchange"
                        >
                            <span slot="right">USDX</span>
                        </beInput>
                        <div class="xrp_to_usd">
                            <div class="converted_value">{{usdxToUsd[0]}}<small>.{{usdxToUsd[1] || '00'}}</small></div>
                            <div class="convert_to_currency">USD</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="exchange_info row justify-content-center mt30">
                <div class="card card--white col-6 items-half exchange_info__container" :class="{reversed: reverse}">
                    <div class="exchange_info__item">
                        <h5 class="exchange_info__title">You are <br />exchanging</h5>
                        <p class="exchange_info__currency_amount">{{XRPExchange || 0.00}} <small>XRP</small></p>
                        <p class="exchange_info__currency_amount_usd">${{xrpToUsd[0]}}<small>.{{xrpToUsd[1] || '00'}}</small></p>
                    </div>
                    <div class="exchange_info__icon"><i class="icon-arrow-right-middle"></i></div>
                    <div class="exchange_info__item">
                        <h5 class="exchange_info__title">You will <br />receive</h5>
                        <p class="exchange_info__currency_amount">{{USDXExchange || 0.00}} <small>USDX</small></p>
                        <p class="exchange_info__currency_amount_usd">${{usdxToUsd[0]}}<small>.{{usdxToUsd[1] || '00'}}</small></p>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <beButton
                        title="Exchange"
                    ></beButton>
                </div>
                <div class="col-12 row-flex justify-content-between mt50 box_info">
                    <p class="text--grey">1 XRP = 1.000123 USDX</p>
                    <router-link :to="{name: 'Exchange History'}" class="more_link text--primary"><span>View history</span> <i class="icon-arrow-right"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {formatCurency} from '@/helpers/helpers'
export default {
    data: ()=>({
        reverse: false,
		exchangeWalletsXRP:[
            {value: 1, label: 'XRP Ripple', amount: '225.15 XRP'},
            {value: 2, label: 'XRP Ripple 2', amount: '125.15 XRP'},
            {value: 3, label: 'XRP Ripple 3', amount: '1365.15 XRP'},
            {value: 4, label: 'XRP Ripple 4', amount: '856.15 XRP'},
		],
		exchangeWalletSelectedXRP: {value: 1, label: 'XRP Ripple', amount: '225.15 XRP'},
        selectedRadioXRP: null,
        selectedRadioUSDX: null,
        XRPExchange: 0.00,
        USDXExchange: 0.00,
        coef: 1.000123
    }),
    computed: {
        selectedWalletAmountXRP(){
            return this.exchangeWalletSelectedXRP.amount
        },
        selectedWalletXRPUSDAmount(){
            let number = this.selectedWalletAmountXRP.split(' ');
            return formatCurency(+number[0] * 2)
        },
        selectedWalletAmountUSDX(){
            return this.exchangeWalletSelectedUSDX.amount
        },
        selectedWalletUSDXUSDAmount(){
            let number = this.selectedWalletAmountUSDX.split(' ');
            return formatCurency(+number[0] * 2)
        },
        xrpToUsd(){
			return formatCurency(this.XRPExchange * 2).split('.');
        },
        usdxToUsd(){
			return formatCurency(this.USDXExchange * 2).split('.');
        }
    }
}
</script>
<style lang="scss">
.box_info{
    font-size: 16px;
    @media(max-width: 767px){
        font-size: 12px;
    }
}
.more_link{
    font-weight: 600;
}
.xrp_exchange{
    color: #2864FF;
    font-weight: 600;
    &>input{
        color: inherit;
        font-weight: inherit;
    }
}
.usdx_exchange{
    color: #8728FF;
    font-weight: 600;
    &>input{
        color: inherit;
        font-weight: inherit;
    }
}
.exchange_cards{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    &.reversed{
        flex-direction: row-reverse;
        @media(max-width: 1023px){
            flex-direction: column-reverse;
        }
    }
    &__item{
        flex: 0 0 calc(50% - 30px);
        width: calc(50% - 30px);
    }
    &__icon{
        width: 76px;
        flex: 0 0 76px;
        height: 76px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #fff;
        font-size: 44px;
        padding: 10px;
        margin-right: 25px;
        @media(max-width: 1200px){
            width: 50px;
            flex: 0 0 50px;
            height: 50px;
            font-size: 24px;
        }
    }
    .exchange__radio{
        .radioGroup{
            border-radius: 0;
            height: 40px;
            padding: 0 30px;
        }
        &:first-child{
            .radioGroup{
                border-radius: 8px 0 0 8px;
            }
        }
        &:last-child{
            .radioGroup{
                border-radius: 0 8px 8px 0;
            }
        }
    }
    .card--gradient{
        .exchange_cards__icon{
            color: #2898FF;
        }
    }
}
.converted_value,
.xrp_to_usd{
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}
.exchange_info{
    position: relative;
    &__container{
        align-items: center;
        &.reversed{
            flex-direction: row-reverse;
        }
        &::after{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            height: 100%;
            border-right: 2px dotted rgba(#0B111A, .5);
            transform: translateY(-50%);
        }
        &.reversed{
            .exchange_info__item{
                &:first-child{
                    padding-right: 0px;
                    padding-left: 40px;
                    text-align: left;
                    @media(max-width: 1023px){
                        padding-left: 10px;
                    }
                }
                &:last-child{
                    padding-left: 0px;
                    padding-right: 40px;
                    text-align: right;
                    @media(max-width: 1023px){
                        padding-right: 10px;
                    }
                }
            }
        }
    }
    &__item{
        position: relative;
        flex: 0 0 calc(50% - 18px);
        width: calc(50% - 18px);
        @media(max-width: 1023px){
            font-size: 12px;
        }
        &:first-child{
            padding-right: 40px;
            text-align: right;
            .exchange_info__currency_amount{
                color: #2864FF;
            }
            @media(max-width: 1023px){
                padding-right: 10px;
            }
        }
        &:last-child{
            padding-left: 40px;
            .exchange_info__currency_amount{
                color: #8728FF;
            }
            @media(max-width: 1023px){
                padding-left: 10px;
            }
        }
    }
    &__title{
        font-size: 16px;
        font-weight: 500;
        color: rgba(#0B111A, .5);
        @media(max-width: 1023px){
            font-size: 12px;
        }
    }
    &__currency_amount{
        font-size: 22px;
        font-weight: 600;
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        @media(max-width: 1023px){
            font-size: 14px;
            small{
                font-size: 1em;
            }
        }
        &_usd{
            color: rgba(#0B111A, .5);   
            max-width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    &__icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        flex: 0 0 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 5px 5px 20px rgba(23, 25, 31, 0.15);
        font-size: 16px;
        position: relative;
        z-index: 1;
    }
}
.data_transfer_icon{
    margin-top: 45px;
}
@media(max-width: 1023px){
    .exchange_card__usdx,
    .exchange_card__xrp{
        width: 100%;
        flex: 0 0 100%;
    }
    .data_transfer_icon{
        margin: 30px auto;
        transform: rotate(90deg);
    }
    .exchange_info{
        .col-6{
            width: calc(100% - 22px);
            flex: 0 0 calc(100% - 22px);
            max-width: 276px;
        }
    }
}
@media(max-width: 767px){
    .exchange_cards__info{
        font-size: 14px;
    }
}
</style>