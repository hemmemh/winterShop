<template lang="">
   <div class="ratings-product__left">
                        <FormRatingsVue/>
                        <BodyRatingsVue/>
                        <PaginationRatingsVue/>
                    </div>
</template>
<script>
import MyTextAreaVue from '@/components/UI/MyTextArea.vue';
import MyPagination from '@/components/UI/MyPagination.vue';
import MyButtonVue from '@/components/UI/MyButton.vue';
import RatingBarVue from '@/components/elements/RatingBar.vue';
import { API_URL } from '@/utils/config';
import Rating from 'primevue/rating';
import FormRatingsVue from './FormRatings.vue'
import BodyRatingsVue from './BodyRatings.vue';
import PaginationRatingsVue from './PaginationRatings.vue';

export default {
    components:{
        MyTextAreaVue,
        MyPagination,
        MyButtonVue,
        RatingBarVue,
        Rating,
        FormRatingsVue,
        BodyRatingsVue,
        PaginationRatingsVue,
    },

    data(){
        return{
            API_URL:API_URL,
            page:1,
            limit:2,
        }
    },
    props:{
        product:{
            type:Object
        }
    },
  

}
</script>
<style lang="">
    
</style>