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
            <p class="beModal__icon"><i class="icon-checked"></i></p>
            <h2 class="beModal__title">Transaction sent for processing</h2>
            <p class="beModal__text">
                You can follow the status of transactions in the 
                <router-link :to="{name: 'Wallets'}" class="link">
                    Transaction History
                </router-link>
            </p>
        </div>
        <div class="beModal__footer">
            <beButton
                type="button"
                title="OK"
                class="confirm_button"
                :shadow="true"
                @click="$modal.hide('modal-confirm')"
            ></beButton>
        </div>
    </div>
</template>