<template>
    <div class="beModal text-center">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('modal-confirm')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="beModal__body">
            <h3>The balance of your wallet is</h3>
            <h2 class="beModal__title text--primary mt15">{{balanceArr[0]}}<small>.{{balanceArr[1]}}</small></h2>
            <p>Replenish your wallet to make a deposit</p>
        </div>
        <div class="beModal__footer">
            <beButton
                type="button"
                title="Replenish"
                class="confirm_button"
                :shadow="true"
                @click="$router.push({name: 'Wallets'})"
            ></beButton>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import {formatCurency} from '@/helpers/helpers'
export default {
    data: ()=>({

    }),
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