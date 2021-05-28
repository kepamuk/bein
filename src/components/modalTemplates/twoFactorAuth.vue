<template>
    <div class="beModal text-center">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('modal-two-factor-auth')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="beModal__body">
            <h2 class="beModal__title">{{'Enabling two-factor authentication'}}</h2>
            <div class="mb30">
                <beInputRadio 
                    class="mr25"
                    placeholder="By E-mail"
                    :round="true"
                    value="1"
                    v-model="resetType"
                ></beInputRadio>
                <beInputRadio 
                    class="mr25"
                    value="2"
                    :round="true"
                    placeholder="By phone"
                    v-model="resetType"
                ></beInputRadio>
                <beInputRadio 
                    value="3"
                    :round="true"
                    placeholder="By google authenticator"
                    v-model="resetType"
                ></beInputRadio>
            </div>
            <div class="mb30" v-if="resetType == 1">
                <beInput class="full-width" placeholder="E-mail"></beInput>
            </div>
            <div class="mb30" v-if="resetType == 2">
                <beInput class="full-width" type="number" placeholder="Phone"></beInput>
            </div>
            <div class="mb30" v-if="resetType == 3">
                <beInput class="full-width" placeholder="Gmail"></beInput>
            </div>
            <beButton
                type="button"
                title="Send code"
                :shadow="true"
                @click="sendCode"
            ></beButton>
        </div>
        <div class="beModal__footer">
        </div>
    </div>
</template>
<script>
export default {
    data: ()=>({
        resetType: 1
    }),
    methods: {
        sendCode(){
            this.$modal.hide('modal-two-factor-auth')
            this.$modal.show('modal-two-factor-code')
        }
    }
}
</script>