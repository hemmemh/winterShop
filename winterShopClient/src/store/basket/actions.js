import { getBasket } from '@/http/basketApi';
import { addProductInLoves, removeProductFromLoves } from '@/http/lovesApi';

export const basketActions = {
  async setBasket({ commit, state }, userId) {
    try {
      commit('setTotalSum', 0);
      const data = await getBasket({ id: userId });
      if (data.basketItems.length == 0) commit('setView');
      commit('setCount', data.basketItems.length);
      data.basketItems.forEach((item) => {
        commit('setTotalSum', state.totalSum + item.count * item.product.price);
      });
      return data.basketItems;
    } catch (error) {
      console.log(error);
    }
  },

  async addLoves({ commit, state }, payload) {
    try {
      if (payload.inLovesData) {
        await removeProductFromLoves({
          id: payload.id,
          lovesId: payload.lovesId,
        });
        payload.inLovesData = false;
        commit('setLoves', state.loves - 1);
      } else {
        await addProductInLoves({
          lovesId: payload.lovesId,
          product: payload.id,
        });
        payload.inLovesData = true;
        commit('setLoves', state.loves + 1);
      }

      return payload.inLovesData;
    } catch (error) {
      console.log(error);
    }
  },
};
