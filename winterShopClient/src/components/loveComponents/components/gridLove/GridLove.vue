<template lang="">
   <div class="Love__grid">
        <ItemVue v-for="love in loves" :inLoves="true" :product="love.product"/>
   </div>
</template>
<script>
import { getLoves } from '../../../../http/lovesApi';
import ItemVue from '../../../elements/Item.vue';



export default {
   components:{
    ItemVue
   },
    data(){
        return{
            loves:[]
        }
       
    },

   mounted(){
    getLoves({id:this.$store.state.user.user.loves}).then(data=>{
        console.log(data);
        this.loves = data.lovesItems
    })

},

}
</script>
<style lang="scss">
.Love{
    &__grid {
    display: grid;
    gap:em(25);
    grid-template-columns: repeat(4,1fr);
    @media (max-width:$tablet){
        grid-template-columns: repeat(3,1fr);
    }
    @media (max-width:$mobileSmall){
        grid-template-columns: repeat(2,1fr);
    }
}
}

</style>