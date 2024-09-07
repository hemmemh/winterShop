<template lang="">
    <textarea ref="textAreaRef"  rows="1" @focus="onFocus" @blur="onBlur" :class="`MyTextArea ${textAreaClass} ${Focus ? 'active' : ''}`" :value="modelValue"  @input="setValue" :placeholder="placeholder"></textarea>
</template>
<script>
import { ref } from 'vue';
export default {
    setup(){
        return{
            textAreaRef: ref(null)
        }
    },
    data(){
        return{
            Focus:false
        }
    },
    methods:{
        onFocus(e){
            this.Focus = true
        },
        onBlur(e){
            this.Focus = false
        },
       setValue(e){
        this.textAreaRef.style.height = "auto";
        this.textAreaRef.style.height = `${e.target.scrollHeight}px`;
        this.$emit("update:modelValue",e.target.value)
       }
    },
    props:{
        textAreaClass:{
            type:String,
            default:'origin'
        },
        modelValue:{
            type:String,
        }
    },
 
}
</script>
<style lang="scss">
    .MyTextArea{
        resize: none;
       &::-webkit-scrollbar {
       width: 0;
         }
        &.ratings{
            align-self: center;
           color:#000;
            &::placeholder{
                color:#828B8D;
            }
            font-size: em(14);
            font-style: normal;
            font-weight: 400;
            line-height: em(25,14); /* 178.571% */
            letter-spacing: -0.28px;
            flex: 1 1 auto;
            margin-right: em(10);
            @media (max-width:$mobile){
                flex: 1 1 100%;
                font-size: em(17);
                margin-bottom: em(10);
        }
        }
        &.admin{
            &::placeholder{
                color:#828B8D;
            }
            font-size: em(18);
            font-style: normal;
            font-weight: 400;
            line-height: em(25,18); /* 178.571% */
            letter-spacing: -0.28px;
            border-bottom: 1px solid #9a9a9a;
            padding: em(10) em(0);
            box-sizing: border-box;

        }
    }
</style>