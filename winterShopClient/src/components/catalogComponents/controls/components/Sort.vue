<template lang="">
       <div class="controls-catalog__sort">
            <p class="controls-catalog__sortText">Сортировать по:</p>
            <MySpoilerVue :spoilerClass="'navMenu'"  v-model="spoiler">
                <template #header>
                    <div class="controls-catalog__sortButton _header _icon-arrow">{{sortValue}}</div>
                </template>
                    <div @click="setSort('date')" class="controls-catalog__sortButton _dev"   :class="{active:sort=='date'}">Новинки</div>
                    <div @click="setSort('price')" class="controls-catalog__sortButton _dev"  :class="{active:sort=='price'}">Цена</div>
                    <div @click="setSort('rating')" class="controls-catalog__sortButton _dev" :class="{active:sort=='rating'}">Рейтинг</div>
            </MySpoilerVue>
        </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import MySpoilerVue from '../../../UI/MySpoiler.vue'

export default {
    methods:{
        ...mapMutations({
            setSort:'product/setSort'
        })
    },

    computed:{
        ...mapState({
            sort:state=>state.product.sort,
        }),
        sortValue(){
            switch(this.sort){
                case 'date':
                return 'новинки'
                case "rating":
                return 'рейтинг'
                case 'price':
                return 'цена'
                
            }
        }
    },
    
    components:{
        MySpoilerVue
    }
}
</script>
<style lang="scss">
    .controls-catalog__sort {
    display: flex;
    align-items: center;
    gap:em(15);

}

.controls-catalog__sortText {
    color: #828B8D;
font-size:em(14);
font-style: normal;
font-weight: 400;
line-height: em(25,14); /* 178.571% */
letter-spacing: -0.28px;
@media (max-width:$mobile){
     display: none; 
}
}
</style>