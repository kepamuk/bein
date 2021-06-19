<template>
    <div class="beModal">
        <div class="beModal__header">
            <div class="beModal__close">
                <div slot="top-right">
                    <button @click="$modal.hide('settings-step-form')">
                        <i class="icon-close"></i>
                    </button>
                </div>
            </div>
            <div class="steps">
                <div class="steps__item" @click="goToStep(1)" :class="{active: currentstep == 1 || currentstep == 2 ||  currentstep == 3}"></div>
                <div class="steps__item" @click="goToStep(2)" :class="{active: currentstep == 2 ||  currentstep == 3}"></div>
                <div class="steps__item" @click="goToStep(3)" :class="{active: currentstep == 3}"></div>
            </div>
        </div>
        <vueCustomScrollbar 
            class="modal_scroll rail__normal"
            :settings="{
                wheelPropagation: false,
                suppressScrollX: true
            }"
        >
            <div class="beModal__body">
                <div class="step step__content" :class="{active: currentstep == 1}">
                    <h2 class="beModal__title">01. Identification documents</h2>
                    <div class="row">
                        <div class="col-7">
                            <h4 class="select_label mb10">Select your country</h4>
                            <beSelect 
                                :selectArray="selectCountryList"
                                v-model="selectedCountryItem"
                                class="full-width mb15 text--black"
                            ></beSelect>
                            <h4 class="select_label mb10">Type of document</h4>
                            <beSelect 
                                :selectArray="selectDocumentList"
                                v-model="selectedDocumentItem"
                                class="full-width mb15 text--black"
                            ></beSelect>
                            <h4 class="select_label mb10">Document scan</h4>
                            <beInputFile
                                class="full-width"
                                :isButton="true" 
                                v-model="selectedDocumentFile"
                                label="Attach file"
                            ></beInputFile>
                        </div>
                        <div class="col-5">
                            <!-- <img class="full-width" :src="`${selectedDocumentFile}`" alt="" v-if="selectedDocumentFile && selectedDocumentFile.length"> -->
                            <img class="full-width" src="../../assets/example.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="step step__content" :class="{active: currentstep == 2}">
                    <h2 class="beModal__title">02. Selfie with documents</h2>
                    <div class="row">
                        <div class="col-7">
                            <ul>
                                <li>Stand in front of a light-colored background</li>
                                <li>Look directly into the camera</li>
                                <li>Take a photo without a headdress and glasses</li>
                            </ul>
                            <!-- <h4 class="select_label mb10">Selfie with documents</h4> -->
                            <beInputFile
                                class="full-width"
                                :isButton="true" 
                                v-model="selectedSelfieFile"
                                label="Attach file"
                            ></beInputFile>
                        </div>
                        <div class="col-5">
                            <!-- <img class="full-width" :src="`${selectedSelfieFile}`" alt="" v-if="selectedSelfieFile && selectedSelfieFile.length"> -->
                            <div class="example">
                                <img class="full-width" src="../../assets/example2.png" alt="">
                                <div class="example__text">EXAMPLE</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step step__content" :class="{active: currentstep == 3}">
                    <h2 class="beModal__title">03. Personal information</h2>
                    <h4 class="mb10">Personal Data</h4>
                    <div class="row mb20">
                        <div class="col-6">
                            <beInput class="full-width" placeholder="First name"></beInput>
                        </div>
                        <div class="col-6">
                            <beInput class="full-width" placeholder="Last name"></beInput>
                        </div>
                    </div>
                    <h4 class="mb10">Date of birth</h4>
                    <div class="row mb20">
                        <div class="col-4">
                            <beInput class="full-width" placeholder="Day" type="number"></beInput>
                        </div>
                        <div class="col-4">
                            <beSelect 
                                :selectArray="getMonths"
                                v-model="selectedMonth"
                                class="full-width text--black"
                                selectPlaceholder="Month"
                            ></beSelect>
                        </div>
                        <div class="col-4">
                            <beInput class="full-width" placeholder="Year" type="number"></beInput>
                        </div>
                    </div>
                    <h4 class="mb10">Contact information</h4>
                    <beInput class="full-width mb15" placeholder="City"></beInput>
                    <div class="row ">
                        <div class="col-6">
                            <beInput class="full-width" placeholder="Address"></beInput>
                        </div>
                        <div class="col-6">
                            <beInput class="full-width" placeholder="Zip Code" type="number"></beInput>
                        </div>
                    </div>
                </div>
            </div>
            <div class="beModal__footer">
                <div class="row-flex justify-content-between">
                    <beButton
                        type="button"
                        title="Complete later"
                        class="text--grey"
                        :link="true"
                        @click="submitData"
                    ></beButton>
                    <beButton
                        v-if="currentstep == 3"
                        type="button"
                        title="Submit"
                        :shadow="true"
                        @click="submitData"
                    ></beButton>
                    <beButton
                        v-else
                        type="button"
                        title="Сontinue"
                        class="confirm_button"
                        :shadow="true"
                        @click="nextStep"
                    ></beButton>
                </div>
            </div>
        </vueCustomScrollbar>
    </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import transactionsSend from '@/components/modalTemplates/transactionsSend';
