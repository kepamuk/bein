<template>
    <div class="beModal text-center">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('exchange-done')">
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
            <div class="beModal__body exchange_start">
                <h2 class="beModal__title">Exchange is successfully done!</h2>
                <p>Your XRP will arrive in up to 30 minutes. You can safely use Exodus or start a new exchange while waiting for your XRP deposit.</p>
                <div class="exchange_start__container my50">
                    <div class="exchange_start__icon">
                        <div class="currency__icon usdx">
                            <img src="@/assets/balance-white.svg" alt="">
                        </div>
                        <i class="icon-checked-circle text--purple small__icon"></i>
                    </div>
                </div>
                <div class="">
                    <p class="mb5"><small>You will receive $ 47.59</small></p>
                    <h2 class="text--purple">+ 47.477351 BIXRP</h2>
                </div>
            </div>
            <div class="beModal__footer buttons__container">
                <beButton
                    title="Exchange history"
                    :outline="true"
                    @click="$router.push({name: 'Exchange History'})"
                ></beButton>
                <beButton
                    title="Start a new exchange"
                    @click="startNewExchange"
                ></beButton>
            </div>
        </vueCustomScrollbar>
    </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
    components:{
        vueCustomScrollbar
    },
    methods:{
        startNewExchange(){
            this.$modal.hide('exchange-done');
            this.$modal.show('exchange-start');
        }
    }
}
</script>
<style lang="scss" scoped>
.exchanhe_history_link{
    border-color: rgba(#0B111A, .5);
    color: rgba(#0B111A, .5);
    margin-right: 10px;
}
.exchange_start{
    &__container{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }
    &__icon{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 1px dashed #0B111A;
        .small__icon{
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translate(-50%, 50%);
            background-color: #fff;
            border-radius: 50%;
        }
    }
    &__arrow{
        margin: 0 30px;
    }
}
.currency__icon{
    width: 120px;
    flex: 0 0 120px;
    height: 120px;
    font-size: 52px;
    box-shadow: 5px 5px 20px rgba(23, 25, 31, 0.15);
    &.usdx{
        animation-delay: .3s;
    }
    img{
        display: block;
        width: 100%;
        max-width: 73px;
    }
}
.buttons__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    max-width: 800px;
    margin: 0 auto;
}
</style>