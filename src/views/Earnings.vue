<template>
	<div class="about">
        <h1 class="page__title" @click="$router.go(-1)">
            <i class="icon-arrow-left-middle mr5"></i>
			<i :class="$route.meta.icon" class="page__title_icon"></i> 
			{{$route.name}}
		</h1>
		<div class="container currency__info">
			<div class="row">
				<div class="col-6 card card--white row-flex align-items-center justify-content-between p30 hold_xrp">
					<div class="balance">
						<div class="balance__info">
							<div class="balance__title"><span class="text--primary">XRP</span> HODL balance</div>
							<div class="balance__actual">
								<div class="atual__item">
									<small class="balance__currancy"><i class="icon-currancy"></i></small>{{balanceXRPArray[0]}}<small>.{{balanceXRPArray[1] || '00'}}</small>
								</div>
							</div>
						</div>
					</div>
					<div class="btns">
						<beButton 
							type="button" 
							title="Create an investment" 
							:outline="false" 
							:white="false"
							:shadow="true"
							@click="createInvestmentOpen('xrp')"
						><i class="icon-plus-outline" slot="icon-left"></i></beButton>
					</div>
				</div>
				<div class="col-6 card card--white p30 balance hold_xrp__details">
					<div class="balance__actual border-between-items items-half flex-full">
						<div class="balance__info">
							<div class="balance__title font-normal">Potential income</div>
							<div class="balance__actual">
								<div class="atual__item text--primary">
									{{balanceXRPArray[0]}}<small>.{{balanceXRPArray[1] || '00'}} XRP</small>
								</div>
							</div>
						</div>
						<div class="balance__info">
							<div class="balance__title font-normal">Income for 
								<beSelect
									class="income_select"
									selectedItemClass='text-underline text--primary'
									:selectArray="incomeListXRP"
									v-model="selectedIncomeItemXRP"
									:transparent="true"
								></beSelect>
							</div>
							<div class="balance__actual">
								<div class="atual__item yesterday">
									{{balanceXRPArray[0]}}<small>.{{balanceXRPArray[1] || '00'}} XRP</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-6 card card--white row-flex align-items-center justify-content-between p30 hold_usdx">
					<div class="balance">
						<div class="balance__info">
							<div class="balance__title"><span class="text--purple">USDX</span> HODL balance</div>
							<div class="balance__actual">
								<div class="atual__item">
									{{balanceUSDXArray[0]}}<small>.{{balanceUSDXArray[1] || '00'}} USDX</small>
								</div>
							</div>
						</div>
					</div>
					<div class="btns">
						<beButton 
							type="button" 
							title="Create an investment" 
							:outline="false" 
							:white="false"
							:shadow="true"
							@click="createInvestmentOpen('usdx')"
						><i class="icon-plus-outline" slot="icon-left"></i></beButton>
					</div>
				</div>
				<div class="col-6 card card--white p30 balance hold_usdx__details">
					<div class="balance__actual border-between-items items-half flex-full">
						<div class="balance__info">
							<div class="balance__title font-normal">Potential income</div>
							<div class="balance__actual">
								<div class="atual__item text--primary">
									{{balanceUSDXArray[0]}}<small>.{{balanceUSDXArray[1] || '00'}} USDX</small>
								</div>
							</div>
						</div>
						<div class="balance__info">
							<div class="balance__title  font-normal">Income for 
								<beSelect
									class="income_select"
									selectedItemClass='text-underline text--primary'
									:selectArray="incomeListUSDX"
									v-model="selectedIncomeItemUSDX"
									:transparent="true"
								></beSelect>
							</div>
							<div class="balance__actual">
								<div class="atual__item yesterday">
									{{balanceUSDXArray[0]}}<small>.{{balanceUSDXArray[1] || '00'}} USDX</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pt30 pb15 row-flex">
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
				class="mr15"
			></beSelect>
			<button class="info_popup link" @click="$modal.show('how-it-works')">
				<strong><i class="icon-info"></i> How does Al work?</strong>
			</button>
		</div>
		<div class="container tickets">
			<div class="row">
				<div class="col-flex col-3 card card--gradient card--bg-lines">
					<div class="card--title">
						<small><i class="icon-currancy"></i></small>
						{{balanceXRPArray[0]}}<small>.{{balanceXRPArray[1] || '00'}}</small>
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
								<p class="card--info-text">Deposit, end date</p>
							</div>
						</div>
						<div class="card--info-item">
							<beInputCheckbox
								placeholder="Investment extension"
								:white="true"
							>
								<bePrompt
									text="Ты шо дурачёк?"
								></bePrompt>
							</beInputCheckbox>
						</div>
					</div>
					<div class="pb20">
						<beButton 
							type="button" 
							title="In the work" 
							:outline="true" 
							:white="true"
							:shadow="false"
							class="full-width"
						><i class="icon-coins" slot="icon-left"></i></beButton>
					</div>
				</div>
				<div class="col-flex col-3 card card--gradient-purple card--bg-lines">
					<div class="card--title">
						{{balanceXRPArray[0]}}<small>.{{balanceXRPArray[1] || '00'}} USDX</small>
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
								<p class="card--info-text">Deposit, end date</p>
							</div>
						</div>
						<div class="card--info-item">
							<beInputCheckbox
								placeholder="Investment extension"
								:white="true"
							>
								<bePrompt
									text="Ты шо дурачёк?"
								></bePrompt>
							</beInputCheckbox>
						</div>
					</div>
					<div class="pb20">
						<beButton 
							type="button" 
							title="In the work" 
							:outline="true" 
							:white="true"
							:shadow="false"
							class="full-width"
						><i class="icon-coins" slot="icon-left"></i></beButton>
					</div>
				</div>
				<div class="col-flex col-3 card card--gradient-dark card--bg-lines">
					<div class="card--title">
						<small><i class="icon-currancy"></i></small>
						{{balanceXRPArray[0]}}<small>.{{balanceXRPArray[1] || '00'}}</small>
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
								<p class="card--info-text">Deposit, end date</p>
							</div>
						</div>
					</div>
					<div class="pb20">
						<beButton 
							type="button" 
							title="Successfully" 
							:outline="false" 
							:white="false"
							:shadow="false"
							class="full-width"
						><i class="icon-checked" slot="icon-left"></i></beButton>
					</div>
				</div>
				<div class="col-flex col-3 card card--gradient card--bg-lines">
					<div class="card--title">
						<small><i class="icon-currancy"></i></small>
						{{balanceXRPArray[0]}}<small>.{{balanceXRPArray[1] || '00'}}</small>
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
								<p class="card--info-text">Deposit, end date</p>
							</div>
						</div>
						<div class="card--info-item">
							<beInputCheckbox
								placeholder="Investment extension"
								:white="true"
							>
								<bePrompt
									text="Ты шо дурачёк?"
								></bePrompt>
							</beInputCheckbox>
						</div>
					</div>
					<div class="pb20">
						<beButton 
							type="button" 
							title="In the work" 
							:outline="true" 
							:white="true"
							:shadow="false"
							class="full-width"
						><i class="icon-coins" slot="icon-left"></i></beButton>
					</div>
				</div>
				<div class="col-flex col-3 card card--gradient card--bg-lines">
					<div class="card--title">
						<small><i class="icon-currancy"></i></small>
						{{balanceXRPArray[0]}}<small>.{{balanceXRPArray[1] || '00'}}</small>
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
								<p class="card--info-text">Deposit, end date</p>
							</div>
						</div>
						<div class="card--info-item">
							<beInputCheckbox
								placeholder="Investment extension"
								:white="true"
							>
								<bePrompt
									text="Ты шо дурачёк?"
								></bePrompt>
							</beInputCheckbox>
						</div>
					</div>
					<div class="pb20">
						<beButton 
							type="button" 
							title="In the work" 
							:outline="true" 
							:white="true"
							:shadow="false"
							class="full-width"
						><i class="icon-coins" slot="icon-left"></i></beButton>
					</div>
				</div>
				<button class="col-3 create_btn"
					@click="createInvestmentOpen()"
				>
					
					<span class="icon"></span>
					<span class="text">Create an investment</span>
				</button>
			</div>
		</div>
		<modal 
			name="create-investment-modal"
			width="90%"
			:maxWidth="540"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<createInvestment :currency="currencyValue"></createInvestment>
		</modal>
		<modal 
			name="balance-planner"
			width="90%"
			:maxWidth="540"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<balancePlanner></balancePlanner>
		</modal>
		<modal 
			name="how-it-works"
			width="90%"
			:maxWidth="1055"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<howItWorks></howItWorks>
		</modal>
	</div>
