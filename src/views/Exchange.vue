<template>
    <div class="exchange">
        <h1 class="page__title">
            <i :class="$route.meta.icon" class="page__title_icon"></i> 
            {{$route.name}}
        </h1>
        <div class="card card--white">
            <h2 class="mb30">{{$route.name}}</h2>
            <div class="row">
                <div class="col-6 card card--gradient"></div>
                <div class="col-6 card card--gradient-purple"></div>
            </div>
        </div>
    </div>
</template>