<template>
	<div class="trading">
        <div class="trading__content text-center">
            <h2 class="title__devider">The trading section is currently under development.</h2>
            <p class="mb30">I don't know what to write, text is sorely needed</p>
            <beButton title="Okay" @click="$router.push({name: 'Dashboard'})"></beButton>
        </div>
    </div>
</template>
<style lang="scss">
.page_wrapper{
    position: relative;
}
.trading{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/trading.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 12px 12px 40px rgba(#fff, .2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
