<template>
    <div class="beModal">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('modal')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
        </div>
        <vueCustomScrollbar 
            class="modal_scroll rail__normal"
            :settings="{
                wheelPropagation: false,
                suppressScrollX: true
            }"
        >
            <div class="beModal__body text-center">
                <h2 class="beModal__title">Receive BIXRP</h2>
                <beSelect 
                    :selectArray="selectList"
                    v-model="selectedItem"
                    class="wallet_select text--black"
                >
                    <span slot="small_text">354.12 BIXRP</span>
                </beSelect>
                <div class="beModal__qr_code">
                    <img src="@/assets/qr.svg" alt="">
                </div>
                <div class="qr_code__label">Your BIXRP Address</div>
                <beCopyText
                    :bordered="true"
                    class="walet__hash" 
                    text="13tL5oHakHbsv1kGUtkLuE4hkyzGcyijmt"
                ></beCopyText>
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
        </vueCustomScrollbar>
    </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import { mapGetters } from 'vuex';
export default {
    data:()=>({
        selectList: null,
        selectedItem: null
    }),
    components:{
        vueCustomScrollbar
    },
    computed: {
        ...mapGetters([
            'getSelectList',
            'getSelectedItem'
        ])
    },
    created(){
        this.selectList = this.getSelectList
        this.selectedItem = this.getSelectedItem
    },
    methods: {
        confirmSending(){
            this.$modal.hide('modal')
            this.$modal.show('modal-confirm')
        }
    }
}
</script>