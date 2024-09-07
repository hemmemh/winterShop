<template lang="">
       <div ref="modalRef" @mousedown="addClick" :class="modelValue ? `modal ${modalClass} active`:`modal ${modalClass}`" >
        <div ref="modalCoverRef" :class="modelValue ? 'modal__body active':'modal__body'" >
        
                <slot></slot>
          
            
           
        </div>
    </div>
</template>
<script>
 import { ref } from 'vue';
export default {
    
    setup(){
        return{
            modalRef: ref(null),
            modalCoverRef: ref(null),
          
        }
    },
    data(){
        return{
          
        }
    },
 
    methods:{
       addClick(e){
        console.log(e);
        if (e.target ===  this.modalRef && e.target !==  this.modalCoverRef ) {
            this.$emit("update:modelValue",false)
        }
       },
       keyDown(e){
      if (e.key === "Escape") {
        this.$emit("update:modelValue",false)
     
      }
  }
    },

    props:{
        modalClass:{
            type:String,
            default:'origin'
        },
        modelValue:{
            type:Boolean,
        }
    },
    watch:{
        modelValue(){
            if (this.modelValue) {
      document.body.classList.add('hidden')
    }else{
      document.body.classList.remove('hidden')
    }
        }
    },
    mounted(){
        document.addEventListener('keydown',this.keyDown)
    },
    beforeDestroy() {
        document.removeEventListener('keydown',this.keyDown)

  }
}
</script>
<style lang="scss">


    .modal{

&::-webkit-scrollbar{
width: 0;

  }


align-items: center;
justify-content: center;
position: fixed;
z-index: 1000;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: rgba($color: #000000, $alpha: 0.3);
display: flex;
pointer-events: none;
opacity: 0;
transition: all 0.3s ease 0s;
&.active{
    opacity: 1;
    pointer-events: inherit;
}


&__body{
background: #ffff;
transform: scale(0.5);
transition: all 0.3s ease 0s;
position: relative;
overflow-y: scroll;
overflow-x:hidden;
&::-webkit-scrollbar{
width: 0;

  }
max-height: 90%;
&.active{
    transform: scale(1);
} 
}




&.admin{
    .modal__body{
        border: 1px solid #9b9999;
        border-radius:20px;
   
    }
}

}




</style>