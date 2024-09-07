<template lang="">
     <section v-once class="Basket__blank blank-basket">
            <div class="blank-basket__body">
                <div class="blank-basket__image">
                    <img src="@/images/basket/blank.png" alt="">
                </div>
                <p class="blank-basket__text">Ваша корзина пока пуста</p>
                <div class="blank-basket__button">
                    <MyButtonVue @click="this.$router.push('/')" className="basket _d">Перейти к покупкам</MyButtonVue>
                </div>
            </div>   
     </section>
</template>
<script>
import MyButtonVue from '@/components/UI/MyButton.vue'
export default {
    components:{
        MyButtonVue
    }
}
</script>
<style lang="scss">


    .Basket {

&__blank {

}
}
.blank-basket {
flex: 1 1 auto;
display: flex;

justify-content: center;
align-items: center;
font-size: 16px;
@media (max-width:$mobile){
    font-size: 12px; 
}
&__body {
    margin: em(40) 0;
    width: em(435);
    @media (max-width:$mobile){
          
    }
    display: flex;
    flex-direction: column;
    gap: em(50);
    @media (max-width:$mobile){
        gap: em(2 0);
    }
    align-items: center;

  
}

&__image {
 @media (max-width:$mobile){
     width: 200px; 
 }
     img{
        width: 100%;
     }
    align-self: flex-end;
}

&__text {

font-size: em(21);
font-style: normal;
font-weight: 700;
line-height: em(30); /* 142.857% */
}

&__button {
    width: 100%;

    justify-content: center;
}
}
.basket {
}

</style>