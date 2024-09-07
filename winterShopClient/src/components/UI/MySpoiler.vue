<template lang="">
    <div ref="spoilerRef" :class="`MySpoiler ${spoilerClass} ${open ? 'active' : ''}`">
        <div ref="headerRef" id="head" class="MySpoiler__header" @click="clickSpoiler">
            <slot  name="header"></slot> 
        </div>
        <div  class="MySpoiler__bodyCover">
            <div ref="bodyRef" @click="bodyClick" class="MySpoiler__body">
                <slot></slot>
            </div>
        </div>
    </div>
    
</template>
<script>
 import { ref } from 'vue';
export default {
    setup() {
        return {
            
            spoilerRef:ref(null),
            headerRef:ref(null),
            bodyRef:ref(null),
        }
    },
    data(){
        return{
            open:false
        }
    },
    props:{
        modelValue:{
            type:String,
        },
        spoilerClass:{
            type:String,
            default:'origin',
        },
    },
    methods:{
        clickSpoiler(){
            this.open = !this.open
        },
        clickOutside(e){
   
           
            if (this.spoilerRef && !this.spoilerRef.contains(e.target)) {
                console.log('dadas');
                this.open = false
               
            }

        },
        bodyClick(e){
           this.headerRef.firstElementChild.textContent = e.target.textContent
           this.$emit("update:modelValue",e.target.textContent)
        }
    },
    mounted(){
        
        document.addEventListener('click',this.clickOutside)
    },

}
</script>
<style lang="scss">
    .MySpoiler {
  position: relative;
 

&__bodyCover {
    position: absolute;
    width: 100%;
    overflow: hidden;

}
&__header{
    position: relative;
    z-index: 3;
}
&__body {
    z-index: 2;
    position: relative;
    transition: transform 0.3s ease 0s;
    transform: translate(0,-100%);
    box-sizing: border-box;

}
&.active{
    .MySpoiler__body{
        z-index: 4;
       transform: translate(0,0);
   }
   .MySpoiler__header{
    z-index: 5;
   }
}


&.navMenu{
    .MySpoiler__header{
    background: #FFF;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }
   
    .MySpoiler__body{
        border: 1px solid #CED4D7;
        background:#FFF;
      
    }
    .controls-catalog__sortButton  {
    &:not(:last-child) {
        border-bottom: 1px solid rgb(206, 212, 215,0.5);
    }
    cursor: pointer;
    background: #fff;
    width: em(320);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    padding: em(15);
    font-size: em(12);
font-style: normal;
font-weight: 600;
line-height: em(20,12); /* 166.667% */
letter-spacing: -0.24px;
text-transform: uppercase;
transition: all 0.3s ease 0s;
&.active{
    transition: all 0.3s ease 0s;
    color:$hoverColor
}
&._header{
  background: #FFF;  
  flex-direction:row
}
&._dev{
    flex-direction: row;
    width: 100%;
}
&::before{
    transition: all 0.3s ease 0s;
    font-size: em(24);
    transform: translate(0,15%) rotate(-90deg) ;
    
}
}
&.active{

}
&._admin{
    flex: 1  1 auto;
    .controls-catalog__sortButton{
        width: 100%;
    }
}
    &.active{
        .controls-catalog__sortButton {
   
   &::before{
       transition: all 0.3s ease 0s;
       transform:translate(0,15%) rotate(90deg) ;
       
   }
}
    }
}
}

</style>