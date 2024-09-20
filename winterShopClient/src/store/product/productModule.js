import { ref } from 'vue';
import { productMutations } from './mutations';
import { productActions } from './actions';
export const productModule = {
  state: () => ({
    type: {},
    products: {},
    product: {},
    nav: false,
    sort: 'date',
    navMenuRef: ref(null),
    price: [0, 100],
    minPriceEnd: 0,
    maxPriceEnd: 100,
    minPrice: 0,
    maxPrice: 100,
    colors: [],
    colorsActive: [],
    page: 1,
    limit: 6,
    brands: [],
    brand: false,
    sizes: [],
    sizesActive: [],
    productsLoad: false,
    updateLoading: false,
    searchEnd: '',
    search: '',
    timer: null,
  }),

  mutations: productMutations,
  actions: productActions,
  namespaced: true,
};
