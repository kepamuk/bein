<template>
    <div class="giveaway">
        <button class="go-back" @click.prevent="$router.go(-1)" type="button">
            <i class="icon-arrow-left-middle"></i>
        </button>
        <h1 class="page__title">
            <i :class="$route.meta.icon" class="page__title_icon"></i> 
            {{$route.meta.linkText}}
        </h1>
        <div class="giveaway__container">
            <div class="card card--gradient row-flex justify-content-between align-items-center giveaway__main">
                <div class="">
                    <h3>You can win at any time!</h3>
                    <p>Get 1 ticket for every fixed-term frozen 500 BIXRP</p>
                </div>
                <beButton 
                    type="button" 
                    title="Invest"
                    class="white_btn" 
                    :large="true" 
                    :white="true"
                    @click="$router.push({name: 'Earnings'})"
                ><i class="icon-plus-outline-empty" slot="icon-left"></i></beButton>
            </div>
            <div class="card card--white row-flex align-items-center justify-content-around giveaway__tickets">
                <div class="row-flex align-items-center giveaway__tickets_info">
                    <div class="card--icon mr20"><i class="icon-ticket"></i></div>
                    <div class="giveaway__tickets_text">
                        <h3>Your tickets</h3>
                        <div class="text--primary font-large">123</div>
                    </div>
                </div>
                <div class="flex-full">
                    <beButton
                        class="read-more"
                        title="Read more"
                        :outline="true"
                        :arrowRight="true"
                    ></beButton>
                </div>
            </div>
            <div class="card card--dark text-center giveaway__timer">
                <div class="card--title-devider">Daily bonus from the company!</div>
                <div class="">
                    <p>You have a chance once every 24 hours to try your luck and win 1 - 500 BIXRP</p>
                    <p><i>You must have at least 500 BIXRP in your wallet to participate</i></p>
                </div>
                <div class="timer">
                    <div class="timer__label"><strong>The next attempt is available in:</strong></div>
                    <div class="timer__time">20:21:32</div>
                    <div class="timeline">
                        <div class="timeline__rail"></div>
                        <div class="timeline__label">Bonus received</div>
                    </div>
                </div>
            </div>
            <div class="card card--white giveaway__winners col-flex table_winners">
                <h4 class="table_winners__label">Top 10 winners</h4>
                <table class="table_winners__table">
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>User ID</th>
                            <th>Tickets</th>
                            <th>Prize</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i of 10" :key="i">
                            <td>{{i}}</td>
                            <td>1415415611</td>
                            <td>12</td>
                            <td>Tesla Model X</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.giveaway{
    &__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 150px 150px auto;
        grid-column-gap: 22px;
        grid-row-gap: 22px;
        @media(max-width: 1700px){
            grid-template-rows: 120px 120px auto;
        }
        @media(max-width: 1200px){
            grid-template-rows: auto auto auto;
        }
        @media(max-width: 1023px){
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
    }
    &__main{
        overflow: hidden;
        position: relative;
        z-index: 1;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        @media(max-width: 1023px){
            grid-column-start: auto;
            grid-column-end: auto;
            grid-row-start: auto;
            grid-row-end: auto;
            flex-direction: column;
            text-align: center;
            .btn-large{
                min-width: 100%;
            }
        }
        h3{
            font-size: 30px;
            margin-bottom: 10px;
            @media(max-width: 1023px){
                font-size: 22px;
                margin-bottom: 5px;
            }
            @media(max-width: 767px){
                font-size: 18px;
            }
        }
        p{
            font-size: 18px;
            @media(max-width: 1023px){
                font-size: 16px;
                margin-bottom: 20px;
            }
            @media(max-width: 767px){
                font-size: 14px;
            }
        }
        &::before{
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 40%;
            height: 150%;
            background-image: url(../assets/card-lines-white.png);
            background-size: cover;
            background-repeat: no-repeat;
            transform: translateY(-50%) rotateX(180deg);
            z-index: -1;
            opacity: .5;
            @media(max-width: 767px){
                width: 100%;
                height: 100%;
                background-position: -20% bottom;
                background-size: 120%;
            }
        }
        &::after{
            content: '';
            position: absolute;
            top: 0;
            left: auto;
            right: 0;
            width: 40%;
            height: 150%;
            background-image: url(../assets/card-lines-white.png);
            background-size: cover;
            z-index: -1;
            opacity: .5;
            @media(max-width: 767px){
                display: none;
            }
        }
    }
    &__tickets{
        @media(max-width: 1200px){
            flex-direction: column;
            &_info{
                flex-direction: column;
                text-align: center;
            }
            .card--icon{
                margin: 0 auto !important;
                width: 56px;
                height: 56px;
                font-size: 28px;
            }
            &_text{
                margin: 20px 0px 15px;
                h3{
                    font-size: 14px;
                }
            }
        }
    }
    &__winners{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
        @media(max-width: 1023px){
            grid-column-start: auto;
            grid-column-end: auto;
            grid-row-start: auto;
            grid-row-end: auto;
        }
    }
    .table_winners{
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 0px;
        overflow: hidden;
        &__label{
            font-size: 22px;
            padding-bottom: 30px;
            padding: 20px 30px;
            @media(max-width: 767px){
                font-size: 16px;
                padding: 20px;
            }
        }
        &__table{
            border-top: 1px solid rgba(#C4C4C4, .5);
            font-size: 18px;
            border-collapse: collapse;
            @media(max-width: 1700px){
                font-size: 16px;
            }
            @media(max-width: 1300px){
                font-size: 14px;
            }
            td, th{
                background-color: #F8F8F8;
                &:first-child{
                    text-align: left;
                    padding-left: 30px;
                    width: 110px;
                    @media(max-width: 767px){
                        width: auto;
                        padding-left: 20px;
                    }
                }
                &:nth-child(2){
                    text-align: left;
                    padding-left: 30px;
                }
                &:nth-child(3){
                    text-align: center;
                }
                &:last-child{
                    text-align: right;
                    padding-right: 30px;
                    @media(max-width: 767px){
                        padding-right: 20px;
                    }
                }
            }
            td{
                padding: 10px 0px;
                &:nth-child(odd){
                    color: rgba(#0B111A, .5);
                }
                &:last-child{
                    color: #2864FF;
                }
            } 
            th{
                padding: 20px 0px;
            }
            tr{
                border-bottom: 1px solid rgba(#C4C4C4, .5);
            }
        }
    }
    .read-more{
        white-space: nowrap;
        min-width: 340px;
        @media(max-width: 1700px){
            min-width: 250px;
        }
    }
    &__timer{
        p{
            font-size: 18px;
            & + p{
                margin-top: 1em;
            }
            @media(max-width: 767px){
                font-size: 14px;
            }
        }
    }
    .timer{
        margin-top: 30px;
        &__time{
            margin-top: 10px;
            margin-bottom: 40px;
        }
    }
    .white_btn{
        &:hover{
            background-color: #fff;
        }
    }
    @media(max-width: 767px){
        .card{
            padding: 30px 20px;
        }
        .table_winners{
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
            padding-top: 0px;
        }
    }
}
</style>