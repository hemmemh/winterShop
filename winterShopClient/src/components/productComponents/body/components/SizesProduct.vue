<template lang="">
    <div class="Product__sizes sizes-product">
            <p class="sizes-product__name">Таблица размеров</p>
            <div class="sizes-product__sizes">
                <MyRadioVue v-for="sizeItem in JSON.parse(product.sizes)" :radioClass="'productSize'" :modelValue="size"  @update:modelValue="e=>setSize(e)" :name="'d1'" :value="sizeItem">
                                    <template #header>
                                       <div class="sizes-product__size">{{sizeItem}}</div>
                                    </template>
                </MyRadioVue>
            </div>   
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import MyRadioVue from '../../../UI/MyRadio.vue'

export default {
    components:{
        MyRadioVue
    },
    computed:{
        ...mapState({
            product:state=>state.productItem.product,
            size:state=>state.productItem.size,
        })

    },
    methods:{
        ...mapMutations({
      
            setSize:'productItem/setSize',
       
        }),
    },
}
</script>
<style lang="scss">
    
    .sizes-product {
    @media (max-width:$tablet){
        font-size: 20px;
    }
    margin-bottom: em(45);
padding-top: em(25);
@media (max-width:$mobile){
    margin-bottom: em(15);
padding-top: em(10);
}
&__name {
    color: $mainColor;
font-size: em(14);
font-style: normal;
font-weight: 400;
line-height: em(20,14); /* 142.857% */
letter-spacing: -0.28px;
text-decoration-line: underline;
margin-bottom: em(25);
}

&__sizes {
    display: flex;
    gap:em(15);
    flex-wrap: wrap;
}

&__size {
}
}


</style>