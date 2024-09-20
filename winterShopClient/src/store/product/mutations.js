export const productMutations = {
  setType(state, type) {
    state.type = type;
  },
  setProducts(state, products) {
    state.products = products;
  },
  setProduct(state, product) {
    state.product = product;
  },
  setNav(state, nav) {
    state.nav = nav;
  },
  setSort(state, sort) {
    state.sort = sort;
  },
  setPrice(state, price) {
    state.price = price;
  },
  setPriceOne(state, price) {
    state.price[0] = price;
  },
  setPriceTwo(state, price) {
    state.price[1] = price;
  },
  setMinPriceEnd(state, minPriceEnd) {
    state.minPriceEnd = minPriceEnd;
  },
  setMaxPriceEnd(state, maxPriceEnd) {
    state.maxPriceEnd = maxPriceEnd;
  },
  setMinPrice(state, minPrice) {
    state.minPrice = minPrice;
  },
  setMaxPrice(state, maxPrice) {
    state.maxPrice = maxPrice;
  },
  setColors(state, colors) {
    state.colors = colors;
  },
  setColorsActive(state, colorsActive) {
    state.colorsActive = colorsActive;
  },
  setPage(state, page) {
    state.updateLoading = true;
    state.page = page;
  },
  setBrands(state, brands) {
    state.brands = brands;
  },
  setBrand(state, brand) {
    state.brand = brand;
  },
  setSizes(state, sizes) {
    state.sizes = sizes;
  },
  setSizesActive(state, sizesActive) {
    state.sizesActive = sizesActive;
  },
  setProductsLoad(state, productsLoad) {
    state.productsLoad = productsLoad;
  },
  setSearchEnd(state, searchEnd) {
    state.searchEnd = searchEnd;
  },
  setTimer(state, timer) {
    state.timer = timer;
  },
  setNavMenuRef(state, navMenuRef) {
    state.navMenuRef = navMenuRef;
  },
  setSearch(state, search) {
    state.search = search;
  },
  setUpdateLoading(state, updateLoading) {
    state.updateLoading = updateLoading;
  },
};
