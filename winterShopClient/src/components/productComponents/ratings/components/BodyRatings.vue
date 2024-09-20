<template lang="">
  <div class="ratings-product__ratingsBody">
    <div
      v-for="rating in ratingsValues"
      :key="rating._id"
      class="ratings-product__userRating userRating"
    >
      <div class="userRating__left">
        <div class="userRating__rate">
          <Rating :cancel="false" :model-value="rating.rate">
            <template #onicon>
              <img
                src="@/images/product/right/onStar.png"
                height="24"
                width="24"
              />
            </template>
            <template #officon>
              <img
                src="@/images/product/right/offStar.png"
                height="24"
                width="24"
              />
            </template>
          </Rating>
        </div>
        <div class="userRating__date">{{ rating.date }}</div>
      </div>
      <div class="userRating__right">
        <h3 class="userRating__name">
          {{ rating.name }} {{ rating.sername[0] || '' }}
        </h3>
        <p class="userRating__text">{{ rating.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Rating from 'primevue/rating';
import { mapState } from 'vuex';

export default {
  components: {
    Rating,
  },
  computed: {
    ratingsValues() {
      return this.product.ratings.slice(
        this.page * this.limit - this.limit,
        this.page * this.limit
      );
    },
    ...mapState({
      product: (state) => state.productItem.product,
      page: (state) => state.productItem.page,
      limit: (state) => state.productItem.limit,
    }),
  },
};
</script>
<style lang="scss">
.userRating {
  display: flex;
  gap: em(70);
  @media (max-width: $mobile) {
    flex-direction: column;
    gap: em(10);
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(130, 139, 141, 0.3);
  }
  &__left {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: em(20);
    @media (max-width: $mobile) {
      gap: em(10);
    }
  }

  &__rate {
    @media (max-width: $mobile) {
      img {
        width: 15px;
        height: 15px;
      }
    }
  }

  &__date {
    color: #bdbdbd;
    font-size: em(14);
    font-style: normal;
    font-weight: 400;
    line-height: em(25, 14); /* 178.571% */
    letter-spacing: -0.28px;
  }

  &__right {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__name {
    font-size: em(14);
    font-weight: 600;
    line-height: em(24, 14); /* 178.571% */
    letter-spacing: -0.28px;
  }

  &__text {
    font-size: em(14);
    font-style: normal;
    font-weight: 400;
    line-height: em(25, 14); /* 178.571% */
    letter-spacing: -0.28px;
  }
}
</style>
