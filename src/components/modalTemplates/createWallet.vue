<template>
    <div class="beModal text-center">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('modal-create-wallet')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <vueCustomScrollbar 
            class="modal_scroll rail__normal"
            :settings="{
                wheelPropagation: false,
                suppressScrollX: true
            }"
        >
            <div class="beModal__body">
                <h2 class="beModal__title">Create new wallet</h2>
                <div class="steps">
                    <div class="steps__item" @click="goToStep(1)" :class="{active: currentstep == 1 || currentstep == 2 ||  currentstep == 3}"></div>
                    <div class="steps__item" @click="goToStep(2)" :class="{active: currentstep == 2 ||  currentstep == 3}"></div>
                    <div class="steps__item" @click="goToStep(3)" :class="{active: currentstep == 3}"></div>
                </div>
                <div class="step step__content" :class="{active: currentstep == 1}">
                    <beSelect 
                        :selectArray="selectItems"
                        v-model="selectedItem"
                        selectPlaceholder="Wallet currency"
                        class="full-width mb15"
                    ></beSelect>
                    <beInput 
                        class="xrp_address mb15"
                        placeholder="Wallet 2"
                        :transparent="false"
                    ></beInput>
                </div>
                <div class="step step__content" :class="{active: currentstep == 2}">
                    <div class="step__icon mb15"><i class="icon-lock"></i></div>
                    <p>To activate your wallet, you need to send 20 XRP to your new Ripple account. Once your wallet is replenished with 20 XRP, it will be automatically activated</p>
                </div>
                <div class="step step__content" :class="{active: currentstep == 3}">
                    <h4 class="step__title mb40">Write down your secret phrase in the correct order on а paper</h4>
                    <ul class="two_columns_list mb40">
                        <li 
                            v-for="(item, i) of list" 
                            :key="i" 
                        ><input type="password" class="hidden-text" readonly :value="item"></li>
                    </ul>
                    <button
                        @mousedown="downEvent()"
                        @mouseup="upEvent()"
                    ><strong :class="clickedButton ? 'text--primary50' : 'text--primary' ">Press and Hold to Reveal</strong></button>
                </div>
            </div>
            <div class="beModal__footer">
                <beButton
                    v-if="currentstep == 3"
                    type="button"
                    title="Submit"
                    class="confirm_button"
                    :shadow="true"
                    @click="submitData"
                ></beButton>
                <beButton
                    v-else
                    type="button"
                    title="Сontinue"
                    class="confirm_button"
                    :shadow="true"
                    @click="nextStep"
                ></beButton>
                <p v-if="currentstep == 3" class="mt30 text-info">Do not create a digital copy such as a screenshot, text file or e-mail.</p>
            </div>
        </vueCustomScrollbar>
    </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import transactionsSend from '@/components/modalTemplates/transactionsSend'
export default {
    data: ()=>({
        currentstep: 1,
        timecounterStart: null,
        timecounterEnd: null,
        list: [
            'tuition',
            'liberty',
            'wisdom',
            'firm',
            'trap',
            'wine',
            'neutral',
            'clay',
            'brave',
            'globe',
            'tooth',
            'extend'
        ],
        clickedItem: null,
        timeout: null,
		selectItems: [
			{value: 1, label: 'XRP'},
			{value: 2, label: 'BIXRP'},
		],
		selectedItem: null,
        clickedButton: false
    }),
    components:{
        vueCustomScrollbar
    },
    mounted(){

    },
    methods: {
        downEvent(){
            this.clickedButton = true;
            this.timeout = setTimeout(this.pressTimeout, 500)
        },
        upEvent(){
            this.clickedButton = false;
            clearTimeout(this.timeout)
            let hiddenItems = document.querySelectorAll('.hidden-text')
            hiddenItems.forEach(item => item.type = 'password')
        },
        pressTimeout(){
            let hiddenItems = document.querySelectorAll('.hidden-text')
            hiddenItems.forEach(item => item.type = 'text')
        },
        goToStep(step){
            console.log(step);
            this.currentstep = step;
        },
        nextStep(){
            this.currentstep++
            if(this.currentstep > 3){
                this.currentstep = 3
            }
        },
        submitData(){
            console.log('submit data');
            this.$modal.hide('modal-create-wallet')
            this.$modal.show(
                transactionsSend, 
                {
                    successTitle: 'Wallet "name" successfully added!',
                    successText: 'Your wallet has been created and added to "My Wallets". You can get detailed information on transactions by clicking on the wallet.'
                },
                { height: 'auto', width: "90%", maxWidth: 540, adaptive: true }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
.steps{
    counter-reset: my-awesome-counter;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    &__item{
        position: relative;
        counter-increment: my-awesome-counter;
        background-color: #B6B8BA;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #fff;
        &:first-child{
            background-color: #2864FF;
        }
        &:not(:first-child){
            margin-left: 75px;
            &::after{
                content: '';
                position: absolute;
                top: 50%;
                right: 100%;
                width: 75px;
                border-top: 2px dashed #B6B8BA;
                transform: translateY(-50%);
            }
        }
        &.active{
            background-color: #2864FF;
            &::after{
                border-top: 2px solid #2864FF;
            }
        }
        &::before{
            content: "0"counter(my-awesome-counter);
            font-size: 16px;
        }
    }
}
.step{
    display: none;
    color: rgba(#0B111A, 0.5);
    &.active{
        display: block;
    }
    &__icon{
        font-size: 50px;
    }
    &__title{
        color: #0B111A;
        @media(max-width: 1700px){
            &.mb40{
                margin-bottom: 20px !important;
            }
        }
    }
    .two_columns_list{
        max-width: 320px;
        margin: 0 auto;
        font-size: 16px;
        transform: translateX(30px);
        @media(max-width: 1700px){
            transform: translateX(0px);
            &.mb40{
                margin-bottom: 20px !important;
            }
        }
        li{
            color: #0B111A;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            @media(max-width: 767px){
                max-width: 100px;
                margin: 0 auto;
            }
            &::before{
                color: rgba(#0B111A, 0.5);
                min-width: 25px;
            }
            @media(max-width: 1700px){
                margin-bottom: 5px;
            }
        }
    }
}
.text-info{
    font-size: 16px;
    max-width: 330px;
    margin: 0 auto;
    color: rgba(#0B111A, .5);
    font-weight: bold;
}
.hidden-text{
    display: inline-block;
    width: auto;
    border: none;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    outline: transparent;
    font-family: 'Gilroy';
    font-weight: 600;
}
</style>