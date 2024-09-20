<template lang="">
  <div class="ratings-product__right">
    <div class="ratings-product__infoRating infoRating">
      <div class="infoRating__body">
        <RatingBarVue :value="5" :product="product" />
        <RatingBarVue :value="4" :product="product" />
        <RatingBarVue :value="3" :product="product" />
        <RatingBarVue :value="2" :product="product" />
        <RatingBarVue :value="1" :product="product" />
      </div>
      <div class="infoRating__bottom">
        <div class="infoRating__average">Средняя оценка</div>
        <div class="item-infoRating__averageValue">{{ productRating }}</div>
        <div class="item-infoRating__rating">
          <Rating v-model="productRating" :cancel="false" readonly>
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
      </div>
    </div>
  </div>
</template>
<script>
import Rating from 'primevue/rating';
import RatingBarVue from '../../../elements/RatingBar.vue';

export default {
  components: {
    RatingBarVue,
    Rating,
  },
  props: {
    product: {
      type: Object,
    },
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
  },
};
</script>
<style lang="scss">
.infoRating {
  display: inline-flex;
  flex-direction: column;
  &__body {
    margin-bottom: em(30);
    display: flex;
    flex-direction: column;
    gap: em(15);
  }

  &__item {
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__average {
  }
}
</style>
