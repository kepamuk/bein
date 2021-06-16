<template>
    <div class="copy_text" :class="{bordered: bordered}" @click="copyTextValue($event)">
        <input type="text" v-model="text" class="input__hidden">
        <span class="copy_text__value">{{text}}</span> <i class="icon-copy"></i>
    </div>
</template>
<script>
export default {
    props:['text', 'bordered'],
    data: ()=>({
        textValue: null
    }),
    created(){
        this.textValue = this.text;
    },
    methods:{
        copyTextValue(event) {
            let target = event.target.closest('.copy_text');
            let targetValue = target.querySelector('.input__hidden')
            targetValue?.focus();
            targetValue.select();
            targetValue.setSelectionRange(0, 99999);
            document.execCommand("copy");
            let message = 'Text was copied';
            let messageWrap = document.createElement('span');
            messageWrap.classList.add('copy-message');
            messageWrap.innerText = message;
            target.appendChild(messageWrap);
            setTimeout(()=>{
                target.removeChild(messageWrap); 
            }, 3000)
        }
    }
}
</script>
<style lang="scss">
@import '@/includes/styles/_colors.scss';
.copy_text{
    position: relative;
    font-size: 18px;
    color: $primary;
    display: inline-block;
    cursor: pointer;
    word-break: break-all;
    @media(max-width: 1700px){
        font-size: 14px;
    }
    &__value{
        text-decoration: underline;
    }
    i{
        opacity: .4;
    }
    &.bordered{
        border: 1px solid $grey-light;
        background-color: $grey-lighter;
        border-radius: 8px;
        padding: 20px 30px;
    }
    .input__hidden{
        position: absolute;
        z-index: -99999;
        left: -9999px;
    }
    .copy-message{
        position: absolute;
        top: 0px;
        right: 0px;
        font-size: 14px;
        padding: 5px 10px;
        border: 1px solid $grey-light;
        background-color: $white;
        border-radius: 8px;
        transform: translate(-20px, -50%);
    }
}

</style>