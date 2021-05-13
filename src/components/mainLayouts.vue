<template>
    <div class="">

        <div id="buttons" class="card mb30 card--gradient">
            <beButton type="submit" title="Вывод" :outline="true" :white="true"><i class="icon-sign-out" slot="icon-left"></i></beButton>
            <beButton type="button" title="Вывод" :outline="false" :white="true"><i class="icon-sign-out" slot="icon-left"></i></beButton>
            <beButton type="button" title="Вывод" :outline="false" :white="true" disabled><i class="icon-sign-out" slot="icon-left"></i></beButton>
            <br>    
            <beButton type="button" title="Ввод" :outline="true" :white="true"><i class="icon-sign-in" slot="icon-left"></i></beButton>
            <beButton type="button" title="Ввод" :outline="false" :white="true"><i class="icon-sign-in" slot="icon-left"></i></beButton>
            <beButton type="button" title="Ввод" :outline="false" :white="true" disabled><i class="icon-sign-in" slot="icon-left"></i></beButton>
        </div>
        <div class="mb30">
            <beButton type="button" title="Cоздать инвестицию" :outline="true" :large="true" :shadow="true"><i class="icon-plus-outline" slot="icon-left"></i></beButton>
            <beButton type="button" title="Cоздать инвестицию" :large="true" :shadow="true"><i class="icon-plus-outline" slot="icon-left"></i></beButton>
            <beButton type="button" title="Cоздать инвестицию" :large="true" :shadow="true" disabled><i class="icon-plus-outline" slot="icon-left"></i></beButton>
            <br>
            <beButton type="button" title="Читать подробнее" :outline="true" :large="true" :arrowRight="true"></beButton>
            <beButton type="button" title="Читать подробнее" :outline="false" :large="true" :arrowRight="true"></beButton>
            <beButton type="button" title="Читать подробнее" :outline="false" :large="true" :arrowRight="true" disabled></beButton>
            <br>
            <beButton type="button" title="Send" :outline="true" :large="true"></beButton>
            <beButton type="button" title="Send" :large="true"></beButton>
            <beButton type="button" title="Send" :large="true" disabled></beButton>
            <br>
            <beButton type="button" title="Send" :dark="true" :large="true"></beButton>
            <beButton type="button" title="Send" :dark="true" :large="true" disabled></beButton>
        </div>
        <div class="">
            <!-- <div v-for="(file, idx) in files" :key="idx">
                {{file}}
            </div> -->
            <br>
            <beInputFile v-model="files"></beInputFile>
        </div>

    </div>
</template>
<script>
import beInputFile from '../components/beInputFile';
export default {
    data: ()=>({
        files: []
    }),
    components: {
        beInputFile
    },
    methods: {
    }
}
</script>
<style lang="scss">
@import '@/includes/styles/colors.scss';
button{
    margin: 5px;
}
.mb30{
    margin-bottom: 30px;
}
</style>