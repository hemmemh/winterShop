<template lang="">
    <router-link :to="`/product/${product._id}`">
        <div class="product-catalog__item product-item">
                                <div class="product-item__imageCover">
                                    <div @click.stop.prevent="setLoves" class="product-item__star _icon-star-winter" :class="{active:inLovesData}"></div>
                                    <div   class="product-item__image">
                                        <img :src="`${API_URL}/${product.name}/${JSON.parse(product.images)[0]}`" alt=""/>
                        </div>
                                </div>
                                
                       
                        <div class="product-item__brand">{{product.brand.name}}</div>
                        <div class="product-item__name">{{product.name}}</div>
                        <div class="product-item__price">{{product.price}} ₽</div>
        </div>
    </router-link>
    
</template>
<script>


import { API_URL } from '../../utils/config'

import { mapActions} from 'vuex';

export default {
    props:{
        product:{
            type:Object
        },
        inLoves:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            API_URL:API_URL,
            inLovesData:this.inLoves
        }
    },
    methods:{

        ...mapActions({
            addLoves:"basket/addLoves"
        }),

        async setLoves(){
            this.inLovesData = await this.addLoves({id:this.product._id,lovesId:this.$store.state.user.user.loves,inLovesData:this.inLovesData})
        },
     
    },

}
</script>
<style lang="scss">
    

    .product-item {
        transition: all 0.3s ease 0s;
      
        animation:item 0.5s ease-out ;
        @keyframes item {
            0% {
                transform: scale(0.95);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;  
            }
        }
        @media (any-hover: hover){
            &:hover{
                transition: all 0.3s ease 0s;
                transform: scale(0.99);
                 filter: brightness(0.9);
            }
        }
    &__imageCover{
        padding: 40px 30px;
        position: relative;
        background: var(--Light-Grey, #F9F9F9);
        margin-bottom: em(10);
    }
&__image {
    position: relative;
    padding: 0  0 100% 0;
    img{
        object-fit: contain;
        position: absolute;width: 100%;height: 100%;top: 0;left: 0;
    }
    margin-bottom: rem(10);
}

&__star {
    position: absolute;width: rem(40);height: rem(40);top: rem(16);right: rem(16);
z-index: 3;
    border-radius: 50%;
    background: $mainColor;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease 0s;
    opacity: 0.4;
    @media (any-hover: hover){
        &:hover{
            opacity: 0.7;
            transition: all 0.3s ease 0s;
            transform: scale(1.1);
        }
    }
    &.active{
        opacity: 1;
        background: $hoverColor;
    } 
    &::before{
      
        font-size: rem(30);
        color: #fff;
        @media (max-width:$mobile){
            font-size: rem(20);
        }
    }
    @media (max-width:$mobile){
        width: rem(30);
        height: rem(30)
        
    }
}

&__brand {

font-size: rem(16);
@media (max-width:$mobile){
    font-size: rem(12); 
    line-height: 14px; 
}
font-style: normal;
font-weight: 500;
line-height: 25px; /* 156.25% */
letter-spacing: -0.32px;
text-transform: uppercase;
}

&__name {
    font-size: rem(14);
    @media (max-width:$mobile){
    font-size: rem(10); 
    line-height: 16px; 
}
font-style: normal;
font-weight: 500;
line-height: 25px; /* 178.571% */
letter-spacing: -0.28px;
}

&__price {
    font-size: rem(18);
    @media (max-width:$mobile){
    font-size: rem(13); 
    line-height: 20px;
}
font-style: normal;
font-weight: 500;
line-height: 30px; /* 166.667% */
letter-spacing: -0.36px;
text-transform: uppercase;
}
}
</style>