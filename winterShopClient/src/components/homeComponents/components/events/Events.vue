<template lang="">
    <section  v-once  class="Hone__events events-home">
        <div class="events-home__container">
            <div class="events-home__body">
               <ItemEventsVue/>
               <ItemEvents2Vue/>
            </div>
        </div>
    </section >
</template>
<script>
import ItemEventsVue from './components/ItemEvents.vue'
import ItemEvents2Vue from './components/ItemEvents2.vue'

export default {
    components:{
        ItemEventsVue,
        ItemEvents2Vue 
    }
}
</script>
<style lang="scss">
    

    .events-home {
font-size: 16px;
@media (max-width:$tablet){
    font-size: 12px;
}
@media (max-width:$mobile){
    font-size: 10px;
    margin-top: 20px;  
}

margin-top: 50px;
@media (max-width:$mobileSmall){

    font-size: 12px;
}


&__body {
    display: flex;
    gap: 25px;
    @media (max-width:$mobile){
         flex-direction: column; 
         align-items: center;
    }
}

&__item {
   
}
}



.Button.home{
    font-size: 16px;
@media (max-width:$tablet){
    font-size: 12px;
}
@media (max-width:$mobile){
    font-size: 10px;
}
        transition: all 0.3s ease 0s;
        width: em(292);
     
        @media (any-hover: hover){
            &:hover{
                transition: all 0.3s ease 0s;
                box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
            }
        }
        background: #FFFFFF;

       .textButton{
        color: $mainColor;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: em(16);
        line-height: em(30,16);
        text-align: center;
      
       }
     
        
        color: #FFFFFF;

        .Button__cover{
            padding: 0  0 50/292  *100% 0;
        }

    }



</style>