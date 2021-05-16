<template>
    <label class="beInputCheckbox">
        <input 
            type="checkbox"
            class="beInputCheckbox__item"
            :class="{white: white}"
            @input="$emit('input', $event.target.value)"
            :name="name"
            :checked="isChecked"
            :value="value"
        >
        <span class="beInputCheckbox__placeholder">{{placeholder}} <slot></slot></span>
    </label>
</template>
<script>
export default {
    model:{
        prop: 'modelValue',
        event: 'input'
    },
    props: [
        'placeholder', 
        'name',
        'button',
        'value',
        'modelValue',
        'white'
    ],
    computed: {
        isChecked() {
            return this.modelValue == this.value
        }
    },
}
</script>
<style lang="scss">
.beInputCheckbox{
    display: inline-block;
    position: relative;
    vertical-align: middle;
    line-height: 1;
    cursor: pointer;
    &__item{
        position: absolute;
        opacity: 0;
        &:checked + .beInputCheckbox__placeholder{
            color: inherit;
            &:before{
                border-color: #2864FF;
                background-color: #2864FF;
            }
            &:after{
                opacity: 1;
                border-color: #fff;
                transform: rotate(45deg) scale(1);
            }
        }
        &.white{
            &:checked + .beInputCheckbox__placeholder{
                color: inherit;
                &:before{
                    border-color: #fff;
                    background-color: #fff;
                }
                &:after{
                    border-color: #2864FF;
                }
            }

        }
    }
    &__placeholder{
        padding-left: 30px;
        padding-right: 0px;
        border: none;
        height: auto;
        font-weight: 500;
        &:before{
            content: '';
            position: absolute;
            top: 1px;
            left: 0;
            display: block;
            width: 1em;
            height: 1em;
            border: 1px solid;
            border-radius: 4px;
            margin-right: 12px;
        }
        &::after{
            content: '';
            position: absolute;
            top: .2em;
            left: .35em;
            display: block;
            width: 0.32em;
            flex: 0 0 0.32em;
            height: .55em;
            border: none;
            border-bottom: 2px solid;
            border-right: 2px solid;
            transform: rotate(45deg) scale(0);
            opacity: 0;
            transition: .3s ease;
        }
    }
}
</style>