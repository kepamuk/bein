<template>
    <div class="beModal text-center">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hideAll()">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="beModal__body">
            <p class="beModal__icon"><i class="icon-checked"></i></p>
            <h2 class="beModal__title">{{successTitle || 'Your transaction is being processed'}}</h2>
            <p class="beModal__text">
                {{successText || 'You can monitor the status in'}}
                <router-link :to="{name: 'Wallets'}" class="link" v-if="!successText">
                    Transaction History
                </router-link>
            </p>
        </div>
        <div class="beModal__footer">
            <beButton
                type="button"
                :title="buttonText || 'OK'"
                class="confirm_button"
                :shadow="true"
                @click="$modal.hideAll('')"
            ></beButton>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'successTitle',
        'successText',
        'buttonText'
    ]
}
</script>