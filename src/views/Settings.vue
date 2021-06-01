<template>
    <div class="settings">
        <button class="go-back" @click.prevent="$router.go(-1)" type="button">
            <i class="icon-arrow-left-middle"></i>
        </button>
        <div class="card card--white settings__container profile">
            <h2 class="font-large">Profile settings</h2>
            <div class="settings__block">
                <h3 class="settings__block_title">Personal information</h3>
                <div class="settings__block_item">
                    <div class="settings__block_label">Profile image</div>
                    <div class="settings__block_info">
                        <div class="profile__image">
                            <img src="../assets/image.png" alt="">
                        </div>
                    </div>
                    <div class="settings__block_edit">
                        <button 
                            class="edit_button"
                            @click="$modal.show('settings-step-form')"
                        >
                            <span class="edit_button__label">Edit</span> 
                            <i class="icon-angle-right"></i>
                        </button>
                    </div>
                </div>
                <div class="settings__block_item">
                    <div class="settings__block_label">E-mail</div>
                    <div class="settings__block_info">
                        xolxllz@gmail.com
                    </div>
                </div>
                <div class="settings__block_item">
                    <div class="settings__block_label">Phone number</div>
                    <div class="settings__block_info">
                        +7 066 364 19 19
                    </div>
                </div>
                <div class="settings__block_item">
                    <div class="settings__block_label">Verification</div>
                    <div class="settings__block_info">
                        <span v-if="isApproved" class="text--success">Approved</span>
                        <span v-else class="text--alert">Not passed</span>
                    </div>
                    <div class="settings__block_edit" v-if="!isApproved">
                        <button class="edit_button"><span class="edit_button__label">Get verified</span> <i class="icon-angle-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="settings__block">
                <h3 class="settings__block_title">Security</h3>
                <div class="settings__block_item">
                    <div class="settings__block_label">Password</div>
                    <div class="settings__block_info">
                        ********
                    </div>
                    <div class="settings__block_edit">
                        <button 
                            class="edit_button"
                            @click="$modal.show('modal-reset-password')"
                        >
                            <span class="edit_button__label">Reset</span> 
                            <i class="icon-angle-right"></i>
                        </button>
                    </div>
                </div>
                <div class="settings__block_item">
                    <div class="settings__block_label">Two-factor authentication</div>
                    <div class="settings__block_info">
                        Disabled
                    </div>
                    <div class="settings__block_edit">
                        <button class="edit_button" @click="$modal.show('modal-two-factor-auth')">
                            <span class="edit_button__label">Turn on</span> 
                            <i class="icon-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
		<modal 
			name="settings-step-form"
			width="90%"
			:maxWidth="744"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<settingsStepForm></settingsStepForm>
		</modal>
		<modal 
			name="modal-reset-password"
			width="90%"
			:maxWidth="500"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<passwordReset></passwordReset>
		</modal>
		<modal 
			name="modal-reset-password-varification"
			width="90%"
			:maxWidth="540"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<passwordResetVarification></passwordResetVarification>
		</modal>
		<modal 
			name="modal-two-factor-auth"
			width="90%"
			:maxWidth="650"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<twoFactorAuth></twoFactorAuth>
		</modal>
		<modal 
			name="modal-two-factor-code"
			width="90%"
			:maxWidth="500"
			height="auto" 
			:scrollable="true" 
			:adaptive="true">
			<twoFactorCode></twoFactorCode>
		</modal>
    </div>
</template>
<script>
import settingsStepForm from '@/components/modalTemplates/settingsStepForm'
import passwordReset from '@/components/modalTemplates/passwordReset'
import twoFactorAuth from '@/components/modalTemplates/twoFactorAuth'
import twoFactorCode from '@/components/modalTemplates/twoFactorCode'
import passwordResetVarification from '@/components/modalTemplates/passwordResetVarification'
export default {
    data: ()=>({
        isApproved: false
    }),
    components: { settingsStepForm, passwordReset, twoFactorAuth, twoFactorCode, passwordResetVarification }
}
</script>
<style lang="scss">
.settings{
    h2{
        margin-bottom: 40px;
    }
    &__block{
        margin-bottom: 50px;
        &:last-child{
            margin-bottom: 0px;
        }
        &_title{
            font-size: 22px;
            margin-bottom: 1em;
        }
        &_item{
            position: relative;
            padding: 18px 0;
            background-color: #F8F8F8;
            border: 1px solid #E9E9E9;
            border-radius: 5px;
            min-height: 65px;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-size: 16px;
            color: rgba(#0B111A, .5);
            &:last-child{
                margin-bottom: 0px;
            }
        }
        &_label{
            min-width: 300px;
            padding-left: 35px;
            font-weight: 600;
            color: #0B111A;
        }
        &_edit{
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            min-width: 170px;
            font-size: 16px;
            .edit_button{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                border: 1px solid #E9E9E9;
                background-color: #fff;
                border-radius: 5px;
                color: rgba(#0B111A, .5);
                font-weight: 600;
                padding: 0 20px;
                i{
                    margin-bottom: -2px;
                    font-size: 0.9em;
                    margin-right: -2px;
                }
            }
        }
    }
    .profile{
        &__image{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            img{
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
    }
    @media(max-width: 1600px){

    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 767px){
        .settings__block_item{
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
        }
        .settings__block_label{
            padding: 0px;
            margin-bottom: 10px;
        }
        .settings__block_edit{
            min-width: 26px;
        }
        .edit_button{
            padding: 0 ;
            &__label{display: none;}
        }
    }
}
</style>