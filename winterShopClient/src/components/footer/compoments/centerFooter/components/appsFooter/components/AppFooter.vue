<template lang="">
            <div class="apps-footer__app app-footer">
                <div class="app-footer__body">
                    <div class="app-footer__image">
                        <img :src="imageAps" alt="">
                    </div>
                    <div class="app-footer__info">
                        <div class="app-footer__textTop">{{textTop}}</div>
                        <div class="app-footer__textBottom">{{textBottom}}</div>
                    </div>
                    
                </div>
                
            </div>
</template>
<script>
export default {
    props:{
        textTop:{
            type:String
        },
        textBottom:{
            type:String
        },
        imageUrl:{
            type:String
        }
    },

    computed:{
        imageAps(){
            return require(`@/images/footer/${this.imageUrl}`);
        }
    }
}
</script>
<style lang="scss">
    
    .app-footer {

&__body {
    display: flex;
    gap: em(7);
    border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.15);
   padding: em(10) em(20);
   cursor: pointer;
   transition: all 0.3s ease 0s;
@media (any-hover: hover){
    &:hover{
        transition: all 0.3s ease 0s;
        border: 1px solid rgba(235, 87, 87,0.5);
    }
}
}

&__image {
    width:30px;
    position: relative;
    img{
       
        object-fit: contain;
        position: absolute;width: 100%;height: 100%;top: 0;left: 0;
    }
}

&__info {
}

&__textTop {
    color: #fff;
    font-size: em(9);
font-weight: 500;
line-height: em(14,16); /* 156.25% */
margin-block: em(5,16);
}

&__textBottom {
    color: #fff;
    font-size: em(16);
font-weight: 500;
line-height: em(18,16); /* 156.25% */

}

&__qr {
    width: em(116);
    height: em(116);
    position: relative;
    img{
        position: absolute;width: 100%;height: 100%;top: 0;left: 0;
    }
}
}

</style>