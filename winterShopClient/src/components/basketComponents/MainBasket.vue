<template lang="">
     <main class="Basket__main">
            <div class="Basket__container">
                <div class="Basket__body">
                    <LeftBasketVue  v-if="count" />
                    <RightBasketVue v-if="count"/>
                    <BlankBasketVue v-if="!count"/>
                </div>
            </div>
        </main>
</template>
<script>




import { defineAsyncComponent } from 'vue';

const LeftBasketVue = defineAsyncComponent(() =>import('@/components/basketComponents/components/LeftBasket.vue' ))
const RightBasketVue = defineAsyncComponent(() =>import('@/components/basketComponents/components/RightBasket.vue' ))
const BlankBasketVue = defineAsyncComponent(() =>import('@/components/basketComponents/components/BlankBasket.vue' ))
import { mapState } from 'vuex'

export default {
    components:{
        RightBasketVue,
        LeftBasketVue,
        BlankBasketVue,
  
    },
    computed:{
        ...mapState({
            count:state=>state.basket.count
        })
    }
}
</script>
<style lang="scss">
        
    .Basket {
     

&__body{
    padding-top: em(25);
    display: flex;
    gap: em(50);
    @media (max-width:$mobile){
         flex-direction: column; 
         padding-top: em(14);
         gap: em(25);
    }
}
&__left {
    flex: 1 1 auto;
    @media (max-width:$mobile){
        font-size: 9px;
    }
}
&__right{
    flex: 0  0 em(420);
    @media (max-width:$tablet){

        font-size: 10px;
        flex: 0  0 em(380);
    }
    @media (max-width:$mobile){
        flex:1  1 auto;
        font-size: 10px;
    }

}






}
</style>