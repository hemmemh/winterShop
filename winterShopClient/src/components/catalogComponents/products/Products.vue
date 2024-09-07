<template lang="">
     <div   class="Catalog__product product-catalog">
        <div class="product-catalog__container">
            <NavVue/>
            <BodyVue/>
        </div>  
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import BodyVue from './components/Body.vue';
import NavVue from './components/nav/Nav.vue';

export default {
    components:{
        NavVue,
        BodyVue
    },
   
   
    methods: {
        ...mapMutations({
            setBrand:"product/setBrand",
            setPage:"product/setPage",
            setSearch:"product/setSearch",
            setSearchEnd:"product/setSearchEnd",
            setSort:'product/setSort',
            setBrands:"product/setBrands",
            setSizes:"product/setSizes",
            setColors:"product/setColors",
            setType:"product/setType",
            setProducts:"product/setProducts",
            setSizesActive:"product/setSizesActive",
            setPriceOne:'product/setPriceOne',
            setPriceTwo:'product/setPriceTwo',
            setColorsActive:'product/setColorsActive',
            setNavMenuRef:'product/setNavMenuRef',
            setMinPriceEnd:'product/setMinPriceEnd',
            setMaxPriceEnd:'product/setMaxPriceEnd',
            setMinPrice:'product/setMinPrice',
            setMaxPrice:'product/setMaxPrice',
            setProductsLoad:'product/setProductsLoad',
        }),


             
        ...mapActions({
            getProducts:"product/getProducts",
            getTypeAndBrands:"product/getTypeAndBrands",
            getProductsByType:"product/getProductsByType",
            getBrands:"product/getBrands",
            getProductByBrand:"product/getProductByBrand",
            getProductBySizesActive:"product/getProductBySizesActive",
            getProductsByParams:"product/getProductsByParams",
            updateSearch:"product/updateSearch"
        }),
        
        },

        data() {
            return {
                productParams: [this.$route.query.type,this.page,this.limit,this.searchEnd,this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort]
             
            }
        },
    
    computed:{
        ...mapState({
            nav:state=>state.product.nav,
            search:state=>state.product.search,
            searchEnd:state=>state.product.searchEnd,
            sort:state=>state.product.sort,
            colorsActive:state=>state.product.colorsActive,
            productsLoad:state=>state.product.productsLoad,
            updateLoading:state=>state.product.updateLoading,
            type:state=>state.product.type,
            products:state=>state.product.products,
            brand:state=>state.product.brand,
            sizesActive:state=>state.product.sizesActive,
            price:state=>state.product.sizesActive,
            minPrice:state=>state.product.sizesActive,
            maxPrice:state=>state.product.sizesActive,
            minPriceEnd:state=>state.product.minPriceEnd,
            maxPriceEnd:state=>state.product.maxPriceEnd,
            colors:state=>state.product.colors,
            color:state=>state.product.color,
            sizes:state=>state.product.sizes,
            size:state=>state.product.size,
            page:state=>state.product.page,
        }),
    },


    mounted(){
        this.setPage(1)
        this.getProducts(this.$route.query.type)
     
        this.$route.query.type && 
         this.getTypeAndBrands(this.$route.query.type)
    },

    
    watch:{
        $route (){
            this.setPage(1)
            this.$route.query.type && 
            this.getProductsByType(this.$route.query.type)
            this.getBrands(this.$route.query.type)
            
        },

        brand(){
          this.getProductsByParams([this.$route.query.type,this.page,this.limit,'',this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort])
        },

        sizesActive:{
            handler(){
                this.getProductsByParams([this.$route.query.type,this.page,this.limit,'',this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort])
            },
            deep:true
        },
        minPriceEnd(){
            this.getProductsByParams([this.$route.query.type,this.page,this.limit,'',this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort])
        },
        maxPriceEnd(){
            this.getProductsByParams([this.$route.query.type,this.page,this.limit,'',this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort])

        },
        colorsActive:{
        handler(){
            this.getProductsByParams([this.$route.query.type,this.page,this.limit,'',this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort])
        },
       
        deep:true
        },
        sort(){
            this.getProductsByParams([this.$route.query.type,this.page,this.limit,'',this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort])
        },
        page(){
            this.updateLoading && this.getProductsByParams([this.$route.query.type,this.page,this.limit,'',this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort])
        },
        searchEnd(e){
            this.getProductsByParams([this.$route.query.type,this.page,this.limit,e,this.brand,this.sizesActive,null,this.minPriceEnd,this.maxPriceEnd,this.colorsActive,this.sort])
        },
        search(e){
            this.updateSearch(e)
        }
        
}
}
</script>
<style lang="scss">


    .product-catalog {
margin-top: em(20);
@media (max-width:$mobile){
    margin-top: em(10);
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


}
</style>