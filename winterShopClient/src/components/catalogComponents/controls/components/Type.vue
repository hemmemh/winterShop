<template lang="">
    <div class="controls-catalog__type">
        <div class="controls-catalog__typeName">{{type.name}}</div>
        <div class="controls-catalog__typeValue">{{products.count}}</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState({
            type:state=>state.product.type,
            products:state=>state.product.products
        }),
    }
}
</script>
<style lang="scss">
 .controls-catalog {
    &__type {

display: flex;
gap: em(15);
padding-bottom: em(25);
}

&__typeName {
    font-size: em(32);
font-weight: 700;
line-height: em(40,32); /* 125% */
letter-spacing: -0.64px;
}

&__typeValue {
    align-self: flex-start;
    color: #BDBDBD;
font-size: em(16);
font-weight: 700;
line-height: normal;
}
 }

</style>