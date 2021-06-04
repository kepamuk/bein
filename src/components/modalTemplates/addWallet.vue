<template>
    <div class="beModal text-center">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('modal-add-wallet')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="beModal__body">
            <h2 class="beModal__title">Add a wallet</h2>
            <beInput 
                class="xrp_address mb15 bg--white"
                placeholder="BIXRP Wallet"
                :transparent="false"
            ></beInput>
            <beInput 
                class="xrp_address mb15"
                placeholder="Secret key"
                :transparent="false"
            >
                <bePrompt
                    slot="right"
                    class="text-left"
                    text="Indicate the beneficiary or destination of the transaction"
                ></bePrompt>
            </beInput>
        </div>
        <div class="beModal__footer">
            <beButton
                type="button"
                title="Create a Wallet"
                class="confirm_button"
                :shadow="true"
                @click="submitData"
            ></beButton>
        </div>
    </div>
</template>
<script>
import transactionsSend from '@/components/modalTemplates/transactionsSend'
export default {
    data: ()=>({}),
    methods: {
        submitData(){
            console.log('submit data');
            this.$modal.hide('modal-add-wallet')
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
.wallet{
    max-width: 515px;
    margin: -105px auto 0;
    &__header{
        margin-bottom: 80px;
    }
}
.beModal__footer .confirm_button:hover{
    color: white !important;
}
</style>