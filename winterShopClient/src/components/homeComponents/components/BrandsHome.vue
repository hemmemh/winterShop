<template lang="">
  <section  class="Home__brands brands-home">
        <div class="brands-home__container">
            <div class="brands-home__body">
                <swiper 
                      :slidesPerView="5"
                      :space-between="20"
                      :autoplay="autoplay"
                      :modules="modules" 
                      :breakpoints="breakpoints"
                      class="brands-home__sliders">
    
                      <swiper-slide v-for="brand in brands">
                          <div class="brands-home__slide">
                              <img :src="`${API_URL}/brands/${brand.image}`" alt=""/>
                          </div>
                      </swiper-slide>
                </swiper>
            </div>
            
        </div>
        
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { mapActions,mapState } from 'vuex';
import { API_URL } from '../../../utils/config';

export default {
    components:{
   Swiper,
   SwiperSlide,
  },
  setup() {
     return {
       modules: [Autoplay],
       API_URL:API_URL,
       breakpoints:{
                  '640': {
                    slidesPerView: 8,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 9,
                    spaceBetween: 30,
                  
                
                  },
                  '1024': {
                    slidesPerView: 10,
                    spaceBetween: 52,
                  },
                },
       autoplay:{
        delay: 2500,
        stopOnLastSlide: true,
       }
     };
   },

   methods:{
    ...mapActions({
      getBrands:"product/getBrands"
    })
   },
   computed:{
    ...mapState({
      brands:state=>state.product.brands
    })
   },

   mounted(){
      this.getBrands()
  
   }

   
   
}
</script>

<style lang="scss">
   

   .brands-home {
    cursor: pointer;
margin-top: rem(52);
@media (max-width:$mobile){
    margin-top: rem(20);
}
@media (max-width:$mobileSmall){
    margin-top: rem(10);
}
&__container {
}

&__body {
    padding: 0 rem(28);
    @media (max-width:$mobile){
        padding: 0 0;
    }
}

&__sliders {
}

&__slide {
    position: relative;
    height: rem(60);
    img{
        object-fit: contain;
        position: absolute;width: 100%;height: 100%;top: 0;left: 0;
    }
}
}

</style>