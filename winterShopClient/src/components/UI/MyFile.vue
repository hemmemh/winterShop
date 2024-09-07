<template lang="">
   <div class="MyFile">
    <input ref="inputRef" type="file" @change="setValue">
    <div @click="inputRef.click()" class="Myfile__slot"  >
             <slot></slot>
    </div>
    

   </div>
   
</template>
<script>
import { ref } from 'vue';
export default {
    setup(){
        return{
            inputRef: ref(null)
        }
    },
    methods:{
        setValue(e){
            this.$emit("fileClick",e.target.files)
        }
    }
}
</script>
<style lang="scss">
    .MyFile{
        input{
            display: none;
        }
    }
</style>