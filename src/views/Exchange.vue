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
            <div class="exchange_cards">
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
                </div>
                <div class="data_transfer_icon"><i class="icon-data-transfer"></i></div>
                <div class="exchange_cards__item exchange_card__usdx">
                    <div class="card card--gradient-purple row-flex align-items-center">
                        <div class="exchange_cards__icon">
                            <img src="@/assets/balance.svg" alt="">
                        </div>
                        <div class="exchange_cards__info">
                            <beSelect
                                class="wallet__select mb5"
                                :selectArray="exchangeWalletsUSDX"
                                v-model="exchangeWalletSelectedUSDX"
                                :transparent="true"
                            ></beSelect>
                            <p>{{selectedWalletAmountUSDX}} <span class="text--white50">| ${{selectedWalletUSDXUSDAmount}} USD</span></p>
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
                </div>
            </div>
            <div class="exchange_cards mt40">
                <div class="exchange_cards__item">
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
                <div class="exchange_cards__item">
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
            <div class="exchange_info row justify-content-center mt30">
                <div class="card card--white col-6 items-half">
                    <div class="text-right exchange_info__item">
                        <h5 class="exchange_info__title">You are exchanging</h5>
                        <p class="exchange_info__currency_amount">{{XRPExchange || 0.00}} <small>XRP</small></p>
                        <p class="exchange_info__currency_amount_usd">${{xrpToUsd[0]}}<small>.{{xrpToUsd[1] || '00'}}</small></p>
                        <div class="exchange_info__icon"><i class="icon-arrow-right-middle"></i></div>
                    </div>
                    <div class="exchange_info__item">
                        <h5 class="exchange_info__title">You will receive</h5>
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
		exchangeWalletsXRP:[
            {value: 1, label: 'XRP Ripple', amount: '225.15 XRP'},
            {value: 2, label: 'XRP Ripple 2', amount: '125.15 XRP'},
            {value: 3, label: 'XRP Ripple 3', amount: '1365.15 XRP'},
            {value: 4, label: 'XRP Ripple 4', amount: '856.15 XRP'},
		],
		exchangeWalletSelectedXRP: {value: 1, label: 'XRP Ripple', amount: '225.15 XRP'},
		exchangeWalletsUSDX:[
            {value: 1, label: 'USDX Be in coin', amount: '0.00 USDX'},
            {value: 2, label: 'USDX Ripple 2', amount: '125.15 USDX'},
            {value: 3, label: 'USDX Ripple 3', amount: '1365.15 USDX'},
            {value: 4, label: 'USDX Ripple 4', amount: '856.15 USDX'},
		],
		exchangeWalletSelectedUSDX: {value: 1, label: 'USDX Be in coin', amount: '0.00 USDX'},
        selectedRadioXRP: null,
        selectedRadioUSDX: null,
        XRPExchange: 0.00,
        USDXExchange: 0.00
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
    &__item{
        flex: 0 0 calc(50% - 30px);
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
.exchange_info{
    &__item{
        position: relative;
        &:first-child{
            padding-right: 40px;
            border-right: 2px dotted rgba(#0B111A, .5);
            .exchange_info__currency_amount{
                color: #2864FF;
            }
        }
        &:last-child{
            padding-left: 40px;
            .exchange_info__currency_amount{
                color: #8728FF;
            }
        }
    }
    &__title{
        font-size: 16px;
        font-weight: 500;
        color: rgba(#0B111A, .5);
    }
    &__currency_amount{
        font-size: 22px;
        font-weight: 600;
        &_usd{
            color: rgba(#0B111A, .5);   
        }
    }
    &__icon{
        position: absolute;
        top: 50%;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 5px 5px 20px rgba(23, 25, 31, 0.15);
        transform: translate(50%, -50%);
        font-size: 16px;
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
</style>