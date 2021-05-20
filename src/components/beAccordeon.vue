<template>
    <div class="accordeon" :class="{opened: openContent}">
        <div class="accordeon__title" @click="openContent = !openContent">
            <slot name="title">Details</slot>
            <span class="accordeon__title_icon"><i class="icon-arrow-right"></i></span>
        </div>
        <div class="accordeon__dropdown" v-if="openContent">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    data: ()=>({
        openContent: false,
    }),
    methods: {
        openAccordeonItem(){

        }
    }
}
</script>
<style lang="scss">
.accordeon{
	background-color: #fff;
	border-radius: 12px;
    overflow: hidden;
	&__title{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px 20px;
		font-weight: 600;
        cursor: pointer;
		&_icon{
			transform: rotate(90deg);
		}
	}
    &__dropdown{
        border-top: 2px solid rgba(#0B111A, 0.1);
        padding: 15px 20px;
    }
    &.opened{
        .accordeon__title{
            background-color: #F8F8F8;
        }
        .accordeon__title_icon{
			transform: rotate(-90deg);
        }
    }
}
</style>