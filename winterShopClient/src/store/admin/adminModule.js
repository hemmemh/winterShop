import { adminMutations } from './mutations';

export const adminModule = {
  state: () => ({
    modalActive: '',
    modal: false,
  }),

  mutations: adminMutations,

  namespaced: true,
};
