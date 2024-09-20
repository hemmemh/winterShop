import { getAllBrands } from '@/http/brandsApi';
import { getAllproduct } from '@/http/productApi';
import { getOneType } from '@/http/typesApi';

export const productActions = {
  async getProducts({ commit }, payload) {
    try {
      const data = await getAllproduct(...payload);
      const brands = await getAllBrands(data._id);
      commit('setBrands', brands);
      commit('setProducts', data);

      let min = data.responceAll[0].price;
      let max = data.responceAll[0].price;
      let colors = {};
      let sizes = [];

      data.responceAll.forEach((el) => {
        min = Math.min(min, el.price);
        max = Math.max(max, el.price);
        sizes = [...sizes, ...JSON.parse(el.sizes)];
        colors = { ...colors, ...JSON.parse(el.colors) };
      });

      if (min === max) max = min + 1;

      const colorsSet = new Set(Object.values(colors));

      commit('setSizes', Array.from(new Set(sizes)));
      commit('setType', payload[0]);
      commit('setSizesActive', payload[5]);
      commit('setColorsActive', payload[9]);
      commit('setBrand', payload[4]);
      commit('setSort', JSON.parse(payload[10]));
      commit(
        'setColors',
        Object.entries(colors).filter((el) => colorsSet.has(el[1]))
      );
      commit('setPriceOne', min);
      commit('setPriceTwo', max);
      commit('setMinPriceEnd', min);
      commit('setMaxPriceEnd', max);
      commit('setMinPrice', min);
      commit('setMaxPrice', max);
      commit('setProductsLoad', true);
    } catch (error) {
      console.log(error);
    }
  },

  async getProductsByType({ state, commit }, typeId) {
    try {
      commit('setUpdateLoading', false);
      const type = await getOneType({ id: typeId });
      commit('setType', type);
      const data = await getAllproduct(
        typeId,
        1,
        this.limit,
        '',
        null,
        null,
        null,
        null,
        null,
        null,
        state.sort
      );
      commit('setSizesActive', []);
      commit('setColorsActive', []);
      commit('setBrand', false);
      commit('setProducts', data);
      commit('setPage', 1);

      let min = data.responceAll[0].price;
      let max = data.responceAll[0].price;
      let colors = {};
      let sizes = [];

      data.responceAll.forEach((el) => {
        min = Math.min(min, el.price);
        max = Math.max(max, el.price);
        sizes = [...sizes, ...JSON.parse(el.sizes)];
        colors = { ...colors, ...JSON.parse(el.colors) };
      });

      const colorsSet = new Set(Object.values(colors));

      if (min == max) {
        max = min + 1;
      }

      commit('setSizes', Array.from(new Set(sizes)));
      commit(
        'setColors',
        Object.entries(colors).filter((el) => colorsSet.has(el[1]))
      );
      commit('setPriceOne', min);
      commit('setPriceTwo', max);
      commit('setMinPriceEnd', min);
      commit('setMaxPriceEnd', max);
      commit('setMinPrice', min);
      commit('setMaxPrice', max);
      commit('setProductsLoad', true);
    } catch (error) {
      console.log(error);
    }
  },

  async getBrands({ commit }, typeId = null) {
    try {
      const brands = await getAllBrands(typeId);
      commit('setBrands', brands);
    } catch (error) {
      console.log(error);
    }
  },

  async getProductsByParams({ commit }, payload) {
    console.log(commit);
    try {
      commit('setUpdateLoading', false);

      const products = await getAllproduct(...payload);

      commit('setProducts', products);
    } catch (error) {
      console.log(error);
    }
  },

  async updateSearch({ state, commit }, e) {
    clearTimeout(state.timer);
    this.timer = setTimeout(() => {
      commit('setSearchEnd', e);
    }, 500);
  },
};
