<template>
    <div class="exchange_history_page">
        <div class="card card--white">
            <button class="go-back text--grey" @click.prevent="$router.go(-1)" type="button">
                <i class="icon-arrow-left-middle"> </i><span>Back</span>
            </button>
            <h1 class="my15">{{$route.name}}</h1>
            <div class="row-flex">
                <div class="sorting__item mr5" >
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
        <div class="my30">
            <h2 class="block__title">Apr 10, 2021</h2>
        </div>
        <div class="exchange_history">
            <div class="card card--white">
                <div class="exchange_history__item">
                    <div class="exchange_history__from_to">
                        <div class="exchange_history__from xrp">
                            <div class="currency__icon xrp"><i class="icon-currancy"></i></div>
                            <div class="currency__amount">-10.214 XRP</div>
                        </div>
                        <div class="icon_transfer">
                            <i class="icon-arrow-right-middle"></i>
                        </div>
                        <div class="exchange_history__to usdx">
                            <div class="currency__icon usdx"><img src="@/assets/balance-white.svg" alt=""></div>
                            <div class="currency__amount">+90.78 BIXRP</div>
                        </div>
                    </div>
                    <div class="exchange_history__amount_status success">
                        <div class="exchange_history__amount">$102.83</div>
                        <div class="exchange_history__status">Complete</div>
                    </div>
                </div>
            </div>
            <div class="card card--white">
                <div class="exchange_history__item">
                    <div class="exchange_history__from_to">
                        <div class="exchange_history__from xrp">
                            <div class="currency__icon xrp"><i class="icon-currancy"></i></div>
                            <div class="currency__amount">-10.214 XRP</div>
                        </div>
                        <div class="icon_transfer">
                            <i class="icon-arrow-right-middle"></i>
                        </div>
                        <div class="exchange_history__to usdx">
                            <div class="currency__icon usdx"><img src="@/assets/balance-white.svg" alt=""></div>
                            <div class="currency__amount">+90.78 BIXRP</div>
                        </div>
                    </div>
                    <div class="exchange_history__amount_status alert">
                        <div class="exchange_history__amount">$102.83</div>
                        <div class="exchange_history__status">Rejected</div>
                    </div>
                </div>
            </div>
            <div class="card card--white">
                <div class="exchange_history__item">
                    <div class="exchange_history__from_to">
                        <div class="exchange_history__from xrp">
                            <div class="currency__icon xrp"><i class="icon-currancy"></i></div>
                            <div class="currency__amount">-10.214 XRP</div>
                        </div>
                        <div class="icon_transfer">
                            <i class="icon-arrow-right-middle"></i>
                        </div>
                        <div class="exchange_history__to usdx">
                            <div class="currency__icon usdx"><img src="@/assets/balance-white.svg" alt=""></div>
                            <div class="currency__amount">+90.78 BIXRP</div>
                        </div>
                    </div>
                    <div class="exchange_history__amount_status inprogress">
                        <div class="exchange_history__amount">$102.83</div>
                        <div class="exchange_history__status">Waiting</div>
                    </div>
                </div>
            </div>
            <div class="card card--white">
                <div class="exchange_history__item">
                    <div class="exchange_history__from_to">
                        <div class="exchange_history__from xrp">
                            <div class="currency__icon xrp"><i class="icon-currancy"></i></div>
                            <div class="currency__amount">-10.214 XRP</div>
                        </div>
                        <div class="icon_transfer">
                            <i class="icon-arrow-right-middle"></i>
                        </div>
                        <div class="exchange_history__to usdx">
                            <div class="currency__icon usdx"><img src="@/assets/balance-white.svg" alt=""></div>
                            <div class="currency__amount">+90.78 BIXRP</div>
                        </div>
                    </div>
                    <div class="exchange_history__amount_status success">
                        <div class="exchange_history__amount">$102.83</div>
                        <div class="exchange_history__status">Complete</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my30">
            <h2 class="block__title">Apr 10, 2021</h2>
        </div>
        <div class="exchange_history">
            <div class="card card--white">
                <div class="exchange_history__item">
                    <div class="exchange_history__from_to">
                        <div class="exchange_history__from xrp">
                            <div class="currency__icon xrp"><i class="icon-currancy"></i></div>
                            <div class="currency__amount">-10.214 XRP</div>
                        </div>
                        <div class="icon_transfer">
                            <i class="icon-arrow-right-middle"></i>
                        </div>
                        <div class="exchange_history__to usdx">
                            <div class="currency__icon usdx"><img src="@/assets/balance-white.svg" alt=""></div>
                            <div class="currency__amount">+90.78 BIXRP</div>
                        </div>
                    </div>
                    <div class="exchange_history__amount_status success">
                        <div class="exchange_history__amount">$102.83</div>
                        <div class="exchange_history__status">Complete</div>
                    </div>
                </div>
            </div>
            <div class="card card--white">
                <div class="exchange_history__item">
                    <div class="exchange_history__from_to">
                        <div class="exchange_history__from xrp">
                            <div class="currency__icon xrp"><i class="icon-currancy"></i></div>
                            <div class="currency__amount">-10.214 XRP</div>
                        </div>
                        <div class="icon_transfer">
                            <i class="icon-arrow-right-middle"></i>
                        </div>
                        <div class="exchange_history__to usdx">
                            <div class="currency__icon usdx"><img src="@/assets/balance-white.svg" alt=""></div>
                            <div class="currency__amount">+90.78 BIXRP</div>
                        </div>
                    </div>
                    <div class="exchange_history__amount_status success">
                        <div class="exchange_history__amount">$102.83</div>
                        <div class="exchange_history__status">Complete</div>
                    </div>
                </div>
            </div>
            <div class="card card--white">
                <div class="exchange_history__item">
                    <div class="exchange_history__from_to">
                        <div class="exchange_history__from xrp">
                            <div class="currency__icon xrp"><i class="icon-currancy"></i></div>
                            <div class="currency__amount">-10.214 XRP</div>
                        </div>
                        <div class="icon_transfer">
                            <i class="icon-arrow-right-middle"></i>
                        </div>
                        <div class="exchange_history__to usdx">
                            <div class="currency__icon usdx"><img src="@/assets/balance-white.svg" alt=""></div>
                            <div class="currency__amount">+90.78 BIXRP</div>
                        </div>
                    </div>
                    <div class="exchange_history__amount_status success">
                        <div class="exchange_history__amount">$102.83</div>
                        <div class="exchange_history__status">Complete</div>
                    </div>
                </div>
            </div>
            <div class="card card--white">
                <div class="exchange_history__item">
                    <div class="exchange_history__from_to">
                        <div class="exchange_history__from xrp">
                            <div class="currency__icon xrp"><i class="icon-currancy"></i></div>
                            <div class="currency__amount">-10.214 XRP</div>
                        </div>
                        <div class="icon_transfer">
                            <i class="icon-arrow-right-middle"></i>
                        </div>
                        <div class="exchange_history__to usdx">
                            <div class="currency__icon usdx"><img src="@/assets/balance-white.svg" alt=""></div>
                            <div class="currency__amount">+90.78 BIXRP</div>
                        </div>
                    </div>
                    <div class="exchange_history__amount_status success">
                        <div class="exchange_history__amount">$102.83</div>
                        <div class="exchange_history__status">Complete</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
		sortingList:[
            {value: 1, label: 'By transaction date'},
            {value: 2, label: 'By status'},
		],
		selectedSortItem: {value: 1, label: 'By transaction date'},
        sorted: false
    })
}
</script>
<style lang="scss">
.exchange_history{
    &_page{
        .go-back{
            font-size: 16px;
        }
    }
    .card{
        margin-bottom: 10px;
        overflow: hidden;
        @media(max-width: 767px){
            padding-bottom: 55px;
        }
    }
    &__amount_status,
    &__from_to,
    &__from,
    &__to,
    &__item{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__amount_status,
    &__from_to{
        @media (max-width: 767px) {
            width: 100%;
        }
    }
    &__item{
        font-weight: 600;
        @media(max-width: 767px){
            flex-direction: column;
        }
    }
    &__from_to{
        .currency__amount{
            margin-left: 15px;
        }
        .icon_transfer{
            margin: 0 30px;
        }
    }
    &__from{
        &.xrp{
            color: rgba(#0B111A, .5);
        }
    }
    .currency__amount{
        font-size: 16px;
        font-weight: 600;
        @media(max-width: 767px){
            font-size: 14px;
        }
    }
    &__amount_status{
        @media(max-width: 767px){
            color: white;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 8px 20px;
        }
        &.success{
            .exchange_history__status{
                color: #04C7A3;
            }
            @media(max-width: 767px){
                .exchange_history__status{
                    color: white;
                }
                background-color: #04C7A3;
            }
        }
        &.alert{
            .exchange_history__status{
                color: #FF5A6B;
            }
            @media(max-width: 767px){
                .exchange_history__status{
                    color: white;
                }
                background-color: #FF5A6B;
            }
        }
        &.inprogress{
            .exchange_history__status{
                color: rgba(#0B111A, .5);
            }
            @media(max-width: 767px){
                .exchange_history__status{
                    color: white;
                }
                background-color: rgba(#0B111A, .5);
            }
        }
    }
    &__amount{
        margin-right: 90px;
        font-size: 16px;
    }
    &__status{
        font-size: 18px;
        min-width: 90px;
        text-align: right;
    }
}
</style>