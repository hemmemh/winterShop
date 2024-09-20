<template lang="">
  <section
    v-if="loaded"
    ref="ratingRef"
    class="Product__ratings ratings-product"
  >
    <div class="ratings-product__title">
      Отзывы о товаре <span>{{ product.ratings.length }}</span>
    </div>
    <div class="ratings-product__body">
      <LeftRatingsVue :product="product" />
      <RightRatingsVue :product="product" />
    </div>
  </section>
</template>
<script>
import { API_URL } from '@/utils/config';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { mapState } from 'vuex';
import LeftRatingsVue from '../ratings/components/LeftRatings.vue';
import RightRatingsVue from './components/RightRatings.vue';

export default {
  components: {
    LeftRatingsVue,
    RightRatingsVue,
  },
  setup() {
    return {
      ratingRef: ref(null),
      route: useRoute(),
    };
  },
  computed: {
    productRating() {
      return (
        Math.round(
          this.product.ratings.reduce((a, b) => {
            return a + b.rate;
          }, 0) / this.product.ratings.length
        ) || 0
      );
    },
    ratingsValues() {
      return this.product.ratings.slice(
        this.page * this.limit - this.limit,
        this.page * this.limit
      );
    },
    ratingPages() {
      return Math.ceil(this.product.ratings.length / this.limit);
    },

    ...mapState({
      count: (state) => state.basket.count,
      product: (state) => state.productItem.product,
      loaded: (state) => state.productItem.loaded,
      page: (state) => state.productItem.page,
    }),
  },
  data() {
    return {
      API_URL: API_URL,
      page: 1,
      text: '',
      limit: 2,
      rating: 1,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.ratings-product {
  margin-top: em(85);
  @media (max-width: $mobile) {
    margin-top: em(30);
  }
  &__body {
    @media (max-width: $pc + px) {
      font-size: 14px;
      gap: em(0);
    }
    @media (max-width: $tablet) {
      flex-direction: column-reverse;
    }
    display: flex;
  }
  &__left {
    flex: 1 1 auto;
  }
  &__right {
    flex: 0 0 em(420);
    display: flex;
    justify-content: flex-end;
    @media (max-width: $tablet) {
      justify-content: center;
    }
  }
  &__title {
    font-size: em(21);
    font-weight: 500;
    line-height: em(35, 21); /* 166.667% */
    letter-spacing: -0.42px;
    display: flex;
    gap: em(15);
    span {
      color: #828b8d;
    }
    margin-bottom: em(30);
  }

  &__form {
    margin-bottom: em(50);
  }
  &__ratingsBody {
    display: flex;
    flex-direction: column;
    gap: em(55);
    margin-bottom: em(75);
    @media (max-width: $mobile) {
      gap: em(20);
      margin-bottom: em(30);
    }
  }
  &__pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
