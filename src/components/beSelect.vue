<template>
    <div class="select" :class="{'select__shadow': shadow, 'select__transparent': transparent}" ref="select">
        <div class="select__value" :class="{'icon_left': sortingIcon || refreshIcon}" @click="toggleSelectFocus">
            <span class="select__icon_sorting" v-if="sortingIcon">
                <i class="icon-ascending-sorting"></i>
            </span>
            <span class="select__icon_sorting" v-if="refreshIcon">
                <i class="icon-refresh"></i>
            </span>
            <span :class="[selectedItemClass, 'selected__value']">{{selectValue || selectPlaceholder || 'Select item'}}</span>
            <span class="select__additinal">
                <slot name="small_text"></slot>
            </span>
            <span v-if="dropdownIcon" class="select__dropdown_icon" :class="{active: selectFocused}"><i class="icon-arrow-right"></i></span>
        </div>
        <transition name="dropdown_fade">
            <div class="select__dropdown" v-if="selectFocused">
                <vueCustomScrollbar 
                    class="dropdown__scrollbar"
                    :settings="{
                        wheelPropagation: false
                    }"
                >
                    <ul>
                        <li 
                            v-for="(item, idx) in selectItems"
                            :key="idx"
                            class="select__dropdown_item" 
                            :data-value="item.value" 
                            @click="selectItem(item, $event)"
                            :class="{checked: item.selected}"
                        >
                            <span>{{item.label}}</span>
                            <span v-if="item.amount">{{item.amount}}</span>
                        </li>
                        <li class="select__dropdown_item"><slot name="customField"></slot></li>
                    </ul>
                </vueCustomScrollbar>
            </div>
        </transition>
    </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
    name: 'beSelect',
    props: {
        selectPlaceholder: String,
        selectArray: Array,
        selected: {},
        shadow: Boolean,
        transparent: Boolean,
        refreshIcon: Boolean,
        sortingIcon: Boolean,
        selectedItemClass: String,
        dropdownIcon: {
            default: true
        }
    },
    model:{
        prop: 'selected',
        event: 'change'
    },
    components: {vueCustomScrollbar},
    data: ()=>({
        selectFocused: false,
        selectItems: [],
        selectedItem: null
    }),
    computed:{
        selectValue(){
            return this.selectedItem?.label
        }
    },
    mounted(){
        document.addEventListener('click', this.clickOutsideSelect)
    },
    created(){
        this.selectedItem = this.selected;
        this.selectItems = this.selectArray.map(item=>{
            return {
                ...item,
                selected: false
            }
        });
        for(let item of this.selectItems){
            if(item?.value == this.selectedItem?.value){
                item.selected = true;
            }
        }
    },
    methods:{
        toggleSelectFocus(){
            this.selectFocused = !this.selectFocused;
        },
        selectItem(item){
            this.selectedItem = item; 
            this.selectItems.forEach(item=>item.selected = false)
            item.selected = true
            let emitValue = JSON.parse(JSON.stringify(this.selectedItem))
            delete emitValue['selected']
            this.$emit('change', emitValue);
            this.selectFocused = false;
        },
        clickOutsideSelect(event){
            let select = this.$refs.select;
            if(select){
                if (!select.contains(event.target)) {
                    this.selectFocused = false;
                }
            }
        }
    }
}
</script>
<style lang="scss">
.selected__value{
    padding-right: 30px;
    font-size: 16px;
    font-weight: 500;
}
.icon_left{
    .selected__value{
        padding-left: 30px;
    }
}
.select{
    position: relative;
    display: inline-block;
    border-radius: 8px;
    &__shadow{
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.15);
    }
    &__icon_sorting{
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
    }
    &__value{
        display: block;
        position: relative;
        // color: rgba(#0B111A, .5);
        // opacity: .5;
        cursor: pointer;
        input{
            display: block;
            height: 60px;
            width: 100%;
            min-width: 150px;
            border: none;
            background: none;
            box-sizing: border-box;
            padding: 0px 30px;
            font-size: 16px;
            font-weight: 500;
            line-height: 1;
            pointer-events: none;
            @media(max-width: 1700px){
                height: 45px;
            }
            &:focus{
                outline: transparent;
            }
        }
        &.icon_left{
            input{
                padding-left: 40px;
            }
        }
    }
    &__additinal{
        position: absolute;
        top: 50%;
        right: 50px;
        font-size: 12px;

        transform: translateY(-50%);
    }
    &__dropdown_icon{
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%) rotate(90deg);
        pointer-events: none;
        transition: .3s ease;
        &.active{
            transform: translateY(-50%) rotate(90deg) scaleX(-1);
        }
    }
    &:not(.select__transparent){
        .select__dropdown{
            position: absolute;
            top: 100%;
            background-color: #fff;
            width: 100%;
            z-index: 999;
            box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.15);
            &_item{
                padding: 15px 30px;
                font-size: 16px;
                transition: background .3s ease;
                cursor: pointer;
                text-align: left;
                @media (max-width: 1700px) {
                    padding: 12px 30px;
                }
                &:hover{
                    background-color: rgba(#0B111A, .05);
                }
                &.checked{
                    background-color: rgba(#0B111A, .08);
                }
            }
        }
        .select__dropdown_icon{
            right: 15px;
        }
        .dropdown__scrollbar{
            max-height: 250px;
            padding: 15px 0px;
            @media (max-width: 1700px) {
                padding: 12px 0px;
            }
        }
        .select__value{
            display: block;
            position: relative;
            background-color: #F8F8F8;
            border: 1px solid #E9E9E9;
            border-bottom: 2px solid #D0D0D0;
            color: rgba(#0B111A, .5);
            border-radius: 8px 8px 0 0;
            cursor: pointer;
            .selected__value{
                display: flex;
                align-items: center;
                height: 60px;
                width: 100%;
                min-width: 150px;
                border: none;
                background: none;
                box-sizing: border-box;
                padding: 0px 30px;
                font-size: 16px;
                font-weight: 500;
                line-height: 1;
                pointer-events: none;
                @media(max-width: 1700px){
                    height: 45px;
                }
                &:focus{
                    outline: transparent;
                }
            }
            &.icon_left{
                input{
                    padding-left: 40px;
                }
            }
        }
    }
    &__dropdown{
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        min-width: 100%;
        z-index: 999;
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        min-width: 220px;
        @media(max-width: 767px){
            left: 50%;
            transform: translateX(-50%);
        }
        &_item{
            padding: 15px 30px;
            font-size: 16px;
            transition: background .3s ease;
            cursor: pointer;
            text-align: left;
            color: #0B111A;
            display: flex;
            align-items: center;
            justify-content: space-between;
            white-space: nowrap;
            &:empty{
                display: none;
            }
            &>*+*{
                margin-left: 40px;
                color: rgba(#0B111A, .5);
            }
            @media (max-width: 1700px) {
                padding: 12px 30px;
            }
            &:hover{
                background-color: rgba(#0B111A, .05);
            }
            &.checked{
                background-color: rgba(#0B111A, .08);
            }
        }
    }
    .dropdown__scrollbar{
        padding: 15px 0px;
        @media (max-width: 1700px) {
            padding: 12px 0px;
        }
    }
    .ps__rail-y{
        transform: scale(1) translateX(0);
    }
    .ps__thumb-x, .ps__thumb-y,
    .ps--active-x > .ps__rail-x, .ps--active-y > .ps__rail-y{
        border-radius: 0;
    }
}
</style>