export const adminModule = {
    state:()=>({
        modalActive:'',
        modal:false,
    }),

    mutations:{
        setModal(state,modal){
            state.modal = modal
        },
        setModalActive(state,modalActive){
            state.modalActive = modalActive
        },
      
    },
  
    namespaced:true
}