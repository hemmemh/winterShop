<template lang="">
    <section class="Basket__right">
        <p class="Basket__count">{{count}} товара</p>
        <div class="Basket__summery">
            <p class="Basket__summeryName">Итого:</p>
            <p class="Basket__summeryCount">{{totalSum}} ₽</p>
        </div>
        <div class="Basket__buy">
            <MyButtonVue @click="onBuy" :className="'buy'">оформить заказ</MyButtonVue>
        </div>   
    </section>
</template>
<script>
import {mapState } from 'vuex'
import MyButtonVue from '@/components/UI/MyButton.vue'
import { removeAll } from '@/http/basketApi'
export default {
    components:{
        MyButtonVue
    },
    computed: {
        ...mapState({
            count:state=>state.basket.count,
            totalSum:state=>state.basket.totalSum,
            basket:state=>state.user.user.basket
        })
    },
    methods: {
        onBuy() {
            removeAll({id:this.basket}).then(()=>{
                window.location.reload()
            })
        }
    }
}
</script>
<style lang="scss">
    .Basket{
        &__count {

font-size: em(21);
font-style: normal;
font-weight: 600;
line-height: em(35,21); /* 166.667% */
letter-spacing: -0.42px;
padding-bottom: em(20);
border-bottom: 1px solid #E0E0E0;
}

&__summery {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: em(25) 0;
    border-bottom: 1px solid #E0E0E0;
}

&__summeryName {

font-size: em(18);
font-weight: 600;
line-height: em(30,18); /* 166.667% */
letter-spacing: -0.36px;
}

&__summeryCount {
    color: $hoverColor;

font-size: em(32);

font-weight: 600;
line-height: normal;
}

&__buy {
    padding-top: em(25);
}
    }
</style>