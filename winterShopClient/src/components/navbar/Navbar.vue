<template lang="">
    <header  ref="navBarRef" class="Navbar" :class="{'active': navbarScroll}">
        <TopNavBarVue/>
        <FooterNavBarVue :types="types"/>
        <MenuNavBarVue :types="types"/>
        <MyModal :modelValue="loginNavBar" @update:modelValue="SetLoginNavBar" >
            <div  class="Navbar__loginModal loginModal">
                 <LoginModalVue/>
                 <RegistrationModalVue/>
                <div @click="SetLoginNavBar(false)"   class="loginModal__close"></div>
                <div :class=" loader ? 'loginModal__load active' : 'loginModal__load'">
                    <img src="@/images/Rolling-1s-200px.svg" alt="">
                </div>
            </div>
        </MyModal>
        <SearchNavBarVue/>
        <div :class="successfull ? 'Navbar__successfull active' : 'Navbar__successfull'">{{successText}}</div>
    </header>
</template>
<script>
 import { ref } from 'vue';
 import MyModal from '../UI/MyModal.vue';
import MyButtonVue from '../UI/MyButton.vue';
import MyInputVue from '../UI/MyInput.vue';
import {logout } from '@/http/userApi';
import {mapMutations, mapState} from 'vuex';
import { getAllTypes } from '../../http/typesApi';
import TopNavBarVue from './components/topNavBar/TopNavBar.vue';
import FooterNavBarVue from './components/footerNavBar/FooterNavBar.vue';
import MenuNavBarVue from './components/menuNavBar/MenuNavBar.vue';
import LoginModalVue from './components/modalNavBar/LoginModal.vue';
import RegistrationModalVue from './components/modalNavBar/RegistrationModal.vue';
import SearchNavBarVue from './components/searchNavBar/SearchNavBar.vue';
import modalChanger   from '@/helpers/modalChanger.js'
import onNavBarScroll   from '@/helpers/onNavBarScroll.js'

export default {
    components:{
        MyModal,
        MyButtonVue,
        MyInputVue,
        TopNavBarVue,
        FooterNavBarVue,
        MenuNavBarVue,
        LoginModalVue,
        RegistrationModalVue,
        SearchNavBarVue,
    },


    setup() {
        return {
            navBarRef:ref(null),
        }
    },

    computed:{
        ...mapState({
            loginNavBarChange:state=>state.navbar.loginNavBarChange,
            login:state=>state.navbar.login,
            successfull:state=>state.navbar.successfull,
            successText:state=>state.navbar.successText,
            loader:state=>state.navbar.loader,
            loginNavBar:state=>state.navbar.loginNavBar,
            menu:state=>state.navbar.menu,
        })
    },


    data(){
        return{
            navbarScroll:false,
            types:[],
        }
    },


    methods: {
        ...mapMutations({
          setMenu: 'navbar/setMenu',
          SetLoginNavBar:'navbar/SetLoginNavBar',
          SetLoginNavBarChange:'navbar/setLoginNavBarChange',
          setUser: 'user/setUser',
          setAuth: 'navbar/setAuth',
        }),
    
      
        windowScroll(){
            this.navbarScroll = onNavBarScroll(this.navBarRef)
        },

        
        loginModalChange(){
            this.SetLoginNavBarChange(modalChanger(this.menu))
        },
      


       
      

    
        
    },


    mounted(){

    if (localStorage.getItem('Auth')) {
        this.setAuth(true)
    }
  
    getAllTypes().then(data=>{
        this.types = data
    })

    window.addEventListener('scroll',(e)=>{this.windowScroll(e)})
    window.addEventListener('resize',this.loginModalChange)
  
    if (window.innerWidth < 991.98) {
        this.SetLoginNavBarChange( true)
             
    }else{
        this.SetLoginNavBarChange(false)
       
    }
   
    },

   beforeDestroy() {
    window.removeEventListener('scroll', this.windowScroll);
    window.removeEventListener('resize', this.loginModalChange);

  }
}

</script>



<style lang="scss">

