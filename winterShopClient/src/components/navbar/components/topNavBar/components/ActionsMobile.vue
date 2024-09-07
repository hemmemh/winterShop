<template lang="">
    <div class="body-navbar__actions actions-navbar _media">
        <button @click="setMenuFun(!this.menu)" type="button" class="menu__icon icon-menu" :class="{'active': this.menu == true}"><span></span></button>
        <div  @click="$router.push('/love')" class="actions-navbar__action _icon-star-winter">
            <span>ИЗБРАННОЕ</span>
            <span v-if="loves" :class=" lovesActive ? 'actions-navbar__count mobile active' : 'actions-navbar__count mobile'">{{loves}}</span>
        </div>
        <div  @click="$router.push('/basket')" class="actions-navbar__action _icon-cart-winter">
            <span>КОРЗИНА</span>
            <span v-if="count" :class=" countActive ? 'actions-navbar__count mobile active' : 'actions-navbar__count mobile'">{{count}}</span>
        </div>

    </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex'

export default {
    methods:{
        ...mapMutations({
             setMenu:'navbar/setMenu'
        }),
        setMenuFun(bool){
            this.setMenu(bool)
            if (bool && window.innerWidth <= 767.98) {
               document.body.classList.add('hidden')
             }else{
               document.body.classList.remove('hidden')
             }
          
        },
    },
    data() {
    return {
        countActive:false,
        lovesActive:false,  
    }
   },
    watch:{
        count(){
            this.countActive = true
            setTimeout(() => {
                this.countActive =false
            }, 500);
           
        },
        loves(){
            this.lovesActive = true
            setTimeout(() => {
                this.lovesActive =false
            }, 500);
           
        }
    },

    computed:{
        ...mapState({
            menu:state=>state.navbar.menu,
            count:state=>state.basket.count,
            loves:state=>state.basket.loves,
        })
    }
}
</script>
<style lang="">
    
</style>