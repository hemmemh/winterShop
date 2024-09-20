export const basketMutations = {
  setCount(state, count) {
    state.count = count;
  },
  setTotalSum(state, totalSum) {
    state.totalSum = totalSum;
  },
  setView(state) {
    state.view = false;
  },
  setLoves(state, loves) {
    state.loves = loves;
  },
  setBasket(state, basket) {
    state.basket = basket;
  },
  setInBasket(state, inBasket) {
    state.inBasket = inBasket;
  },
};
