<template lang="">
  <div
    v-if="productsLoad && loaded"
    :style="{ minHeight: navMenuRef?.offsetHeight + 30 + 'px' }"
    class="product-catalog__body"
  >
    <div v-if="loaded" class="product-catalog__grid" :class="{ active: nav }">
      <ItemVue
        v-for="product in products.responce"
        :key="product._id"
        :product="product"
        :in-loves="
          loves?.find((el) => el.product._id == product._id) ? true : false
        "
      />
    </div>
    <div class="Catalog__navigation navigation-catalog">
      <MyPaginationVue
        :length="Math.ceil(products.count / limit)"
        :visible="4"
        :pagination-class="'catalog'"
        :model-value="page"
        @update:model-value="(e) => setPage(e)"
      >
        <template #arrowLeft>
          <div class="navigation-catalog__arrow _left">
            <img src="@/images/catalog/arrow.png" alt="" />
          </div>
        </template>
        <template #arrowRight>
          <div class="navigation-catalog__arrow _right">
            <img src="@/images/catalog/arrow.png" alt="" />
          </div>
        </template>
      </MyPaginationVue>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import { getLoves } from '../../../../http/lovesApi';
import ItemVue from '../../../elements/Item.vue';
import MyPaginationVue from '../../../UI/MyPagination.vue';

export default {
  components: {
    ItemVue,
    MyPaginationVue,
  },

  computed: {
    ...mapState({
      products: (state) => state.product.products,
      productsLoad: (state) => state.product.productsLoad,
      updateLoading: (state) => state.product.updateLoading,
      lovesId: (state) => state.user.user.loves,
      page: (state) => state.product.page,
      navMenuRef: (state) => state.product.navMenuRef,
      limit: (state) => state.product.limit,
    }),
  },
  data() {
    return {
      loves: [],
      loaded: false,
    };
  },
  methods: {
    ...mapMutations({
      setProducts: 'product/setProducts',
      setPage: 'product/setPage',
    }),
  },

  mounted() {
    getLoves({ id: this.lovesId }).then((data) => {
      this.loves = data.lovesItems;
      this.loaded = true;
    });
  },
};
</script>
<style lang=""></style>
