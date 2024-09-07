<template lang="">
    <div  class="Product _app">
        <LayoutVue>
            <MainProductVue/>
        </LayoutVue>
    </div>
</template>
<script>
import MainProductVue from '../components/productComponents/MainProduct.vue'
import LayoutVue from '../router/Layout.vue'



export default {
    components:{
        LayoutVue,
        MainProductVue,
    },
}
</script>
<style lang="scss">

</style>