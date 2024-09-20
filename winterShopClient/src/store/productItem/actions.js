import {
  addItemToBasket,
  getBasket,
  removeItemFromBasket,
} from '@/http/basketApi';
import { addRaiting, getOneproduct } from '@/http/productApi';

export const productItemActions = {
  async getProduct({ commit }, payload) {
    commit('basket/setInBasket', false, { root: true });
    try {
      const data = await getOneproduct({ id: payload.id });
      commit('setProduct', data);
      commit('setColors', JSON.parse(data.colors));
      commit('setColor', Object.keys(JSON.parse(data.colors))[0]);
      commit('setSize', JSON.parse(data.sizes)[0]);
      commit(
        'setProductRating',
        data.ratings.reduce((a, b) => {
          return a + b.rate;
        }, 0) / data.ratings.length
      );

      const basket = await getBasket({ id: payload.userId });
      commit('basket/setBasket', basket.basketItems, { root: true });

      if (basket.basketItems.find((el) => el.product._id == payload.id)) {
        commit('basket/setInBasket', true, { root: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      commit('setLoaded', true);
    }
  },

  async setToBasket({ commit, state, rootState }, payload) {
    try {
      if (!rootState.basket.inBasket) {
        await addItemToBasket({
          basketId: payload.basketId,
          product: payload.id,
          count: 1,
          size: state.size,
          color: state.color,
        });
        commit('basket/setInBasket', true, { root: true });
        commit('basket/setCount', rootState.basket.count + 1, { root: true });
      } else {
        await removeItemFromBasket({
          id: payload.id,
          basketId: payload.basketId,
        });
        commit('basket/setInBasket', false, { root: true });
        commit('basket/setCount', rootState.basket.count - 1, { root: true });
      }
    } catch (error) {
      console.log(error);
    }
  },

  async addRatingToProduct({ state }, payload) {
    try {
      const data = await addRaiting({
        user: payload.user.id,
        rate: payload.rating,
        product: payload.id,
        name: payload.user.name,
        sername: payload.user.sername,
        text: payload.text,
      });
      state.product.ratings.push(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
};
