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
        <div class="beModal__body">
            <h2 class="beModal__title">Create new wallet</h2>
            <div class="steps">
                <div class="steps__item" @click="goToStep(1)" :class="{active: currentstep == 1 || currentstep == 2 ||  currentstep == 3}"></div>
                <div class="steps__item" @click="goToStep(2)" :class="{active: currentstep == 2 ||  currentstep == 3}"></div>
                <div class="steps__item" @click="goToStep(3)" :class="{active: currentstep == 3}"></div>
            </div>
            <div class="step step__content" :class="{active: currentstep == 1}">
                <beInput 
                    class="xrp_address mb15"
                    placeholder="XRP Wallet 2"
                    :transparent="false"
                ></beInput>
            </div>
            <div class="step step__content" :class="{active: currentstep == 2}">
                <div class="step__icon mb15"><i class="icon-lock"></i></div>
                <p>To activate your wallet, you need to send 20 XRP to your created Ripple account. Once your wallet has been funded with 20 XRP, it will be automatically activated</p>
            </div>
            <div class="step step__content" :class="{active: currentstep == 3}">
                <h4 class="step__title mb40">Write down your secret phrase in the correct order on paper</h4>
                <ul class="two_columns_list mb40">
                    <li 
                        v-for="(item, i) of list" 
                        :key="i" 
                        @mousedown="downEvent(item, $event.target)"
                        @mouseup="upEvent(item, $event.target)"
                    >..................</li>
                </ul>
                <p><strong class="text--primary50">Press and Hold to Reveal</strong></p>
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
    </div>
</template>
<script>
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
        clickedItem: null
    }),
    watch:{
    },
    mounted(){

    },
    methods: {
        downEvent(){
            this.timecounterStart = new Date();
        },
        upEvent(item, target){
            this.timecounterEnd = new Date();
            if(this.timecounterEnd - this.timecounterStart > 1000){
                target.innerHTML = item
            }
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
                    successText: 'Your wallet has been created and added to "My Wallets". You can get detailed information on transactions by clicking on the wallet card.'
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
        @media(max-width: 1600px){
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
        @media(max-width: 1600px){
            transform: translateX(0px);
            &.mb40{
                margin-bottom: 20px !important;
            }
        }
        li{
            color: #0B111A;
            font-weight: 600;
            margin-bottom: 15px;
            &::before{
                color: rgba(#0B111A, 0.5);
                min-width: 25px;
            }
            @media(max-width: 1600px){
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
</style>