<template lang="">
     <nav v-once class="Catalog__navigation Navigation">
                <div class="Navigation__container">
                    <div class="Navigation__body">
                        Главная / Каталог / Сноуборд
                    </div>
                </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .Navigation {
    background: $mainColor;
    @media (max-width:$mobile){
         font-size: 12px; 
    }
&__container {
   
}
&__body{
    color: #F2F2F2;
font-size: em(12);
font-weight: 400;
line-height: normal;
letter-spacing: -0.24px;

    padding: em(25) 0;
}
}
</style>