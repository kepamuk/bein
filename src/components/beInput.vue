<template>
    <label class="beInput" :class="{'beInput__transparent': transparent}">
        <input 
            :type="type || 'text'" 
            class="beInput__item" 
            placeholder=" " 
            v-model="inputValue"
            @input="$emit('input', inputValue)"
            :min="minVal"
            :max="maxVal"
            :name="name"
            :step="step"
        >
        <span class="beInput__placeholder">{{placeholder}}</span>
        <i class="recomended" v-if="recomended">(Recomended)</i>
        <span class="beInput__right">
            <slot name="right"></slot>
        </span>
    </label>
</template>
<script>
export default {
    data: ()=>({
        inputValue: null
    }),
    props: [
        'placeholder', 
        'transparent', 
        'type', 
        'recomended',
        'minVal',
        'maxVal',
        'name',
        'step'
    ],
    watch: {
        inputValue(val){
            if(val > this.maxVal){
                this.inputValue = this.maxVal
            }
        }
    }
}
</script>
<style lang="scss">
.beInput{
    display: inline-block;
    background-color: #F8F8F8;
    position: relative;
    &:not(.beInput__transparent) &__item{
        background-color: transparent;
        border: 1px solid #E9E9E9;
        padding: 0 30px;
        border-bottom: 2px solid #D0D0D0;
    }
    &__item{
        display: block;
        width: 100%;
        border: none;
        height: 60px;
        border-radius: 8px 8px 0 0;
        border-bottom: 2px solid #D0D0D0;
        box-sizing: border-box;
        font-size: 18px;
        @media(max-width: 1600px){
            font-size: 16px;
            height: 45px;
        }
        &:focus{
            outline: transparent;
        }
        &:focus ~ .beInput__placeholder,
        &:not(:placeholder-shown) ~ .beInput__placeholder{
            opacity: 0;
        }
        &[type=number]::-webkit-outer-spin-button,
        &[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type=number] {
            -moz-appearance:textfield;
        }
    }
    &:not(.beInput__transparent) &__placeholder{
        left: 30px;
    }
    &__placeholder{
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        pointer-events: none;
        color: rgba(#0B111A, .5);
        transition: .3s ease;
    }
    &:not(.beInput__transparent) &__right{
        right: 15px;
    }
    &__right{
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
        font-size: 16px;
        color: inherit;
        @media(max-width: 1600px){
            font-size: 14px;
        }
    }
    .recomended{
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
        font-size: 16px;
        @media(max-width: 1600px){
            font-size: 14px;
        }
        @media(max-width: 767px){
            font-size: 12px;
        }
    }
}
</style>