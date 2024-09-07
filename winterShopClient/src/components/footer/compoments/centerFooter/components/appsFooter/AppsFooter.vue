<template lang="">
                    <div class="Footer__apps apps-footer">
                        <div class="apps-footer__title">Доступ к ранним релизам в приложении </div>
                        <div class="apps-footer__body">
                            <div class="apps-footer__left">
                                <AppFooterVue textTop="Download on the" textBottom="App Store" imageUrl="apple.png"/>
                                <AppFooterVue textTop="Get it on" textBottom="Google Play" imageUrl="google.png"/>
                            </div>
                            <div class="app-footer__qr">
                                <img src="@/images/footer/QR.png" alt="">
                            </div>
                            
                        </div>
                        
                    </div>
</template>
<script>
import AppFooterVue from './components/AppFooter.vue'

export default {
    components:{
        AppFooterVue
    }
}
</script>
<style lang="scss">
    
    .apps-footer {

&__title {
    color: #F2F2F2;
font-size: em(16);
font-style: normal;
font-weight: 500;
line-height: em(25,16); /* 156.25% */
margin-bottom: em(30,16);
@media (max-width:$mobile){
    margin-bottom: em(10,16);
}
}

&__body {
    display: flex;
    gap: em(30);
}

&__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
}

&__app {
}
}



</style>