import { mapGetters } from 'vuex';
export default {
    data: ()=>({
        currentstep: 1,
        clickedItem: null,
        selectCountryList: [
			{value: 1, label: 'Country 1'},
			{value: 2, label: 'Country 2'},
			{value: 3, label: 'Country 3'},
			{value: 4, label: 'Country 4'},
			{value: 5, label: 'Country 5'},
			{value: 6, label: 'Country 6'}
        ],
        selectedCountryItem: null,
        selectDocumentList: [
			{value: 1, label: 'Document 1'},
			{value: 2, label: 'Document 2'},
			{value: 3, label: 'Document 3'},
			{value: 4, label: 'Document 4'},
			{value: 5, label: 'Document 5'},
			{value: 6, label: 'Document 6'}
        ],
        selectedDocumentItem: null,
        selectedDocumentFile: null,
        selectedSelfieFile: null,
        selectedMonth: null
    }),
    computed:{
        ...mapGetters([
            'getMonths'
        ])
    },
    components:{
        vueCustomScrollbar
    },
    methods: {
        goToStep(step){
            console.log(step);
            this.currentstep = step;
        },
        nextStep(){
            this.currentstep++
            if(this.currentstep > 3){
                this.currentstep = 3
            }
        },
        submitData(){
            console.log('submit data');
            this.$modal.hide('settings-step-form')
            this.$modal.show(
                transactionsSend, 
                {
                    successTitle: 'Information have been save',
                    successText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat rerum amet ut sit corrupti unde fugiat similique? Quas, reprehenderit deserunt nobis nisi eligendi error ratione amet. Dicta, sequi repudiandae!'
                },
                { height: 'auto', width: "90%", maxWidth: 540, adaptive: true }
            )
        }
    },
}
</script>
<style lang="scss" scoped>
.beModal{
    &__header{
        padding: 30px 50px;
    }
    &__title{
        color: #0B111A;
    }
    &__body{
        padding-bottom: 30px;
    }
    &__footer{
        border-top: 1px solid rgba(#000, .2);
    }
    .btn{
        font-size: 18px;
    }
    .confirm_button{
        width: 250px;
    }
}
.steps{
    counter-reset: my-awesome-counter;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &__item{
        position: relative;
        counter-increment: my-awesome-counter;
        background-color: #B6B8BA;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #fff;
        &:first-child{
            background-color: #2864FF;
        }
        &:not(:first-child){
            margin-left: 75px;
            &::after{
                content: '';
                position: absolute;
                top: 50%;
                right: 100%;
                width: 75px;
                border-top: 2px dashed #B6B8BA;
                transform: translateY(-50%);
            }
        }
        &.active{
            background-color: #2864FF;
            &::after{
                border-top: 2px solid #2864FF;
            }
        }
        &::before{
            content: "0"counter(my-awesome-counter);
            font-size: 16px;
        }
    }
}
.step{
    display: none;
    &.active{
        display: block;
    }
    &__icon{
        font-size: 50px;
    }
    &__title{
        color: #0B111A;
        @media(max-width: 1700px){
            &.mb40{
                margin-bottom: 20px !important;
            }
        }
    }
    ul{
        li{
            position: relative;
            padding-left: 1.5em;
            margin-bottom: 1em;
            &::before{
                content: '';
                position: absolute;
                left: 0px;
                top: 0.35em;
                width: 0.66666666em;
                height: 0.66666666em;
                border-radius: 50%;
                background-color: #2864FF;
                line-height: 0;
            }
        }
    }
}
.select_label{
    color: #0B111A;
}
.example{
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    overflow: hidden;
    img{
        display: block;
        width: 100%;
        height: auto;

    }
    &__text{
        text-align: center;
        padding: 20px 0px;
        font-size: 22px;
        text-transform: uppercase;
        color: rgba(#0B111A, .5);
        font-weight: 600;
    }
}
</style>