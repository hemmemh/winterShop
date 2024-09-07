<template lang="">
    <router-link  :to="`/catalog?type=${el._id}`">
        <div  class="types-catalog__slider slider-typesCatalog" :class="{active:el._id == $route.query.type}">
            <div class="slider-typesCatalog__body">
                <div class="slider-typesCatalog__image">
                    <img :src="`${API_URL}/brands/${el.image}`" alt="">
                </div>
            </div>
            <p class="slider-typesCatalog__name" >{{el.name}}</p>
        </div>
    </router-link>
</template>
<script>
import { API_URL } from '../../../../utils/config'

export default {
   


    setup(){
       return{
        API_URL:API_URL 
       }
    },


    props:{
        el:{
            type:Object
        }
    }
}
</script>
<style lang="">
    
</style>