<template lang="">
    <main class="Product__main">
        <div class="Product__container">
            <NavProductVue/>
            <BodyVue />
            <RatingProductVue/>
        </div>
        </main>
</template>
<script>

import BodyVue from '@/components/productComponents/body/Body.vue' 
import RatingProductVue from '@/components/productComponents/ratings/RatingProduct.vue';
import NavProductVue from '@/components/productComponents/nav/NavProduct.vue';


export default {
    components:{
   BodyVue,
RatingProductVue,
NavProductVue,
},
}
</script>
<style lang="scss">
    

    .Product {
    &__main{
        margin-top: rem(150);
    @media (max-width:$mobile){
        margin-top: rem(50);
    }
    }


}


</style>