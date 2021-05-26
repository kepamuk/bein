<template>
    <div class="settings">
        <button class="go-back" @click.prevent="$router.go(-1)" type="button">
            <i class="icon-arrow-left-middle"></i>
        </button>
        <div class="card card--white settings__container profile">
            <h2 class="font-large">Profile settings</h2>
            <div class="settings__block">
                <h3 class="settings__block_title">Personal data</h3>
                <div class="settings__block_item">
                    <div class="settings__block_label">Profile image</div>
                    <div class="settings__block_info">
                        <div class="profile__image">
                            <img src="../assets/image.png" alt="">
                        </div>
                    </div>
                    <div class="settings__block_edit">
                        <button>Edit <i class="icon-angle-right"></i></button>
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
                        <button>Reset <i class="icon-angle-right"></i></button>
                    </div>
                </div>
                <div class="settings__block_item">
                    <div class="settings__block_label">Two-factor authentication</div>
                    <div class="settings__block_info">
                        Disabled
                    </div>
                    <div class="settings__block_edit">
                        <button>Turn on <i class="icon-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: ()=>({
        isApproved: true
    })
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
            &:last-child{
                margin-bottom: 0px;
            }
        }
        &_label{
            min-width: 300px;
            padding-left: 35px;
            font-weight: 600;
        }
        &_edit{
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            min-width: 170px;
            font-size: 16px;
            button{
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
                padding: 0 40px;
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
        
    }
}
</style>