<template lang="">
     <div class="Product__right">
                        <InfoProductVue :product="product"/>
                        <ColorProductVue/>
                        <SizesProductVue/>
                        <div class="Product__button">
                            <MyButtonVue @click="addItemToBasket" :className="`basket ${inBasket ? 'active' : ''}`" rippleClass='basket'>
                                {{inBasket ? 'В корзине' : 'Добавить в корзину'}}
                            </MyButtonVue>
                        </div>
                        
                   </div>
</template>
<script>
import Rating from 'primevue/rating'
import MyRadioVue from '../../../UI/MyRadio.vue'
import MyButtonVue from '../../../UI/MyButton.vue'

import { mapActions, mapMutations, mapState } from 'vuex'
import { API_URL } from '../../../../utils/config'
import { addItemToBasket, removeItemFromBasket } from '../../../../http/basketApi'
import InfoProductVue from './InfoProduct.vue'
import ColorProductVue from './ColorProduct.vue'
import SizesProductVue from './SizesProduct.vue'

export default {
    components:{
        MyRadioVue,
        Rating,
        MyButtonVue,
        InfoProductVue,
        ColorProductVue,
        SizesProductVue,
    },
    computed:{
   
        ...mapState({
            product:state=>state.productItem.product,
            color:state=>state.productItem.color,
            size:state=>state.productItem.size,
            count:state=>state.basket.count,
            inBasket:state=>state.basket.inBasket,
        })

    },
    methods:{
        ...mapMutations({
            setCount:'basket/setCount',
            setLoaded:'productItem/setLoaded',
            setProduct:'productItem/setProduct',
            setColor:'productItem/setColor',
            setColors:'productItem/setColors',
            setSizes:'productItem/setSizes',
            setSize:'productItem/setSize',
            setBasket:'basket/setBasket',
            setProductRating:'productItem/setProductRating',
            setInBasket:'basket/setInBasket',
        }),
        ...mapActions({
            setToBasket:'productItem/setToBasket'
        }),
        addItemToBasket(){
            this.setToBasket({id:this.$route.params.id,basketId:this.$store.state.user.user.basket})
        }
       

    },
    data(){
       return{
        API_URL:API_URL,

       }
    },
    mounted(){
        console.log(this.color,'grgd');
    }
}
</script>
<style lang="">
    
</style>