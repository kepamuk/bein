<template>
    <div class="beModal">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('modal-output')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="beModal__body text-center">
            <h2 class="beModal__title">Send BIXRP</h2>
            <beSelect 
                :selectArray="selectList"
                v-model="selectedItem"
                class="wallet_select mb15 text--black"
            >
                <span slot="small_text">354.12 BIXRP</span>
            </beSelect>
            <beInput 
                class="xrp_address mb15"
                placeholder="Send to BIXRP address"
                :transparent="false"
            >
                <i class="icon-qr-code" slot="right"></i>
            </beInput>
            <beInput 
                class="destination_tag mb15"
                placeholder="Destination tag"
                type="number"
                :recomended="true"
            >
                <bePrompt
                    slot="right"
                    text="Indicate the beneficiary or destination for a transaction"
                    class="text--primary"
                ></bePrompt>
            </beInput>
            <beInput 
                type="number"
                class="xrp_ballance"
                placeholder="0"
                :transparent="true"
                v-model="inputVal"
                :maxVal="XRP.balance"
            >
                <span slot="right">BIXRP</span>
            </beInput>
            <div class="xrp_to_usd">
                <div class="converted_value">{{xrpToUsd[0]}}<small>.{{xrpToUsd[1] || '00'}}</small></div>
                <div class="convert_to_currency">USD</div>
            </div>
        </div>
        <div class="beModal__footer text-center">
            <beButton
                type="button"
                title="Confirm"
                class="confirm_button"
                :shadow="true"
                @click="confirmSending"
            ></beButton>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import {formatCurency} from '@/helpers/helpers'
import bePrompt from '../bePrompt.vue';
export default {
  components: { bePrompt },
    data:()=>({
        selectList: null,
        selectedItem: null,
        inputVal: 0,
        XRP: null,
        walletBalance: null
    }),
    computed: {
        ...mapGetters([
            'getSelectList',
            'getSelectedItem',
            'getXRP'
        ]),
        xrpToUsd(){
			return formatCurency(this.inputVal * 2).split('.');
        }
    },
    created(){
        this.XRP = this.getXRP
        this.selectList = this.getSelectList
        this.selectedItem = this.getSelectedItem
    },
    methods: {
        confirmSending(){
            this.$modal.hide('modal-output')
            this.$modal.show('modal-confirm')
        }
    }
}
</script>
<style lang="scss">
@import '@/includes/styles/_colors.scss';
.destination_tag,
.xrp_ballance,
.xrp_address{
    width: 100%;
}
.xrp_ballance{
    color: $primary;
    input{
        font-size: 18px;
        color: $primary
    }
    .beInput__placeholder{
        font-size: 18px;
        color: $primary
    }
}
.xrp_to_usd{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    font-size: 18px;
    small{
        font-size: 14px;
    }
}
.convert_to_currency{
    font-size: 16px;
    @media(max-width: 1600px){
        font-size: 14px;
    }
}
</style>