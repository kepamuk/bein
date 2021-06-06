<template>
    <label class="beInputRadio" :class="[{'circle': round}, {'beInputRadio__button': button}]">
        <input 
            type="radio"
            class="beInputRadio__item"
            @input="$emit('input', $event.target.value)"
            :name="name"
            :checked="isChecked"
            :value="value"
        >
        <span class="beInputRadio__placeholder" :class="inputClass">{{placeholder}}</span>
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
        'inputClass',
        'round'
    ],
    computed: {
        isChecked() {
            return this.modelValue == this.value
        }
    },
}
</script>
<style lang="scss">
.beInputRadio{
    display: inline-block;
    position: relative;
    vertical-align: middle;
    line-height: 1;
    cursor: pointer;
    &:not(.beInputRadio__button){
        .beInputRadio__placeholder{
            padding-left: 30px;
            padding-right: 0px;
            border: none;
            height: auto;
            font-weight: 500;
            background-color: transparent;
            &:before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 16px;
                height: 16px;
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
                width: 6px;
                flex: 0 0 6px;
                height: 9px;
                border: none;
                border-bottom: 2px solid;
                border-right: 2px solid;
                transform: rotate(45deg) scale(0);
                opacity: 0;
            }
        }
        &.circle{
            .beInputRadio__placeholder{
                &:before{
                    border: 2px solid;
                    border-radius: 50%;
                    box-sizing: border-box;
                }
                &:after{
                    top: 8px;
                    left: 0;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: #2864FF;
                    border: none;
                    transform: translate(50%, -50%) rotate(0) scale(0);
                }
            }
            .beInputRadio__item{
                &:checked{
                    & ~ .beInputRadio__placeholder{
                        &:before{
                            border-color: #2864FF;
                        }
                        &:after{
                            transform: translate(50%, -50%) rotate(0) scale(1);
                        }
                    }
                }
            }
        }
        .beInputRadio__item{
            &:checked{
                & ~ .beInputRadio__placeholder{
                    background-color: transparent;
                    border-color: transparent;
                    color: inherit;
                    &:after{
                        opacity: 1;
                        transform: rotate(45deg) scale(1);
                    }
                }
            }
        }
    }
    &__item{
        position: absolute;
        opacity: 0;
        visibility: hidden;
        &:checked + .beInputRadio__placeholder{
            background-color: #2864FF;
            border-color: #2864FF;
            color: #fff;
        }
    }
    &__placeholder{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        border: 1px solid #E9E9E9;
        border-radius: 5px;
        background-color: #F8F8F8;
        font-weight: 600;
        padding: 0 1em;
        pointer-events: none;
        color: rgba(#0B111A, .5);
        transition: .3s ease;
        @media(max-width: 1600px){
            height: 45px;
        }
    }
}
</style>