</template>
<script>
import {formatCurency} from '@/helpers/helpers'
import createInvestment from '@/components/modalTemplates/createInvestment'
import balancePlanner from '@/components/modalTemplates/balancePlanner'
import howItWorks from '@/components/modalTemplates/howItWorks'
export default {
	components: {createInvestment, balancePlanner, howItWorks},
	data: ()=>({
        sorted: false,
		currencyValue: null,
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
		sortingList:[
            {value: 1, label: 'By transaction date'},
            {value: 2, label: 'By sum'},
            {value: 3, label: 'By wallet'},
            {value: 4, label: 'By status'},
		],
		selectedSortItem: {value: 1, label: 'By transaction date'},
		incomeListXRP: [
            {value: 1, label: 'Choose a date'},
            {value: 2, label: 'yesterday'},
            {value: 3, label: 'Week'},
            {value: 4, label: 'Month'},
		],
		selectedIncomeItemXRP: {value: 2, label: 'yesterday'},
		incomeListUSDX: [
            {value: 1, label: 'Choose a date'},
            {value: 2, label: 'yesterday'},
            {value: 3, label: 'Week'},
            {value: 4, label: 'Month'},
		],
		selectedIncomeItemUSDX: {value: 2, label: 'yesterday'}
	}),
	computed: {
		balanceXRPArray(){
			return formatCurency(this.XRP.balance).split('.');
		},
		balanceUSDXArray(){
			return formatCurency(this.USDX.balance).split('.');
		},
	},
	methods:{
		createInvestmentOpen(currancy){
			this.currencyValue = currancy
			this.$modal.show('create-investment-modal')
		}
	}
}
</script>
<style lang="scss">
.yesterday{
	font-size: 16px;
}
.balance__title{
	font-size: 16px;
	display: flex;
	.income_select{
		margin-left: 5px;
		.select__value{
			opacity: 1;
		}
		.selected__value{
			padding-right: 0;
		}
		.select__dropdown_icon{
			display: none;
		}
		.select__dropdown{
			left: auto;
			right: 0;
		}
	}
}
.balance__info{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.about{
	.atual__item{
		small{
			font-size: 0.7em;
		}
	}
}
@media(max-width: 1100px){
	.currency__info{
		[class^="col-"], [class*="col-"]{
			width: calc(100% - 22px);
			flex: 0 0 calc(100% - 22px);
		}
	}
	.tickets{
		.row{
			flex-wrap: wrap;
		}
		[class^="col-"], [class*="col-"]{
			width: calc(50% - 22px);
			flex: 0 0 calc(50% - 22px);
			min-width: 275px;
			flex-grow: 1;
		}
	}
}
@media(max-width: 767px){
	.hold_usdx,
	.hold_xrp{
		flex-direction: column;
		.balance{
			margin-bottom: 15px;
			&__actual{
				text-align: center;
			}
		}
		&__details{
			.balance__info{
				padding-right: 0px;
				padding-bottom: 15px;
				text-align: center;
				& + .balance__info{
					padding-left: 0px;
					padding-top: 15px;
					&:before{
						top: -1px;
						left: 50%;
						height: 2px;
						width: 80%;
						transform: translate(-50%, 0);
					}
				}
				.balance__title{
					justify-content: center;
				}
				.balance__actual{
					text-align: center;
				}
			}
			.items-half > *{
    			flex: 0 0 100%;
			}
		}
	}
}
</style>
