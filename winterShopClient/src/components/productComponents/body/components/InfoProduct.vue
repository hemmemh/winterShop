<template lang="">
     <div class="Product__info info-product">
                            <div class="info-product__top">
                                <div class="info-product__brand">
                                    <img :src="`${API_URL}/brands/${product.brand.image}`" alt="">
                                </div>
                                <Rating :cancel="false" readonly v-model="productRating" >
                                    <template #onicon>
                                        <img src="@/images/product/right/onStar.png" height="24" width="24" />
                                    </template>
                                    <template #officon>
                                        <img src="@/images/product/right/offStar.png" height="24" width="24" />
                                    </template>
                                </Rating>
                                <div @click="toRatingBlock" class="info-product__ratingCount">{{product.ratings.length}} отзыв(а) </div>
                            </div>
                            <p class="info-product__name">{{product.name}}</p>
                            <p class="info-product__price">{{product.price}}</p>
                        </div>
</template>
<script>
import Rating from 'primevue/rating'
import { API_URL } from '../../../../utils/config'

export default {
    components:{
        Rating
    },
    data() {
        return {
            API_URL:API_URL
        }
    },
    props:{
        product:{
            type:Object
        }
    },
    computed:{
        productRating(){
           return Math.round(this.product.ratings.reduce((a,b)=>{return a + b.rate},0)/this.product.ratings.length) || 0
        },
    },
    methods:{
        toRatingBlock(){
        const navBar = document.querySelector('.Navbar')
        const rating = document.querySelector('.ratings-product')
             window.scrollTo({behavior:'smooth',top:rating.getBoundingClientRect().top - navBar.offsetHeight})
      },
    }
}
</script>
<style lang="scss">
    


    .info-product {
    @media (max-width:$mobile){
     font-size: 11px; 
}
    border-bottom: solid 1px #E0E0E0;
    display: flex;
    flex-direction: column;
    gap: em(15);
    padding-bottom: em(25);
    .p-rating{
    img{
        width: 20px;
        height: 20px;
    }
   
}
&__top {
    display: flex;
    align-items: center;
    gap: em(25);

}

&__brand {
    width: em(100);
    img{
        object-fit: contain;
        width: 100%;
    }
}

&__ratingCount {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    @media (any-hover: hover){
        &:hover{
            transition: all 0.3s ease 0s;
            color: $hoverColor;
        }
    }
    font-size: em(14);
font-weight: 400;
line-height: em(25,14); /* 178.571% */
letter-spacing: -0.28px;
text-decoration-line: underline;
@media (max-width:$mobile){
    font-size: em(18);
}
}

&__name {
    font-size: em(21);
font-weight: 600;
line-height: em(35,21); /* 166.667% */
letter-spacing: -0.42px;
}

&__price {
    font-size: em(32);
font-weight: 600;
line-height: normal;
}
}


</style>