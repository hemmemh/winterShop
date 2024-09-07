<template lang="">
     <div class="action-home__item item-actionHome">
                        <div class="item-actionHome__image">
                            <img :src="imagePath"  alt="">
                        </div>
                        <div class="item-actionHome__name">{{name}}</div>
    </div>
</template>
<script>
export default {
    props:{
        srcImage:{
            type:String
        },
        name:{
            type:String
        }
    },
    computed:{
        imagePath(){
            return require(`@/images/home/act/${this.srcImage}`);
        }
    }
}
</script>
<style lang="scss">
    
    .Home{
    .item-actionHome {
    flex: 1 1 auto;
    &__cover{
        padding:  0 0 270/667 * 100% 0;
        display: flex;
        flex-direction: column;
    }
&__image {
    flex: 1 1 auto;
    padding: 0 0 270/667 * 100% 0;
    position: relative;
    img{
        position: absolute;width: 100%;height: 100%;top: 0;left: 0;
    }
}

&__name {
    text-align: center;
font-size: rem(21);
padding: rem(22) rem(40);
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
background: $mainColor;
color: #FFF;
@media (max-width:$tablet){
    padding: rem(15) rem(20); 
    font-size: rem(12);
}
@media (max-width:$mobileSmall){
    font-size: rem(9);
    padding: rem(10) rem(15); 
}
}
}
}


</style>