<template>
    <div>
        <h1 class="page__title">{{$route.name}}</h1>
        <mainLayouts></mainLayouts>
    </div>
</template>
<script>
import mainLayouts from '@/components/mainLayouts'
export default {
	name: "Components",
	components: {
		mainLayouts
	},
}
</script>