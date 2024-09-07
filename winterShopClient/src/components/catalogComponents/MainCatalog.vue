<template lang="">
    <main class="Catalog__main">
        <NavVue/>
        <ActionCatalog/>
        <TypesCatalogVue/>
        <ControlsCatalog />
        <ProductsVue /> 
    </main>
</template>
<script>
import ActionCatalog from '@/components/catalogComponents/action/ActionCatalog.vue';
import TypesCatalogVue from '@/components/catalogComponents/types/TypesCatalog.vue';
import ControlsCatalog from '@/components/catalogComponents/controls/ControlsCatalog.vue';
import ProductsVue from '@/components/catalogComponents/products/Products.vue'; 
import NavVue from '@/components/catalogComponents/nav/Nav.vue';
export default {
    components:{
    ActionCatalog,
    TypesCatalogVue,
    ControlsCatalog,
    ProductsVue,
    NavVue,
  

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


}










  .Catalog {

&__navigation {
    //margin-top: em(75);
    @media (max-width:$mobile){
        //margin-top: em(10);
    }
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