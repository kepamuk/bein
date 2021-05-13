<template>
    <div class="prompt" ref="prompt">
        <div class="prompt__icon">
            <i class="icon-help"></i>
        </div>
        <div 
            class="prompt__popup" 
            ref="promptPopup" 
            :class="[{bottom: positionBottom}, {left: positionLeft}]"
        >
            {{text}}
        </div>
    </div>
</template>
<script>
export default {
    props: ['text'],
    data: ()=>({
        elementX: null,
        elementY: null,
        documentWidth: null,
        positionBottom: false,
        positionLeft: false
    }),
    created(){
        this.documentWidth = document.body.clientWidth;
    },
    mounted() {
        this.getPosition();
        window.addEventListener('resize', ()=>{
            this.documentWidth = document.body.clientWidth;
            this.getPosition();
        });
    },
    methods: {
        getPosition(){
            let element = this.$refs.prompt;
            if(element){
                this.elementX = element.getBoundingClientRect().left;
                this.elementY = element.getBoundingClientRect().top;
            }
            this.getPositionBottom();
            this.getPositionLeft();
        },
        getPositionBottom(){
            let popup = this.$refs.promptPopup;
            this.positionBottom = this.elementY < popup?.clientHeight + 25
        },
        getPositionLeft(){
            let popup = this.$refs.promptPopup;
            this.positionLeft = this.documentWidth - this.elementX < popup?.clientWidth + 20
        }
    }
}
</script>
<style lang="scss">
    @import '@/includes/styles/_colors.scss';
    .prompt{
        position: relative;
        display: inline-block;
        &:hover{
            .prompt__popup{
                bottom: 100%;
                opacity: 1;
                visibility: visible;
                &.bottom{
                    bottom: auto;
                    top: 100%;
                }
            }
        }
        &__icon{
            font-size: inherit;
        }
        &__popup{
            position: absolute;
            bottom: calc(100% + 20px);
            left: 50%;
            min-width: 200px;
            max-width: 340px;
            padding: 20px 30px;
            background-color: $white;
            box-shadow: 8px 8px 40px rgba(23, 25, 31, 0.15);
            margin-bottom: 15px;
            border-radius: 15px 15px 15px 0;
            font-size: 0.8em;
            font-weight: 500;
            opacity: 0;
            color: $bg-dark;
            visibility: hidden;
            transition: .3s ease;
            transition-property: opacity, bottom, top;
            z-index: 1;
            @media(max-width: 1600px){
                font-size: 14px;
                padding: 15px 20px;
                margin-bottom: 7px;
                border-radius: 8px 8px 8px 0;
                max-width: 260px;
            }
            &::before{
                content: '';
                position: absolute;
                top: 100%;
                left: 0px;
                display: block;
                width: 28px;
                height: 15px;
                background-image: url('../assets/prompt-angle.svg');
                background-size: contain;
                background-repeat: no-repeat;
                @media(max-width: 1600px){
                    width: 15px;
                    height: 7px;
                }
            }
            &.bottom{
                bottom: auto;
                top: calc(100% + 20px);
                margin-bottom: 0;
                margin-top: 15px;
                border-radius: 0 15px 15px 15px;
                @media(max-width: 1600px){
                    margin-top: 7px;
                }
                &::before{
                    top: auto;
                    bottom: 100%;
                    transform: scaleY(-1);
                }
            }
            &.left{
                right: 50%;
                left: auto;
                border-radius: 15px 0 15px 15px;
                &::before{
                    left: auto;
                    right: 0;
                    top: auto;
                    bottom: 100%;
                    transform: scale(-1);
                }
                &:not(.bottom){
                    right: 50%;
                    left: auto;
                    border-radius: 15px 15px 0 15px;
                    &::before{
                        left: auto;
                        right: 0;
                        top: 100%;
                        bottom: auto;
                        transform: scaleX(-1);
                    }
                }
            }
        }
    }
</style>