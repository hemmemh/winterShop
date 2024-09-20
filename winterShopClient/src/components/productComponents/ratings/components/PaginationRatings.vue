<template lang="">
  <div class="ratings-product__pagination">
    <MyPaginationVue
      :length="ratingPages"
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
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import MyPaginationVue from '../../../UI/MyPagination.vue';

export default {
  components: {
    MyPaginationVue,
  },
  methods: {
    ...mapMutations({
      setPage: 'productItem/setPage',
    }),
  },
  computed: {
    ratingPages() {
      if (this.product.ratings.length) {
        return Math.ceil(this.product.ratings.length / this.limit);
      } else {
        return 1;
      }
    },
    ...mapState({
      page: (state) => state.productItem.page,
      limit: (state) => state.productItem.limit,
      product: (state) => state.productItem.product,
    }),
  },
};
</script>
<style lang=""></style>
