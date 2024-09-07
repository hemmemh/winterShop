<template lang="">
     <div class="Basket _app">
            <LayoutVue>
            <MainBasketVue/>
            </LayoutVue>
     </div>
</template>
<script>
import MainBasketVue from '@/components/basketComponents/MainBasket.vue'
import LayoutVue from '../router/Layout.vue'




export default {
    components:{
        MainBasketVue,
    LayoutVue
    }
   

}
</script>
<style lang="scss">

    
.Basket {
         @media (max-width:1270px){
              font-size: 12px;
         }
        &__main{
        margin-top: rem(150);
    @media (max-width:$mobile){
        margin-top: rem(50);
    }
    }
}
</style>