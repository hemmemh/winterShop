<template lang="">
    <div ref="navMenuRef" class="product-catalog__nav nav-productCatalog" :class="{'active':!nav}">
        <ItemNav name="Бренд">
            <MyRadioVue  :radioClass="'navMenu'" :modelValue="brand" @update:modelValue="e=>onSetBrand(e)" :name="'d1'" :value="false" >
                    <template #header><div class="radio__button"></div></template>
                    <div class="radio__item">Все бренды</div>
            </MyRadioVue>
            <MyRadioVue v-for="brandItem in brands" :radioClass="'navMenu'" :modelValue="brand" @update:modelValue="e=>onSetBrand(e)"  :name="'d1'" :value="brandItem._id">
                <template #header><div class="radio__button"></div></template>
                <div class="radio__item">{{brandItem.name}}</div>
            </MyRadioVue>
        </ItemNav>
        <ItemNav name="Размер">
            <MyCheckBoxVue v-for="size in sizes" :key="size" :checkBoxClass="'navMenus'"  :modelValue="sizesActive" @update:modelValue="e=>onSetSizesActive(e)" :value="size" :name="'d1'">
                <template #header>
                    <div class="checkbox__button"><img src="@/images/catalog/check.png" alt=""></div>
                </template>
                        <div class="checkbox__item">{{size[0]}}</div>

            </MyCheckBoxVue>
        </ItemNav>
        <ItemNav name="Цена">
            <div class="nav-productCatalog__numbers">
                <MyNumberVue  :min="minPrice" :max="price[1]" :modelValue="price[0]"  @update:modelValue="e=>priceOne(e)"  :id="'aaw'"  :numberClass="'navMenu'"/>
                    <span></span>
                <MyNumberVue   :min="price[0]" :max="maxPrice" :modelValue="price[1]"  @update:modelValue="e=>priceTwo(e)"   :id="'aaw2'"  :numberClass="'navMenu'"/>
            </div>
            <v-range-slider @end="endRange" :min="minPrice" :max="maxPrice" v-model="price"  @update:modelValue="e=>setPrice(e)"   strict track-size=5 tick-size=1 step=1 thumb-size=25></v-range-slider>
        </ItemNav>
        <ItemNav name="Цвет">
            <MyCheckBoxVue v-for="color in colors" :checkBoxClass="'navMenu'"  :modelValue="colorsActive"  @update:modelValue="e=>onSetColorsActive(e)"   :value="color" :name="'d3'" :checked=false>
                    <template #header><div class="checkbox__button"><img src="@/images/catalog/check.png" alt=""></div></template>
                    <div class="checkbox__color color-checkbox">
                        <div :style="`background-color:${color[1]}`" class="color-checkbox__hex"></div>
                        <div class="color-checkbox__name">{{color[0]}}</div>
                    </div>
            </MyCheckBoxVue>
        </ItemNav>             
    </div>
</template>
<script>
import { ref } from 'vue';
import MyRadioVue from '@/components/UI/MyRadio.vue';
import MyCheckBoxVue from '@/components/UI/MyCheckBox.vue';
import Slider from 'primevue/slider';
import MyNumberVue from '@/components/UI/MyNumber.vue';
import { mapState,mapMutations } from 'vuex';
import ItemNav from './ItemNav.vue';

export default {
    components:{
        MyRadioVue,
        MyCheckBoxVue,
        Slider,
        MyNumberVue,
        ItemNav
    },


    setup(){
        return{
            navMenuRef: ref(null),
        }
        
    },


    mounted() {
        this.setNavMenuRef(this.navMenuRef)
    },


    computed:{
        ...mapState({
            nav:state=>state.product.nav,
            brand:state=>state.product.brand,
            brands:state=>state.product.brands,
            sizesActive:state=>state.product.sizesActive,
            colorsActive:state=>state.product.colorsActive,
            price:state=>state.product.price,
            minPrice:state=>state.product.minPrice,
            maxPrice:state=>state.product.maxPrice,
            colors:state=>state.product.colors,
            color:state=>state.product.color,
            sizes:state=>state.product.sizes,
            size:state=>state.product.size,
            minPriceEnd:state=>state.product.minPriceEnd,
            maxPriceEnd:state=>state.product.maxPriceEnd,
        }),
    },


    methods: {
        ...mapMutations({
            setBrand:"product/setBrand",
            setSizesActive:"product/setSizesActive",
            setPriceOne:'product/setPriceOne',
            setPrice:'product/setPrice',
            setPage:'product/setPage',
            setPriceTwo:'product/setPriceTwo',
            setMinPriceEnd:'product/setMinPriceEnd',
            setMaxPriceEnd:'product/setMaxPriceEnd',
            setColorsActive:'product/setColorsActive',
            setNavMenuRef:'product/setNavMenuRef'
        }),


        endRange(e){
            this.setMinPriceEnd(e[0])
            this.setMaxPriceEnd(e[1])
            const searchParams = new URLSearchParams(this.$route.query);
            searchParams.set('minPriceEnd', e[0]);
            searchParams.set('maxPriceEnd', e[1]);
            searchParams.set('page', 1);
            this.setPage(1)
            this.$router.push({
            path: this.$route.path,
            query: { ...Object.fromEntries(searchParams.entries()) }
            })
        },


        priceOne(e){
            this.setPriceOne(e)
            this.setMinPriceEnd(e)
            const searchParams = new URLSearchParams(this.$route.query);
            searchParams.set('minPriceEnd', e);
            searchParams.set('page', 1);
            this.setPage(1)
            this.$router.push({
            path: this.$route.path,
            query: { ...Object.fromEntries(searchParams.entries()) }
            })
        },

        priceTwo(e){
            this.setPriceTwo(e)
            this.setMaxPriceEnd(e)

            const searchParams = new URLSearchParams(this.$route.query);
            searchParams.set('maxPriceEnd', e);
            searchParams.set('page', 1);
            this.setPage(1)
            this.$router.push({
            path: this.$route.path,
            query: { ...Object.fromEntries(searchParams.entries()) }
            });
        },

        onSetBrand(e){
            console.log('eee', e);
            
            const searchParams = new URLSearchParams(this.$route.query);
            searchParams.set('brand', e);
            searchParams.set('page', 1);
            this.setPage(1)
            this.$router.push({
            path: this.$route.path,
            query: { ...Object.fromEntries(searchParams.entries()) }
            });
            this.setBrand(e)
        },

        onSetSizesActive(e){
            this.setSizesActive(e)
            const searchParams = new URLSearchParams(this.$route.query);
            searchParams.set('sizesActive', JSON.stringify(e));
            searchParams.set('page', 1)
            this.setPage(1)
            this.$router.push({
            path: this.$route.path,
            query: { ...Object.fromEntries(searchParams.entries()) }
            });
         
        },

        onSetColorsActive(e){
            this.setColorsActive(e)
            const searchParams = new URLSearchParams(this.$route.query);
            searchParams.set('colorsActive', JSON.stringify(e));
            searchParams.set('page', 1);
            this.setPage(1)
            this.$router.push({
            path: this.$route.path,
            query: { ...Object.fromEntries(searchParams.entries()) }
            });
        }
        

        
   


    },
}
</script>
<style lang="scss">
    

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


</style>