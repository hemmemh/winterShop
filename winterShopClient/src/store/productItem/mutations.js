export const productItemMutations = {
  setProduct(state, product) {
    state.product = product;
  },
  setColors(state, colors) {
    state.colors = colors;
  },
  setColor(state, color) {
    state.color = color;
  },
  setSizes(state, sizes) {
    state.sizes = sizes;
  },
  setSize(state, size) {
    state.size = size;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  },
  setProductRating(state, productRating) {
    state.productRating = productRating;
  },
  setPage(state, page) {
    state.page = page;
  },
};
