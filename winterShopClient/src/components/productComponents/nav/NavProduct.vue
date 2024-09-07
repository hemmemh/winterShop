<template lang="">
    <nav class="Product__navigation Navigation">
                               <div class="Navigation__container">
                                   <div class="Navigation__body">
                                    {{`Главная / ${product?.type?.name} / ${product?.name}`}}
                                       
                                   </div>
                               </div>
            </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
    ...mapState({
      product:state=>state.productItem.product
    })
   },
}
</script >
<style lang="scss" scoped>
    
    .Navigation{
background: #fff;

&__body {
    color: $mainColor;
    padding: em(30) 0;
}
}
</style>