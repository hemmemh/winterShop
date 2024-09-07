<template lang="">
                    <nav class="Footer__accordion">
                        <Accordion :multiple="!isMobile" :activeIndex="[0,1,2,3]">
                            <AccordionTab :disabled="!isMobile" >
                                <template #header>
                                    <div class="accordion-block__name _mod">Контакты</div>
                                </template>
                                <div class="Footer__accordionBlock accordion-block">
                                    <div class="accordion-block__item">
                               <div class="accordion-block__icon _icon-phone-winter"></div>
                               <div class="accordion-block__info">
                                   <div class="accordion-block__title">8 (800) 511-74-68 </div>
                                   <div class="accordion-block__text _mod">Бесплатная горячая линия Ежедневно с 9 до 21</div>
                                   
                               </div>
                               
                                    </div>
                                    <div class="accordion-block__item">
                               <div class="accordion-block__icon _icon-mail-winter"></div>
                               <div class="accordion-block__info">
                                   <div class="accordion-block__title">Контактный Email</div>
                                   <div class="accordion-block__text _mod">info@brd.ru</div>
                                   
                               </div>
                               
                                    </div>
                                </div>
                            </AccordionTab>

                            <AccordionTab :disabled="!isMobile">
                                <template #header>
                                    <div class="accordion-block__name">Помощь</div>
                                </template>
                                <div class="Footer__accordionBlock accordion-block">
                                    <div class="accordion-block__text">Доставка</div>
                                    <div class="accordion-block__text">Оплата</div>
                                    <div class="accordion-block__text">Возврат</div>
                                    <div class="accordion-block__text">Отзывы (2290)</div>
                                    <div class="accordion-block__text">Акции и скидки</div>
                                </div>
                            </AccordionTab>

                            <AccordionTab :disabled="!isMobile">
                                <template #header>
                                    <div class="accordion-block__name">Компания</div>
                                </template>
                                <div class="Footer__accordionBlock accordion-block">
                                    <div class="accordion-block__text">Контакты</div>
                                    <div class="accordion-block__text">О boardriders</div>
                                    <div class="accordion-block__text">Вакансии</div>
                                    <div class="accordion-block__text">Публичная оферта</div>
                                </div>
                            </AccordionTab>

                            <AccordionTab :disabled="!isMobile">
                                <template #header>
                                    <div class="accordion-block__name">Boardriders Inc.</div>
                                </template>
                                <div class="Footer__accordionBlock accordion-block">
                                    <div class="accordion-block__text">Франчайзинг</div>
                                    <div class="accordion-block__text">Quiksilver</div>
                                    <div class="accordion-block__text">Roxy</div>
                                    <div class="accordion-block__text">DC Shoes</div>
                                    <div class="accordion-block__text">Boardriders Club</div>
                                </div>
                            </AccordionTab>
                        </Accordion>
                   
                       
                       
                        
                    </nav>
</template>
<script>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
export default {
    components:{
        Accordion,
    AccordionTab,
    },

    data() {
        return {
            isMobile:false
        }
    },


   methods:{
    windowMobile(innerWidth){
        if (innerWidth < 767.98) {
            this.isMobile = true
        }else{
            this.isMobile = false
        }
    }
   },


   mounted(){
    this.windowMobile(window.innerWidth)
    window.addEventListener('resize',(e)=>{this.windowMobile(e.target.innerWidth)})
   }

}
</script>
<style lang="scss">
    
    .accordion-block {
    background: #000;
    flex: 1 1 auto;
    padding-top: em(30);
    display: flex;
    flex-direction: column;
    gap: em(20);
    @media (max-width:$mobile){
      align-items: center;
       padding-top: em(15);
    }
&__name {
    color: #F2F2F2;
    white-space: nowrap;
    font-size: em(18);
  
    &._mod{
        font-size: em(16);
        @media (max-width:$mobile){
        font-size: em(18);
    }
    }
 

font-weight: 500;
line-height: em(25); 
}

&__body {
 
}

&__item {
    display: flex;
    gap: em(25);
        @media (max-width:1080px){
            gap: em(15);
}
}

&__icon {
    
    &::before{
        
        color: #fff;
        font-size: em(23);
    }
    &._icon-mail{
        font-size: em(10);
    }
}

&__info {
    max-width: em(168);
    @media (max-width:1080px){
        max-width: em(140);
}
}

&__title {
    color: #F2F2F2;
font-size: em(18);
@media (max-width:1080px){
    font-size: em(12);
}
@media (max-width:$tablet){
  
}
font-weight: 500;
line-height: normal;
margin-bottom: em(10,18);
white-space: nowrap;
}

&__text {
  
    color: #BDBDBD;
font-size: em(12);
font-style: normal;
font-weight: 400;
line-height: em(20,12); /* 166.667% */
transition: all 0.3s ease 0s;
&:not(._mod){
    cursor: pointer;
    @media (any-hover: hover){
    &:hover{
        transition: all 0.3s ease 0s;
        color:#EB5757 ;
    }
}
}


@media (max-width:$mobile){
    font-size: em(16);
    line-height: em(20,15); /* 166.667% */
}
}
}


</style>