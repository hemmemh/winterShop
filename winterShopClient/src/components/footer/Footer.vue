<template lang="">
    <footer class="Footer">
        <div class="Footer__cover">
            <div class="Footer__body">
                <div class="Footer__container">
                    <TopFooterVue/>
                    <CenterFooterVue/>
                    <BottomFooterVue/>
                </div>
             
                
            </div>
        </div> 
    </footer>
</template>
<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import TopFooterVue from './compoments/top/TopFooter.vue';
import BottomFooterVue from './compoments/bottomFooter/BottomFooter.vue';
import CenterFooterVue from './compoments/centerFooter/CenterFooter.vue';

export default {
    components:{
    Accordion,
    AccordionTab,
    TopFooterVue,
    BottomFooterVue,
    CenterFooterVue,
  
   },

}
</script>




<style lang="scss">


    .Footer {
       font-size: 16px;
       @media (max-width:1130px){
        font-size: 14px;
       }
       @media (max-width:$tablet){
        font-size: 13px;
       }
       @media (max-width:880px){
        font-size: 10px;
       }
       @media (max-width:$mobile){
        font-size: 16px;
       }
background: center top url('../../images/footer/1.png') no-repeat ;


        margin-top: 60px;
        @media (max-width:$mobile){
            margin-top: 30px;  
            background: none;
        }
position: relative;
&__container {
   
}

&__back {


}
&__cover{
    padding-top: 180px;
    @media (max-width:$mobile){
        padding-top: 0; 
    }
}
&__body {
 
    position: relative;
    z-index: 1;
     background: $mainColor;
}

&__top {
    padding-bottom: em(15);
    border-bottom:solid 1px rgba(255, 255, 255,0.2);
    @media (max-width:$mobile){
        padding: em(5) 0;
        display: flex;
        justify-content: center;
    }
}

&__logo {
    max-width: 350px;
    img{
        width: 100%;
    }
    @media (max-width:$mobile){
        max-width: 220px;  
       
    }
}

&__center {
    padding: em(34) 0 em(40) 0;
    display: flex;
    gap: em(100);
    @media (max-width:$tablet){
        gap: em(50);
    }
    @media (max-width:$mobile){
         flex-direction: column-reverse; 
         align-items: center;
         padding: em(8) 0 em(10) 0;
         gap: em(20);
    }
    @media (max-width:1080px){
            gap: em(20);
}
    border-bottom:solid 1px rgba(255, 255, 255,0.2);
}

&__apps {
  
}

&__accordion {
    flex: 1 1 auto;
    .p-accordion-header-link{
        @media (max-width:$mobile){
            
             gap: em(10);
        }
    }
    .p-accordion{
        display: flex;
        flex: 1 1 auto;
        justify-content: space-between;
        @media (max-width:880px){
            gap: em(10);
}
        @media (max-width:$mobile){
              flex-direction: column;
              align-items: center;
              gap: em(10);
        }
    }
    .p-accordion-tab{
    @media (max-width:$mobile){
         display: flex;
         flex-direction: column;
         align-items: center;
         position: relative;
    }
        svg{
            display: none;
            @media (max-width:$mobile){
                position: absolute; left:0;
                transform: translate(-140%,0);
                display: block;
                transition: all 0.3s ease 0s;
                color:#fff
            }
        }
    }
}

&__accordionBlock {
}

&__bottom {
    padding: em(32) 0 em(62) 0;
    @media (max-width:$mobile){
        padding: em(10) 0 em(20) 0;
    }
}

&__copyright {
    color:#BDBDBD;
text-align: right;
font-size: em(12);
font-weight: 500;
line-height: normal
}
}




</style>