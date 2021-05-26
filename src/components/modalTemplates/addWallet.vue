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
            <h2 class="beModal__title">Add wallet</h2>
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
                    text="Indicate the beneficiary or destination for a transaction"
                ></bePrompt>
            </beInput>
        </div>
        <div class="beModal__footer">
            <beButton
                type="button"
                title="Create a Wallet"
                class="confirm_button"
                :shadow="true"
            ></beButton>
        </div>
    </div>
</template>
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