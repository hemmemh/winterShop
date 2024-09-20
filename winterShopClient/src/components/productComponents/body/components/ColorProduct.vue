<template lang="">
  <div class="Product__color color-product">
    <p class="color-product__name">Цвет: {{ color }}</p>
    <div class="color-product__colors">
      <MyRadioVue
        v-for="(colorValue, colorName) in JSON.parse(product.colors)"
        :key="colorName"
        :radio-class="'productColor'"
        :model-value="color"
        :name="'d1'"
        :value="colorName"
        @update:model-value="(e) => setColor(e)"
      >
        <template #header>
          <div class="color-product__hexCover">
            <div
              :style="`background-color:${colorValue}`"
              class="color-product__hex"
            ></div>
          </div>
        </template>
      </MyRadioVue>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import MyRadioVue from '../../../UI/MyRadio.vue';

export default {
  components: {
    MyRadioVue,
  },
  computed: {
    ...mapState({
      color: (state) => state.productItem.color,
      product: (state) => state.productItem.product,
    }),
  },
  methods: {
    ...mapMutations({
      setColor: 'productItem/setColor',
    }),
  },
};
</script>
<style lang="scss">
.color-product {
  margin-top: em(25);
  @media (max-width: $mobile) {
    margin-top: em(15);
  }
  &__name {
    color: $mainColor;
    font-size: em(14);
    font-weight: 400;
    line-height: em(25, 14); /* 178.571% */
    letter-spacing: -0.28px;
    margin-bottom: em(20);
    @media (max-width: $mobile) {
      font-size: em(18);
    }
  }

  &__colors {
    display: flex;
    gap: em(15);
    flex-wrap: wrap;
  }
}
</style>
