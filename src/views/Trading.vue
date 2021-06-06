<template>
	<div class="about">
		<button class="go-back" @click.prevent="$router.go(-1)" type="button">
            <i class="icon-arrow-left-middle"></i>
		</button>
        <h1 class="page__title">
			<i :class="$route.meta.icon" class="page__title_icon"></i> 
			{{$route.meta.linkText}}
		</h1>
    </div>
</template>
