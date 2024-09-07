<template lang="">
   <nav class="Navbar__menu menu-navbar" :class="{'active':menu == true}">
            <div class="menu-navbar__body">
                <div class="menu-navbar__items">
                    <div v-for="el in types" @click="setMenuFun(false)" class="menu-navbar__item">
                        <router-link  :to="`/catalog?type=${el._id}`">{{el.name}}</router-link>
                    </div>
                </div>
                
            </div>
            
    </nav>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    props:{
        types:{
            type:Array
        }
    },
    computed:{
        ...mapState({
            menu:state=>state.navbar.menu
        })
    },
    methods:{
        setMenuFun(){
            document.body.classList.remove('hidden')
            this.setMenu(false)
        },
        ...mapMutations({
            setMenu:'navbar/setMenu',
            
        }),
    }
  
}
</script>
<style lang="scss">
    

    .menu-navbar {
    &::-webkit-scrollbar{
       display: none;
    }
    overflow:scroll;

    pointer-events: none;
    position: fixed;width: 100%;height: 100%;top: 0;left: 0;
    z-index: 99;
    background: #fff;
    padding-top:50px;
    transform: translate(-100%,0);
    transition: all 0.3s ease 0s;
    @media (min-width:$mobile){
         display: none; 
    }
&.active{
    opacity: 1;
    pointer-events: inherit;
    transform: translate(0,0);
}
&__body {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;


}
&__items{
    display: flex;
    flex-direction: column;
    gap: 5px;
} 
&__item {
    cursor: pointer;
    font-family: 'Montserrat';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height:30px; /* 125% */

    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    @media (any-hover: hover){
        &:hover{
            transition: all 0.3s ease 0s;
            color:#EB5757
        }
    }
}
}

</style>