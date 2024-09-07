import jwtDecode from "jwt-decode"

export const userModule = {
    state:()=>({
        user:{}
    }),
    getters:{
       user(state){
        return state.user
        }
    },
    mutations:{
        setUser(state,user){
            state.user = user
        }
    },
  
    namespaced:true
}