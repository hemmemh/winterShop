<template lang="">
    <div class="Love__top">
        <h2 class="Love__title">Избранные товары</h2>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

.Love{
    &__top {
    padding-top: em(50);
    margin-bottom: em(25);
    @media (max-width:$mobile){
         font-size: 12px; 
         padding-bottom: em(10);
         margin-bottom: em(15);
    }
    @media (max-width:$mobileSmall){
        font-size: 10px; 
    }
 

  
    display: flex;
    justify-content: space-between;
    align-items: center;
}

&__title {
    font-size: em(21);
font-style: normal;
font-weight: 700;
line-height: em(30,21); /* 142.857% */
}
}

</style>