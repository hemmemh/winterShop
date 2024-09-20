import { userMutations } from './mutations';
import { userGetters } from './getters';

export const userModule = {
  state: () => ({
    user: {},
  }),
  getters: userGetters,
  mutations: userMutations,

  namespaced: true,
};
