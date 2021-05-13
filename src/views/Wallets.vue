<template>
    <div class="wallets">
        <h1 class="page__title">
            <i :class="$route.meta.icon" class="page__title_icon"></i> 
            {{$route.name}}
        </h1>
        <div class="container wallets__container">
            <div class="row">
                <div class="col-4 card card--gradient-purple wallet card--bg-lines">
                    <div class="wallet__header">
                        <div class="wallet__icon pointer" @click="walletInfo('wallet')">
                            <i class="icon-wallet-outline"></i>
                        </div>
    					<div class="balance__info">
    						<div class="balance__actual">
    							<div class="atual__item">
    								12,021<small>.{{23 || '00'}} USDX</small>
    							</div>
    						</div>
                            <div class="balance__title">USDX Wallet</div>
    					</div>
                    </div>
                    <div class="wallet__body"></div>
                    <div class="btns wallet__footer row-flex">
                        <beButton 
                            class="flex-full"
                            type="button" 
                            title="Send" 
                            :outline="true" 
                            :white="true"
                        ><i class="icon-sign-out" slot="icon-left"></i></beButton>
                        <beButton 
                            type="button" 
                            title="Receive" 
                            :outline="false" 
                            :white="true"
                            class="ml10 flex-full"
                        ><i class="icon-sign-in" slot="icon-left"></i></beButton>
                    </div>
                </div>
                <div class="col-4 card card--gradient wallet card--bg-lines">
                    <div class="wallet__header">
                        <div class="wallet__icon pointer" @click="walletInfo('wallet')">
                            <i class="icon-wallet-outline"></i>
                        </div>
    					<div class="balance__info">
    						<div class="balance__actual">
    							<div class="atual__item">
    								<small class="balance__currancy"><i class="icon-currancy"></i></small>
    								12,021<small>.{{23 || '00'}} </small>
    							</div>
    						</div>
                            <div class="balance__title">Be in XRP Wallet</div>
    					</div>
                    </div>
                    <div class="wallet__body"></div>
                    <div class="btns wallet__footer row-flex">
                        <beButton 
                            class="flex-full"
                            type="button" 
                            title="Send" 
                            :outline="true" 
                            :white="true"
                        ><i class="icon-sign-out" slot="icon-left"></i></beButton>
                        <beButton 
                            type="button" 
                            title="Receive" 
                            :outline="false" 
                            :white="true"
                            class="ml10 flex-full"
                        ><i class="icon-sign-in" slot="icon-left"></i></beButton>
                    </div>
                </div>
                <div class="col-4 create_btn">
                    <span class="select_wallet_type">
                        <span class="icon"></span>
                        <span class="type_dropdown">
                            <span class="type_dropdown__item" @click="createWallet">Create new wallet</span>
                            <span class="type_dropdown__item" @click="addWallet">Add wallet</span>
                        </span>
                    </span>
                    <span class="text">Add Wallet</span>
                </div>
            </div>
        </div>
        <div class="transactions transactions_block mt30">
            <div class="transactions__header card card--white mb15">
                <div class="block__title mb15">Transaction history</div>
                <beSelect
                    :selectArray="sortingList"
                    v-model="selectedSortItem"
                    :sortingIcon="true"
                    :transparent="true"
                ></beSelect>
            </div>
            <div class="transactions__body" v-if="getHistory">
                <div 
                    class="card card--white history" 
                    v-for="(item, idx) in getHistory" 
                    :key="idx" 
                    :class="[item.status == 'Rejected' ? 'alert' : item.status == 'Approved' ? 'success' : 'inprogress']"
                >
                    <div class="history__date">{{item.date}}</div>
                    <div class="history__planish_link">
                        <button class="wallet_btn">
                            <span v-if="item.buttonText === 'Wallet replenishment'"><i class="icon-sign-in" slot="icon-left"></i></span>
                            <span v-else><i class="icon-sign-out" slot="icon-left"></i></span>
                            <span class="wallet_btn__text">
                                <span class="wallet_btn__title">{{item.buttonText}}</span>
                                <span class="wallet__name">Wallet: {{item.waletName}}</span>
                            </span>
                        </button>
                    </div>
                    <div class="history__status">{{item.status}}</div>
                    <div class="history__finance">{{item.summ}} <small>{{item.currency == 1 ? 'USDX' : 'XRP'}}</small></div>
                </div>
            </div>
            <div class="transactions__body empty" v-else>
                <div class="card card--white text-center">
                    <p class="icon"><i class="icon-smile-sad"></i></p>
                    <p class="empty__text">You have no transactions</p>
                </div>
            </div>
        </div>
		<modal 
			name="modal-create-wallet" 
			class="create_wallet" 
			width="90%"
			:maxWidth="540"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<createWallet></createWallet>
		</modal>
		<modal 
			name="modal-add-wallet" 
			class="add_wallet" 
			width="90%"
			:maxWidth="540"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<addWallet></addWallet>
		</modal>
		<modal 
			name="modal-wallet-info" 
			class="wallet_info" 
			width="90%"
			:maxWidth="880"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<walletInfo></walletInfo>
		</modal>
    </div>
</template>
<script>
import createWallet from '../components/modalTemplates/createWallet'
import addWallet from '../components/modalTemplates/addWallet'
import walletInfo from '../components/modalTemplates/walletInfo'
import { mapGetters } from 'vuex';
export default {
    data: ()=>({
		sortingList:[
            {value: 1, label: 'By transaction date'},
            {value: 2, label: 'By sum'},
            {value: 3, label: 'By wallet'},
            {value: 4, label: 'By status'},
		],
		selectedSortItem: {value: 1, label: 'By transaction date'}
    }),
    components: {createWallet, addWallet, walletInfo},
    computed: {
        ...mapGetters([
            'getHistory'
        ])
    },
    methods: {
        createWallet(){
            console.log('Create new wallet')
            this.$modal.show('modal-create-wallet')
        },
        addWallet(){
            console.log('Add wallet');
            this.$modal.show('modal-add-wallet')
        },
        walletInfo(wallet){
            console.log(wallet);
            this.$modal.show('modal-wallet-info')
        }
    }
}
</script>
<style lang="scss">
.wallet{
    display: flex;
    flex-direction: column;
    &__header{
        display: flex;
        align-items: center;
    }
    &__body{
        flex-grow: 1;
    }
    &__icon{
        width: 76px;
        flex: 0 0 76px;
        height: 76px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        margin-right: 20px;
    }
    &.card--bg-lines{
        &::before{
            background-size: 120%;
            background-position: -70% bottom;
        }
    }
    &.card--gradient{
        .wallet__icon{
            color: #2864FF;
        }
    }
    &.card--gradient-purple{
        .wallet__icon{
            color: #8728FF;
        }
    }
}
.select_wallet_type{
    position: relative;
    cursor: pointer;
    &:hover{
        .type_dropdown{
            transform: translateY(5px);
            opacity: 1;
            visibility: visible;
        }
    }
    .type_dropdown{
        position: absolute;
        bottom: 100%;
        font-size: 16px;
        background-color: #fff;
        border-radius: 8px;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        padding: 15px 0px;
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.15);
        transition: .3s ease;
        transition-property: opacity transform;
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px);
        &:before{
            content: '';
            position: absolute;
            top: 100%;
            left: 20px;
            width: 10px;
            border: 10px solid transparent;
            border-top: 10px solid #fff;
        }
        &__item{
            padding: 5px 25px;
            line-height: 1.5;
            transition: .3s ease;
            &:hover{
                background-color: rgba(#0B111A, 0.1);
            }
        }
    }
}
</style>