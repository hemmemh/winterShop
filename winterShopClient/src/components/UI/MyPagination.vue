<template lang="">
    <div v-if="length>visible && length > 2 && visible > 2" :class="`MyPagination ${paginationClass} `">
        <div class="MyPagination__arrow" :class="{'lock': modelValue == 1}"  @click="setPage(modelValue-1)">
            <slot  name="arrowLeft"></slot> 
        </div>
        <div v-if="modelValue != 1 " class="MyPagination__button" @click="setPage(1)">1</div>
        <div v-if="leftDotsPag" class="MyPagination__dots">...</div>
        <div v-for="button in  Array.from(Array(leftSidePag).keys()).slice().reverse()" class="MyPagination__button" @click="setPage(modelValue - (button+1))">{{modelValue - (button+1)}}</div>
        <div class="MyPagination__button active" >{{modelValue}}</div>
        <div v-for="button in rightSidePag" class="MyPagination__button"  @click="setPage(modelValue + button)">{{modelValue + button}}</div>
        <div v-if="rightDotsPag" class="MyPagination__dots">...</div>
        <div v-if="modelValue != length" class="MyPagination__button" @click="setPage(length)">{{length}}</div>
        <div class="MyPagination__arrow" :class="{'lock': modelValue == length}"  @click="setPage(modelValue+1)">
            <slot  name="arrowRight"></slot> 
        </div>
        
    </div>
    <div v-else  :class="`MyPagination ${paginationClass} `">
        <div class="MyPagination__arrow" :class="{'lock': modelValue == 1}"  @click="setPage(modelValue-1)">
            <slot  name="arrowLeft"></slot> 
        </div>
        <div v-for="button in  length" class="MyPagination__button" :class="{'active': modelValue == button}"  @click="setPage(button)">{{button}}</div>
        <div class="MyPagination__arrow" :class="{'lock': modelValue == length}"  @click="setPage(modelValue+1)">
            <slot  name="arrowRight"></slot> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            leftDotsPag:true,
            rightDotsPag:true,
            leftSidePag:0,
            rightSidePag:0,
        }
    },
    props:{
        length:{
            type:Number,
            default:12,
        },
        visible:{
            type:Number,
            default:8,
        },
        modelValue:{
            type:String,
          
        },
        paginationClass:{
            type:String,
            default:'origin'
        }
    },
    methods:{
        setPage(e){
            if (e >= 1 && e<= this.length) {
                const searchParams = new URLSearchParams(this.$route.query);
                searchParams.set('page', JSON.stringify(e));
                this.$router.push({
                path: this.$route.path,
                query: { ...Object.fromEntries(searchParams.entries()) }
                });
                
                this.$emit("update:modelValue",e)
          
            }
         
        }
    },
    watch:{
        modelValue(){
            let leftSide = 0
            let rightSide= 0
            let leftDots = true
            let rightDots= true
            let reserve = 0
            const page = this.modelValue
            let pages = (page == 1 || page === this.length) ? this.visible - 2 :  this.visible - 3
            rightSide = Math.ceil(pages/2) //2
            leftSide = pages - rightSide   //1
           
  if(page + rightSide >=this.length-1){
      reserve =  page + rightSide - (this.length-1)
      rightSide = page == this.length ? 0 : rightSide - reserve
      if(page == this.length){
        reserve -=  1
      }
      rightDots = false
  }
  console.log(leftSide);
  if(1 + leftSide >= page-1){
      reserve = reserve + 1 + leftSide - ( page - 1)
      leftSide = page == 1 ? 0 : leftSide - (1 + leftSide - (page - 1))
      if(page == 1){
        reserve-=1
      }
      leftDots  = false
  }
  if (rightDots) {
     const a = this.length - page
     if (reserve - a >=0) {
      rightSide+=a
      reserve-=a
     }else{
      rightSide+=reserve
      reserve = 0
     }
  }
  if(leftDots){
      const a = page - 1
      if(reserve - a >=0){
          leftSide+=a
          reserve-=a
      }else{
        leftSide+=reserve
      reserve = 0
     }
  }          
  console.log(leftSide,rightSide);
            this.leftDotsPag=leftDots
            this.rightDotsPag=rightDots
            this.leftSidePag=leftSide
            this.rightSidePag=rightSide
        }
    },
    mounted(){
        console.log(length,'gdrgr');
            let leftSide = 0
            let rightSide= 0
            let leftDots = true
            let rightDots= true
            let reserve = 0
            const page = this.modelValue
            let pages = (page == 1 || page === this.length) ? this.visible - 2 :  this.visible - 3
            rightSide = Math.ceil(pages/2) //2
            leftSide = pages - rightSide   //1
           
  if(page + rightSide >=this.length-1){
      reserve =  page + rightSide - (this.length-1)
      rightSide = page == this.length ? 0 : rightSide - reserve
      if(page == this.length){
        reserve -=  1
      }
      rightDots = false
  }
  if(1 + leftSide >= page-1){
      reserve = reserve + 1 + leftSide - ( page - 1)
      leftSide = page == 1 ? 0 : leftSide - (1 + leftSide - (page - 1))
      if(page == 1){
        reserve-=1
      }
      leftDots  = false
  }
  if (rightDots) {
     const a = this.length - page
     if (reserve - a >=0) {
      rightSide+=a
      reserve-=a
     }else{
      rightSide+=reserve
      reserve = 0
     }
  }
  if(leftDots){
      const a = page - 1
      if(reserve - a >=0){
          leftSide+=a
          reserve-=a
      }else{
        leftSide+=reserve
      reserve = 0
     }
  }
            this.leftDotsPag=leftDots
            this.rightDotsPag=rightDots
            this.leftSidePag=leftSide
            this.rightSidePag=rightSide
    }
}
</script>
<style lang="scss">
.MyPagination {
    user-select: none;
    display: flex;
      gap: em(20);
      align-items: center;
      &__arrow{
        cursor: pointer;
        &.lock{
            cursor: inherit;
        }
      }
&__button {
    cursor: pointer;
}

&__dots {
}




&.catalog{
    @media (max-width:$mobile){
         font-size: 10px; 
    }
    .MyPagination__button{
        font-size: em(16);

font-weight: 500;
line-height: em(25,16); /* 156.25% */
letter-spacing: -0.32px;
&.active{
    color: $hoverColor;
}
    }
    .MyPagination__arrow{
        img{
            pointer-events: none;
        }
        &.lock{
            img{
            opacity: 0.5;
        }
        }
        
    }
  
}
}



</style>