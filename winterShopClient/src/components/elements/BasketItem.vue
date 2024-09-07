<template lang="">
       <div  class="Basket__item item-basket">
                            <div @click="removeItem" class="item-basket__remove"></div>
                            <div class="item-basket__image">
                                <div class="item-basket__imageCover">
                                    <div class="item-basket__imageAbsolute">
                                        <img :src="`${API_URL}/${item.product.name}/${JSON.parse(item.product.images)[0]}`" alt="">
                                    </div>
                                    
                                   
                               
                                
                            </div>
                            </div>
                            <div class="item-basket__info">
                                    <div class="item-basket__name">{{item.product.name}}</div>
                                    <div class="item-basket__params">
                                        <div class="item-basket__color">Цвет:  {{item.color}}</div>
                                        <div class="item-basket__size">Размер: {{item.size}}</div>
                                    </div>
                                    
                            </div>
                            <div class="item-basket__count">
                                    <div @click="minus" class="item-basket__change _minus"></div>
                                    <div class="item-basket__countValue">
                                        <MyNumberVue :id="'ed'" :numberClass="'basket'"  :min="1" :max="30"  :modelValue="countItem" @update:modelValue="setCountItem"/>
                                    </div>
                                    
                                   
                                    <div @click="plus" class="item-basket__change _plus"></div>
                            </div>
                            <div class="item-basket__price">{{item.product.price}}</div>
                        
        </div>
</template>
<script>
import { changeAmount,removeItemFromBasket } from '@/http/basketApi'
import { API_URL } from '../../utils/config'
import MyNumberVue from '@/components/UI/MyNumber.vue'
import store from '@/store'
import { mapMutations,mapState } from 'vuex'

export default {
    components:{
        MyNumberVue
    },
    props:{
        item:{
            type:Object,
            default:{}
        }
    },
    data(){
        return{
            countItem:this.item.count,
            API_URL:API_URL
        }
       
    },
    computed:{
        ...mapState({
            count:state=>state.basket.count,
            totalSum:state=>state.basket.totalSum
        })
    },
    methods:{
        ...mapMutations({
            setTotalSum:'basket/setTotalSum',
            setCount:'basket/setCount',
        }),
        setCountItem(e){
     

            this.setTotalSum(this.totalSum - (this.countItem * this.item.product.price )+ e * this.item.product.price)

            this.countItem = e
        },
        plus(){
            if (this.countItem < 30){
                this.countItem+=1
            changeAmount({id:this.item._id,count:this.countItem}).then(data=>{
                this.setTotalSum(this.totalSum - ((this.countItem-1) * this.item.product.price) + (this.countItem * this.item.product.price))
              
            })
            }   
            

        },
        minus(){
            if (this.countItem > 1){
                this.countItem-=1
                changeAmount({id:this.item._id,count:this.countItem}).then(data=>{
                this.setTotalSum(this.totalSum -  this.item.product.price)
            })
            }
           
        },
        removeItem(){
            removeItemFromBasket({id:this.item.product._id,basketId:store.state.user.user.basket}).then(data=>{
                this.$emit('removeItem',data)
                this.setTotalSum(this.totalSum -  this.item.product.price * this.countItem )
            })
        }
    },
   
    
}
</script>
<style lang="scss">
   .item-basket {
    display: flex;
    align-items: center;
    background: #F9F9F9;
    padding: em(40) em(27);
    @media (max-width:$mobile){
        padding: em(20) em(12); 
    }
&__remove {
    margin-right: em(27);
    @media (any-hover: hover){
        &:hover{
                    
    &::before,&::after{
        transition: all 0.3s ease 0s;
        background: $hoverColor;
    }
        }
    }
    cursor: pointer;

       width: em(30);
        height: em(30);
        position: relative;
    &::before,&::after{
        transition: all 0.3s ease 0s;
        content:'';
        display: block;
        width: em(25);
        height: em(2);
        background: #000000;
        position: absolute;top: 50%;left: 50%;
    }
    &::before{
        transform: translate(-50%,-50%) rotate(45deg) ;
        
    }
    &::after{
        transform:  translate(-50%,-50%) rotate(-45deg) ;
        
    }
}

&__image {
    margin-right: em(20);
    width: em(118);
    background: #FFF;
}

&__imageCover {
    padding: 0 0 128/118 * 100% 0;
    position: relative;
  


}
&__imageAbsolute{
    position: absolute;width: 100%;height: 100%;top: 0;left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        object-fit: contain;
    width: 87/118 * 100%;
    height: 87/128 * 100%;
}
}
&__info {
    flex: 0 1 em(334);
    margin-right: em(40);
    @media (max-width:$mobile){
        margin-right: em(20);
    }
}

&__name {

font-size: em(18);
font-weight: 500;
line-height: em(30,18); /* 166.667% */
letter-spacing: -0.36px;
}

&__params {
display: flex;
gap: em(14);
font-size: em(14);
font-style: normal;
font-weight: 600;
line-height: em(25,14); /* 178.571% */
letter-spacing: -0.28px;
}

&__color {
}

&__size {
}

&__count {
    display: flex;
    align-items: center;
    gap: em(15);
    flex: 1 1 auto;
    margin-right: em(20);
}

&__change {
    width: em(15);
    height: em(15);
cursor: pointer;
    &._minus{
        position: relative;
        &::before{
            content:'';
            width: 100%;
            height: 1px;
            display: block;
            background: #000000;
            position: absolute;
            top:50%;left: 50%;
            transform: translate(-50%,-50%) ;
        }

    }
    &._plus{
        position: relative;
        &::before,&::after{
            content:'';
            width: 100%;
            height: 1px;
            display: block;
            background: #000000;
            position: absolute;
            top:50%;left: 50%;
            
            
        }
        &::before{
            content:'';
          
            transform: translate(-50%,-50%) rotate(90deg);
        }
        &::after{
            transform: translate(-50%,-50%) ;
            
        }

    }
}
&__countValue{
    background: #fff;
            width: em(66,18);
            padding: em(5);
            border-radius: 4px;
border: 1px solid #CED4D7;
background: #FFF;
box-sizing: border-box;
font-size: em(18);
font-weight: 600;
line-height: em(18); /* 166.667% */
letter-spacing: -0.36px;
}
&__price {
white-space: nowrap;
font-size: em(21);
font-weight: 600;
line-height: em(35,21); /* 166.667% */
letter-spacing: -0.42px;
}
} 
</style>