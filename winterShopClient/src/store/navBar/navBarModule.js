import { navBarActions } from './actions';
import { navBarMutations } from './mutations';

export const navBarModule = {
  state: () => ({
    menu: false,
    loginNavBar: false,
    auth: false,
    search: false,
    loader: false,
    loginNavBarChange: false,
    login: true,
    successfull: false,
    successText: '',
  }),

  mutations: navBarMutations,
  actions: navBarActions,

  namespaced: true,
};
