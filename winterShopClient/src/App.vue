<template>
  <router-view v-if="load"> </router-view>
</template>
<script>
import { refresh } from './http/userApi';
import jwtDecode from 'jwt-decode'
import { mapMutations} from 'vuex';
import { getBasket } from './http/basketApi';
import { getLoves } from './http/lovesApi';

export default{
  methods:{
    ...mapMutations({
          setUser: 'user/setUser',
          setCount:'basket/setCount',
          setLoves:'basket/setLoves'
        }),
  },
  data(){
    return{
      load:false
    }
  },
mounted(){
 
  refresh().then(data=>{
    localStorage.setItem('Auth','true')

  
    this.setUser(jwtDecode(data.refreshToken))
          getBasket({id:this.$store.state.user.user.id}).then(data=>{
             this.setCount(data.basketItems.length)
          }).catch(e=>{
            console.log(e.response?.data?.message);
          })
          getLoves({id:this.$store.state.user.user.loves}).then(data=>{
               this.setLoves(data.lovesItems.length)
            })
  }).catch(e=>{
    console.log(e.response?.data?.message);
    localStorage.removeItem('Auth')
  }).finally(e=>{
    this.load = true
  })
},

}



</script>
<style lang="scss">



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}



</style>
