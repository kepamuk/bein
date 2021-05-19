<template>
    <div class="support full-height col-flex align-items-center justify-content-center">
		<button class="go-back" @click.prevent="$router.go(-1)" type="button">
            <i class="icon-arrow-left-middle"></i>
		</button>
        <h1 class="page__title">
            <i :class="$route.meta.icon" class="page__title_icon"></i> 
            {{$route.name}}
        </h1>
        <div class="row flex-full">
            <div class="col-6 card card--white col-flex">
                <h2 class="mb15">Support Service</h2>
                <p>Write to us and we will be glad to help you with your problems and will send an answer to the email indicated in your profile</p>
                <div class="flex-full">
                    <textarea class="textarea" placeholder="Your message"></textarea>
                </div>
                <div>
                    <beButton
                        title="Send"
                    ></beButton>
                </div>
            </div>
            <div class="col-6 card card--white col-flex">
                <h2 class="mb35">You can also find answers to common questions:</h2>
                <div class="row flex-full">
                    <div class="col-6">
                        <h3 class="title__devider">Investments</h3>
                        <ul class="support__issues">
                            <li><a href="#">Glossary</a></li>
                            <li><a href="#">How we accrue percentages</a></li>
                            <li><a href="#">How much you can earn?</a></li>
                            <li><a href="#">Deposit opening</a></li>
                            <li><a href="#">How to use the calculator</a></li>
                            <li><a href="#">How to withdraw from the balance of investment</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <h3 class="title__devider">Wallets</h3>
                        <ul class="support__issues">
                            <li><a href="#">Creating a Wallet</a></li>
                            <li><a href="#">Replenish wallet</a></li>
                            <li><a href="#">"Money gone - balance not replenished."</a></li>
                            <li><a href="#">Withdrawing money from a wallet</a></li>
                            <li><a href="#">Be in Wallet - the best exchanger</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <beButton
                        title="Read more"
                        :outline="true"
                        :arrowRight="true"
                    ></beButton>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.support{
    &__issues{
        li{
            margin-bottom: 15px;
        }
        a{
            display: block;
            text-decoration: underline;
        }
    }
}
@media (max-width: 1200px){
    .support{
        display: block !important;
        height: auto !important;
    }
    .col-6{
        width: calc(100% - 22px);
        flex: 0 0 calc(100% - 22px);
    }
}
</style>