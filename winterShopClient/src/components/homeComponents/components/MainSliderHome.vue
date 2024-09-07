<template lang="">
     <section  class="Home__mainSlider mainSlider-home">
            <div class="mainSlider-home__body">
                <swiper 
                :navigation="{
                prevEl: mainLeft,
                nextEl: mainRight,
                 }" 
                     :autoplay="{
                  delay: 3000,
                  stopOnLastSlide: true,
                }"
                :slidesPerView="1.07"
                 :space-between="10"
                 :centeredSlides="false"
                :modules="modules" 
           
                :initial-slide=1
                :breakpoints="{
                  '767.98': {
                    slidesPerView:'auto',
                    centeredSlides:'true',
                  },
             
                }"
    class="mainSliderWraper-home">
                        <swiper-slide v-for="slide in slides">
                            <div class="mainSliderWraper-home__slide">
                                <img :src="require(`@/images/home/firstSlider/${slide.path}`)" alt=""/>
                                <div class="mainSliderWraper-home__text">{{slide.name}}</div>
                            </div>
                        </swiper-slide>
                </swiper>
            </div>
        <div class="mainSlider-home__navigation navigation-mainSlider">
            <div ref="mainLeft" class="navigation-mainSlider__arrow _left _icon-arrow-winter"></div>
            <div ref="mainRight" class="navigation-mainSlider__arrow _right _icon-arrow-winter"></div>
        </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay,Navigation } from 'swiper/modules';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
     components:{
    Swiper,
    SwiperSlide,
   },
   setup() {
      return {
        modules: [Navigation,Autoplay],
        mainLeft: ref(null),
        mainRight:ref(null),
        slides:[{path:'1.png',name:'WINTER SALE ДО -70%'},
                {path:'2.png',name:'WINTER SALE ДО -20%'},
                {path:'3.png',name:'WINTER SALE ДО -10%'},
               ]
     
      };
    },
}
</script>

<style lang="scss">
    

    .mainSlider-home {
        position: relative;
    cursor: pointer;
    margin-top: rem(150);
    @media (max-width:$mobile){
        margin-top: rem(50);
    }
    .swiper-slide{
        position: relative;
        padding: 0 0 482/1360 * 100% 0;
        @media (max-width:$mobile){
            padding: 0 0 620/1360 * 100% 0;
        }
    }
&__container {
}

&__body {
    overflow: visible;
       position: relative;
       .swiper-slide{
           max-width: rem($maxWidthContainer);
       }
    @media (max-width:$mobile){
         padding: 0 em(15); 
    }
}
}

.mainSliderWraper-home {
   

   &__slide {
       position: absolute;width: 100%;height: 100%;top: 0;left: 0;
       
       img{
           object-fit: cover;
           position: absolute;width: 100%;height: 100%;top: 0;left: 0;
       }
   }
   &__text{
       position: absolute;bottom: 156/1480 * 100%;left: 0;
       background: $mainColor;
       padding: rem(15) rem(30);
       color: #FFF;
       font-size: rem(48);
       font-style: normal;
       font-weight: 700;
       line-height: normal;
       @media (max-width:1220px){
           font-size: rem(40);
           bottom: rem(30);
           padding: rem(10) rem(15);
   }
   @media (max-width:$mobile){
           font-size: rem(30);
           bottom: rem(20);
           padding: rem(5) rem(10);
   }
   @media (max-width:$mobileSmall){
       font-size: rem(18);
   }
   }
   
   
   
   
   }
   
   .mainSlider-home {
 

   }
   
   
   .navigation-mainSlider {
       pointer-events: none;
       z-index: 2;
   position: absolute;width: 100%;top: 50%;left: 0;
   transform: translate(0,-50%);
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media (max-width:$mobile){
        display: none; 
   }
   &__arrow {
       transition: all 0.3s ease 0s;
       overflow: hidden;
       &.swiper-button-disabled{
           transition: all 0.3s ease 0s;
           background: rgba($color: #1e1e1e, $alpha: 0.3);
           &::before{
              
               color: #FFF;
               
           }
       }
       pointer-events: visible;
       display: flex;
       align-items: center;
       justify-content: center;
       background: rgba($color: #fff, $alpha: 0.9);
       height: rem(98);
       width: rem(32);
           @media (max-width:$tablet){
       height: rem(60);
       width: rem(32);
   }
   @media (max-width:$mobile){
       height: rem(40);
       width: rem(20);
   }
       
   &._left{
       @media (max-width: rem($maxWidthContainer)){
   margin-left: 20px;
   }
   }
   &._right{
           transform: rotate(180deg);
           @media (max-width: rem($maxWidthContainer)){
   margin-right: 20px;
   }
       }
   &::before{
       transition: all 0.3s ease 0s;
       font-size: rem(40);
       @media (max-width:$mobile){
           font-size: rem(30); 
       }
       
   }
   }
   }

</style>