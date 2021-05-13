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
                <div class="steps__item"></div>
                <div class="steps__item"></div>
                <div class="steps__item"></div>
            </div>
            <beInput 
                class="xrp_address mb15"
                placeholder="XRP Wallet 2"
                :transparent="false"
            ></beInput>
        </div>
        <div class="beModal__footer">
            <beButton
                type="button"
                title="Сontinue"
                class="confirm_button"
                :shadow="true"
            ></beButton>
        </div>
    </div>
</template>
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
</style>