.Navbar {
position: fixed;

z-index: 20;
width: 100%;
max-width: $maxWidth + px;
background: #fff;
max-height: 150px;
transition: all 0.3s ease 0s;
&::before{
    content:'';
    position: absolute;width: 30px;height: 100%;top: 0;left: 100%;
    background: #fff;
    
}
&::after{
    content:'';
    position: absolute;width: 30px;height: 100%;top: 0;right: 100%;
    background: #fff;
}
&.active{
    transition: all 0.3s ease 0s;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.8);
}
&__successfull{
    &.active{
        opacity:1;
        transition: all 0.3s ease 0s;
    }
    transition: all 0.3s ease 0s;
    opacity: 0;
    pointer-events: none;
    padding: em(15) em(30);
    background: $mainColor;
    border:1px solid #878787;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: em(14);
    font-style: normal;
    font-weight: 500;
    line-height: em(10,14); /* 125% */
    letter-spacing: 0.16px;
    text-transform: uppercase;
    position: absolute;top: 50px;left: 50%;
    transform: translate(-50%,0);
    z-index: 3000;

}
&__container {
    &.top{
        position: relative;
    &::after{
        content: '';
        position: absolute;width: 100%;height: 100%;top: 0;left: 0;
        z-index: 100;
        background: #fff;
        
    }
@media (min-width:$mobile){
    &::after{
        display: none;
    }
     
}
    }


}
&__footer {
}
&__menu {
}
&__body {
}
}
.body-navbar {
    position: relative;

display: flex;
justify-content: space-between;
@media (max-width:$mobile){
     justify-content:inherit; 
}
align-items: center;
height: 94px;
@media (max-width:$mobile){
    height: 50px;  
}
&__logo {
    cursor: pointer;
    position: relative;
    z-index: 101;
    @media (max-width:$mobile){
        flex: 0 0 33.333%; 
        display: flex;

        justify-content: center;
      
    }
}

&__logo-image {
    position: relative;
    max-width: 242px;
    @media (max-width:$mobile){
        max-width: 142px; 
    }
  
    img{
       width: 100%;
    }
}

&__actions {

 
}
}
.actions-navbar {
    display: flex;
    gap: 25px;
    position: relative;
    z-index: 101;
    @media (max-width:$mobile){
        gap: 15px;
    }
    &._media-max{
        @media (max-width:$mobile){
         justify-content: flex-end;
         flex: 0 0 33.333%;
    }
     
        
      

       }
&._media{
    display: none; 
    flex: 0 0 33.333%;
    @media (max-width:$mobile){
         display: flex; 
         align-items: center;
    }
}

&__action {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 0.3s ease 0s;
    position: relative;
    @media (any-hover: hover){
        &:hover{
            .actions-navbar__text,&:before{
                transition: all 0.3s ease 0s;
            color:#EB5757
            }
      
        }
       
    }
   &._icon-user-winter{
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:$mobile){
        &::before{
            display: none;
        }
    }
    .actions-navbar__text{
     
        flex: 1 1 auto;
        display: flex;
        align-items: center;
    }
   }
    @media (max-width:$mobile){
        span{
            display: none;
         } 
    }
   &._media{    
    display: flex; 
       @media (max-width:$mobile){
        display: none; 
        }
   }
   &._icon-search-winter{
    &::before{
   
        font-size: 20px;
    }
   }
    &::before{
        transition: all 0.3s ease 0s;
        display: block;
       font-size: 24px;
       line-height: 24px;
       @media (max-width:$mobile){
        font-size: 20px;
       line-height: 20px;
       }
       text-align: center;

    }


}
&__text{
    transition: all 0.3s ease 0s;
        display: block;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: 10px; /* 125% */
    letter-spacing: 0.16px;
    text-transform: uppercase;
    }
&__count{
    @media (any-hover: hover){
      
    }
    &.active{
        animation:count 0.3s ease-out forwards;
       @keyframes count {
        0% {
            transform: translate(0,0);
        }
        50%{
            transform: translate(0,-5px);
        }
        100% {
            transform: translate(0,0);
        }
       }
    }
    position: absolute;top: -30%;right: -20%;
    background: $hoverColor;
    width: 20px ;
    height: 20px ;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px ;
    font-style: normal;
    font-weight: 500;
    line-height: 10px; /* 125% */
    letter-spacing: 0.16px;
    text-transform: uppercase;
}

}


.icon-menu {
    pointer-events: none;
    
    width: 0;
    height:20px;
  
    position: relative;
    background: none;
  
    @media (max-width:$mobile){
       pointer-events: inherit;
       width: 20px;
    }

 
   
    span{
        transition: all 0.3s ease 0s;
    width: 100%;
    height: 1px;
    background: #000;
    position: absolute;
    top: calc(50% - 0.5px);
    left: 0;
   
    animation:icon-menu 0.3s  linear  both 0.1s ; 
    @keyframes icon-menu {
        0% {
            left: -50%;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }

    }


    &::before,&::after{
        transition: all 0.3s ease-out 0s;
        content:'';
        height: 1px;
        background: #000000;
        position: absolute;
        left: 0;
        width: 100%;
        
    }
    &::before{
        content:'';
        top: 2px;
        left: 0;
        opacity: 0;
        animation:icon-menu2 0.3s  linear forwards ; 
        @keyframes icon-menu2 {
            0% {
                left: -50%;
                opacity: 0;
            }
            100% {
                left: 0;
                opacity: 1;
            }
        }
    }
    &::after{
        content:'';
        bottom: 2px;
        left: 0;
        opacity: 0;
        animation:icon-menu3 0.3s  linear forwards 0.3s; 
        @keyframes icon-menu3 {
            0% {
                left: -50%;
                opacity: 0;
            }
            100% {
                left: 0;
                opacity: 1;
            }
        }
    }
  
    &.active  {
        span{
            transition: all 0.3s ease 0s;
            opacity: 0 !important;
        }
        &::before{
            transition: all 0.3s ease-out 0s;
        
            content:'';
            top: calc(50% - 1px);
            transform: rotate(45deg);
            
        }
        &::after{
            transition: all 0.3s ease-out 0s;
            content:'';
            width: 100%;
         
            top: calc(50% - 1px);
            transform:  rotate(-45deg);


            
            
        }
    }
}



.Navbar {

&__loginModal {
}
}



.Navbar {

&__search {
  
}
}




</style>