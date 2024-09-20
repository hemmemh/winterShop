import { basketActions } from './actions';
import { basketGetters } from './getters';
import { basketMutations } from './mutations';

export const basketModule = {
  state: () => ({
    count: 0,
    loves: 0,
    inBasket: false,
    totalSum: 0,
    view: true,
    basket: {},
  }),
  getters: basketGetters,
  mutations: basketMutations,
  actions: basketActions,

  namespaced: true,
};
