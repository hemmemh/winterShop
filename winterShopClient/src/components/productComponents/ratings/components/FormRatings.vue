<template lang="">
  <form class="ratings-product__form form-ratingProduct">
                   <MyTextAreaVue v-model="text" :textAreaClass="'ratings'" placeholder="Оставьте отзыв"/>
                   <div class="form-ratingProduct__action">
                        <div class="form-ratingProduct__rating">
                            <Rating v-model="rating" :cancel="false">
                           <template #onicon>
                               <img src="@/images/product/right/onStar.png" height="24" width="24" />
                           </template>
                           <template #officon>
                               <img src="@/images/product/right/offStar.png" height="24" width="24" />
                           </template>
                            </Rating>
                        </div>
                        <div class="form-ratingProduct__button">
                            <MyButtonVue @click="setRating" className="rating" classNameCover="rating _icon-send" rippleClass='basket' > <span>Отправить</span></MyButtonVue>
                        </div>
                   </div>      
  </form>
</template>
<script>
import Rating from 'primevue/rating'
import MyTextAreaVue from '../../../UI/MyTextArea.vue'
import MyButtonVue from '../../../UI/MyButton.vue'
import { addRaiting } from '../../../../http/productApi'
import { mapActions, mapState } from 'vuex'
mapState
export default {
    components:{
        MyButtonVue,
        Rating,
        MyTextAreaVue,
    },
    methods:{
        ...mapActions({
        addRatingToProduct:"productItem/addRatingToProduct"
      }),
        setRating(e){
        e.preventDefault()
        this.addRatingToProduct({user:this.$store.state.user.user,text:this.text,rating:this.rating,id:this.$route.params.id})
        this.text = ''
        this.rating = 1
      },
    },
    computed:{
        ...mapState({
            product:state=>state.productItem.product
        })
    },
    data() {
        return {
            rating:1,
            text:'',
        }
    },
}
</script>
<style lang="scss">
    
    .form-ratingProduct {
    display: flex;

    border-radius: 4px;
    flex-wrap: wrap;
border: 1px solid #CED4;
background: #F9F9F9;
padding: em(10);
&__action{
    display: flex;
    align-items: center;
    align-self: flex-start;
}
&__rating{
 
    margin-right: em(40);
    display: flex;
    align-items: center;
    @media (max-width:$mobile){
        margin-right: em(20);
        img{
        width:20px ;
        height:20px;
    }
    }
  
}
}


</style>