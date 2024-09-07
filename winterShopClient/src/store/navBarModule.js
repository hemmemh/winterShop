import { getBasket } from "@/http/basketApi"
import { getLoves } from "@/http/lovesApi"
import { login, registration } from "@/http/userApi"
import jwtDecode from "jwt-decode"

export const navBarModule = {
    state:()=>({
        menu:false,
        loginNavBar:false,
        auth:false,
        search:false,
        loader:false,
        loginNavBarChange:false,
        login:true,
        successfull:false,
        successText:""
    }),
  
    mutations:{
        setMenu(state,menu){
            state.menu = menu
        },
        SetLoginNavBar(state,loginNavBar){
            state.loginNavBar = loginNavBar
        },
        setAuth(state,auth){
            state.auth = auth
        },
        setSearch(state,search){
            state.search= search
        },
        setLoader(state,loader){
            state.loader= loader
        },
        setLoginNavBarChange(state,loginNavBarChange){
            state.loginNavBarChange= loginNavBarChange
        },
        setLogin(state,login){
            state.login= login
        },
        setSuccessfull(state,successfull){
            state.successfull= successfull
        },
        setSuccessText(state,successText){
            state.successText= successText
        },
      
      
    },
    actions:{
        async onLogin({commit},payload){
          commit('setLoader',true)
          try {
              const data = await login({mail:payload.email,password:payload.password})
              console.log(data);
              const user = jwtDecode(data.refreshToken)
              commit('user/setUser',user,{root:true})
              commit('SetLoginNavBar',false)
              commit('setSuccessText',"успешная авторизация")
              commit('setSuccessfull',true)
              commit('setAuth',true)
              localStorage.setItem('Auth','true')
              payload.email =''
              payload.password =''
              console.log(payload.id);
              const basket = await getBasket({id:user.id})
              commit('basket/setCount',basket.basketItems.length,{root:true})
              const loves = await getLoves({id:user.loves})
              commit('basket/setLoves',loves.lovesItems.length,{root:true})
                  setTimeout(() => {
                    commit('setSuccessfull',false)
                  }, 1000);

              
          } catch (error) {
            payload.errorText = error.response.data.message
            payload.errorEl = true
            console.log(error);
          } finally{
            commit('setLoader',false)
            return {
                email:payload.email,
                password:payload.password,
                errorText:payload.errorText,
                errorEl:payload.errorEl
                
              }
          }

        },

        async onRegistration({commit},payload){
            try {
                commit("setLoader",true)
                const data = await registration({name:payload.name,sername:'',password:payload.passwordReg,mail:payload.emailReg})
                    console.log(data);
                    payload.emailReg =''
                    payload.passwordReg =''
                    commit("setSuccessText","успешная регистрация")
                    commit("setSuccessfull",true)
                    payload.errorRegEl = false
                    setTimeout(() => {
                        commit("setSuccessfull",false)
                    }, 1000);

            } catch (e) {
                payload.errorRegText = e.response.data.message
                payload.errorRegEl = true
                console.log(e.response.data.message);
            } finally{
                commit("setLoader",false)
                return{
                    emailReg:payload.emailReg,
                    passwordReg:payload.passwordReg ,
                    errorRegText:payload.errorRegText,
                    errorRegEl:payload.errorRegEl,
                }
            
            }

        }
      },
  
    namespaced:true
}