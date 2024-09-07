<template lang="">
     <main class="Love__main">
            <div class="Love__container">
                <div class="Love__body">
                   <TopLoveVue/>
                   <GridLoveVue/> 
                </div>
                
            </div>
            
        </main>
</template>
<script>
import GridLoveVue from './components/gridLove/GridLove.vue'
import TopLoveVue from './components/topLove/TopLove.vue'


export default {
    components:{
        GridLoveVue,
        TopLoveVue
    }
}
</script>
<style lang="scss">
        .Love {

&__main {
    flex: 1 1 auto;
    margin-top: rem(150);
    @media (max-width:$mobile){
        margin-top: rem(50);
    }
}





}
</style>