<template lang="">
 <div class="loginModal__side _right" :class="{'hide': loginNavBarChange && login}">
                 <div class="loginModal__name">Регистрация</div>
                 <div class="loginModal__inputs">
                     <div class="loginModal__inputCover">
                     <div class="loginModal__inputName">Имя*</div>
                     <MyInputVue inputClass="login" v-model="name"/>
                 </div>
                 <div class="loginModal__inputCover">
                     <div class="loginModal__inputName">Номер телефона или email</div>
                     <MyInputVue :inputClass="emailRegTest ?  'login active' : 'login'" v-model="emailReg" @update:modelValue="setEmailReg"/>
                 </div>
                 <div class="loginModal__inputCover">
                     <div class="loginModal__inputName">Пароль</div>
                     <MyInputVue inputClass="login" v-model="passwordReg"/>
                 </div>
                 </div>
                 
                 <MyButtonVue @click="onRegistration" className="login _reg" >Зарегистрироваться</MyButtonVue>
                 <div v-if="errorRegEl" class="loginModal__error">{{errorRegText}}</div>
                 <div @click="setLogin(true)" class="loginModal__change" :class="{'active': loginNavBarChange}">Войти</div>
             </div>
</template>
<script>

import { EMAIL_REGEXP } from '../../../../utils/config'
import { registration } from '../../../../http/userApi'
import MyButtonVue from '../../../UI/MyButton.vue'
import MyInputVue from '../../../UI/MyInput.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    components:{
        MyButtonVue,
        MyInputVue
    },


    data() {
        return {
            name:'',
           
           emailReg:'',
           passwordReg:'',
           errorRegEl:false,
            errorRegText:'',
            emailRegExp:EMAIL_REGEXP,
            emailRegTest:false,
        }
    },

    methods: {
        setEmailReg(e){
            this.emailReg = e
            console.log(e)
            if (!this.emailRegExp.test(e) && e) {
                this.emailRegTest = true
                this.errorRegText ='ошибка при валидации'
            }else{
                this.emailRegTest = false
            }
        },
        ...mapActions({
            onRegistrationAction:"navbar/onRegistration"
        }),

       async onRegistration(){
            if(!this.passwordReg || !this.emailReg || !this.name){
                this.errorRegText ='пустые поля'
                this.errorRegEl = true
                return
            }
            if(this.emailRegTest){
                this.errorRegEl = true
                return
            }
            let {name,passwordReg,emailReg,errorRegText,errorRegEl} = await this.onRegistrationAction({name:this.name,passwordReg:this.passwordReg,emailReg:this.emailReg,errorRegText:this.errorRegText,errorRegEl:this.errorRegEl})
            this.name = name
            this.passwordReg = passwordReg
            this.emailReg = emailReg
            this.errorRegText = errorRegText
            this.errorRegEl = errorRegEl
        },

        ...mapMutations({
            setLoader:'navbar/setLoader',
            SetLoginNavBar:'navbar/SetLoginNavBar',
            setAuth: 'navbar/setAuth',
            setLoginNavBarChange:'navbar/setLoginNavBarChange',
            setSuccessfull:'navbar/setSuccessfull',
            setSuccessText:'navbar/setSuccessText',
            setLogin:'navbar/setLogin',
        }),
    },

    computed:{
        ...mapState({
            loginNavBarChange:state=>state.navbar.loginNavBarChange,
            login:state=>state.navbar.login,

        })
    },

}
</script>
<style lang="scss">
    
    .loginModal {
display: flex;
@media (max-width:520px){
     font-size: 14px; 
}
&__load{
    &.active{
        display: block;
    }
    display: none;
    position: absolute;width: 100%;height: 100%;top: 0;left: 0;
    background: rgb(0, 0, 0,0.8);
    img{
        position: absolute;top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    }

}
&__error{
    font-size: em(16);
font-style: normal;
font-weight: 500;
line-height: em(35,21); /* 166.667% */
letter-spacing: -0.42px;
margin-top: em(12);
color:$hoverColor
}
&__side{
    padding: em(40) em(70);
    @media (max-width:520px){
        padding: em(20) em(40);
}

    &._right{
        border: 1px solid #F2F2F2;
background: #F9F9F9;
    }
    &.hide{
    display: none;
}
}

&__inputCover{

}
&__inputs{
display: flex;
flex-direction: column;
gap: em(25);
margin-bottom: em(40);
}
&__name {
font-size: em(21);
font-style: normal;
font-weight: 500;
line-height: em(35,21); /* 166.667% */
letter-spacing: -0.42px;
margin-bottom: em(25);
}

&__inputCover {
}
&__input{
    transition: all 0.3s ease 0s;
    border: 1px solid #CED4D7;
background: #FFF;
padding: em(15) em(10);
font-size: em(14);
width: em(352);
font-weight: 500;
line-height: em(20,14); /* 166.667% */
&:focus{
    transition: all 0.3s ease 0s;
    border: 1px solid $hoverColor;
}

}
&__inputName {
    color:#828B8D;

font-size: em(12);

font-weight: 500;
line-height: em(20,12); /* 166.667% */
letter-spacing: -0.24px;
margin-bottom: em(5);
}


&__change{
   
cursor: pointer;
font-size: em(12);
display: none;
font-weight: 500;
line-height: em(30,12); /* 166.667% */
letter-spacing: -0.24px;
margin-bottom: em(5);
transition: all 0.3s ease 0s;
@media (any-hover: hover){
    &:hover{
        transition: all 0.3s ease 0s;
        color:$hoverColor
    }
}
&.active{
    display: inline-block;
}
}
&__close {
    @media (any-hover: hover){
        &:hover{
                    
    &::before,&::after{
        transition: all 0.3s ease 0s;
        background: $hoverColor;
    }
        }
    }
    cursor: pointer;
    position: absolute;top: 20px;right:20px;
    background: $mainColor;
    width: 30px;
        height: 30px;
        
    &::before,&::after{
        transition: all 0.3s ease 0s;
        content:'';
        display: block;
        width: 25px;
        height: 2px;
        background: #fff;
        position: absolute;top: 50%;left: 50%;
    }
    &::before{
        transform: translate(-50%,-50%) rotate(45deg) ;
        
    }
    &::after{
        transform:  translate(-50%,-50%) rotate(-45deg) ;
        
    }
}
}


</style>