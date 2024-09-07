<template lang="">
    <div class="Catalog _app">
        <LayoutVue>
            <MainCatalogVue/>
        </LayoutVue>
    </div>
</template>
<script>

import LayoutVue from '../router/Layout.vue';
import MainCatalogVue from '../components/catalogComponents/MainCatalog.vue';


export default {
    components:{
    LayoutVue,
    MainCatalogVue,

   },

}
</script>
<style lang="scss">
    
    .Catalog {

&__main {
    margin-top: rem(160);
    @media (max-width:$mobile){
        margin-top: rem(50);
    }
}

&__navigation {
  
}

&__action {
}
&__type {
}
&__contols {
}
&_product {
}

}

.product-catalog {
margin-top: em(20);
@media (max-width:$mobile){
    margin-top: em(10);
}
&__nav {
}

&__container{
    display: flex;
    overflow: hidden;
    position: relative;

}
&__body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  
}
&__grid {
  
    margin-left: 0;
 
    display: grid;
    gap: em(26);
    grid-template-columns: repeat(4, 1fr);
    @media (max-width:$tablet){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width:$mobileSmall){
        grid-template-columns:repeat(2, 1fr);
    }



}

&__item {
}
}





.nav-productCatalog {
    box-sizing: border-box;
    padding: em(10);
    font-size: 16px;
    position: absolute;

    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
@media (max-width:$tablet){
    font-size: 14px;
}
@media (max-width:$mobile){
    width: 200px;
    font-size: 10px;
}
@media (max-width:$mobileSmall){
    font-size: 11px;
    width: 160px;
}
  
 
    display: flex;
    flex-direction: column;
    gap: em(37);
    z-index: 4;
    width: 321px;
    top:0px;
    transition: transform 0.3s ease 0s;
    background: #fff;

    &.active{
        transition: transform 0.3s ease 0s;
        
    
        transform: translate(0,-110%);
       
    
    
       
    }

&__item {
  
}
&__numbers{
    margin-bottom: em(20);
    display: flex;
    align-items: center;
    gap: em(20);
   span{
    width: 12px;
    flex: 0  0 12px;
    height: 1px;
    background: #BDBDBD;
display: flex;
align-items: center;
    }
}
&__group{
    display: flex;
    flex-direction: column;
    gap: em(10);
}
&__name {
    font-size: em(16);
font-weight: 600;
line-height: em(25,16); /* 156.25% */
letter-spacing: -0.32px;
margin-bottom: em(18,16);
}
&__slider{

}
}

.v-slider__container{
    .v-slider-track__background{
        background: #E0E0E0;
        border-radius: 0px;
    }
 
}
.v-slider-track{
    height: 5px !important;
  }
  .v-slider-track__fill{
    background: #EB5757 !important;
  }
  .v-slider-thumb__surface{
    box-sizing: border-box;
    background: #fff !important;
    border: 4px solid #EB5757;
    @media (max-width:$mobile){
         width: em(20) !important; 
         height: em(20) !important; 
    }
  }
  .v-slider-thumb__ripple{
    @media (max-width:$mobile){
         width: em(20) !important; 
         height: em(20) !important; 
    }
  }


  .Catalog {

&__navigation {
    margin-top: em(75);
}
}
.navigation-catalog {
display: flex;
justify-content: center;
flex: 1 1 auto;
align-items: flex-end;
justify-self: center;
&__arrow {
    width: em(40);
    height: em(40);
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    &._left{
        img{
            transform: rotate(180deg);
        }
    }
}

}


</style>