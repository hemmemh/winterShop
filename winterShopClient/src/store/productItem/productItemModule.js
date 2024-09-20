import { productItemActions } from './actions';
import { productItemMutations } from './mutations';

export const productItemModule = {
  state: () => ({
    product: {},
    colors: [],
    color: {},
    sizes: [],
    size: {},
    page: 1,
    limit: 2,
    loaded: false,
    productRating: 0,
  }),
  getters: {},
  mutations: productItemMutations,

  actions: productItemActions,

  namespaced: true,
};
