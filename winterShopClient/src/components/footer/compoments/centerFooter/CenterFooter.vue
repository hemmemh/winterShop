<template lang="">
                    <div class="Footer__center">
                        <AppsFooterVue/>
                        <AccordionFooterVue/>
                    </div>
</template>
<script>
import AccordionFooterVue from './components/accordionFooter/AccordionFooter.vue'

import AppsFooterVue from './components/appsFooter/AppsFooter.vue'


export default {
   components:{
    AppsFooterVue,
    AccordionFooterVue,

   } 
}
</script>
<style lang="">
    
</style>