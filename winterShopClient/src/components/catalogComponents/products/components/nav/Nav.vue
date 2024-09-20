<template lang="">
  <div
    ref="navMenuRef"
    class="product-catalog__nav nav-productCatalog"
    :class="{ active: !nav }"
  >
    <ItemNav name="Бренд">
      <MyRadioVue
        :radio-class="'navMenu'"
        :model-value="brand"
        :name="'d1'"
        :value="false"
        @update:model-value="(e) => onSetBrand(e)"
      >
        <template #header><div class="radio__button"></div></template>
        <div class="radio__item">Все бренды</div>
      </MyRadioVue>
      <MyRadioVue
        v-for="brandItem in brands"
        :key="brandItem._id"
        :radio-class="'navMenu'"
        :model-value="brand"
        :name="'d1'"
        :value="brandItem._id"
        @update:model-value="(e) => onSetBrand(e)"
      >
        <template #header><div class="radio__button"></div></template>
        <div class="radio__item">{{ brandItem.name }}</div>
      </MyRadioVue>
    </ItemNav>
    <ItemNav name="Размер">
      <MyCheckBoxVue
        v-for="size in sizes"
        :key="size"
        :check-box-class="'navMenus'"
        :model-value="sizesActive"
        :value="size"
        :name="'d1'"
        @update:model-value="(e) => onSetSizesActive(e)"
      >
        <template #header>
          <div class="checkbox__button">
            <img src="@/images/catalog/check.png" alt="" />
          </div>
        </template>
        <div class="checkbox__item">{{ size[0] }}</div>
      </MyCheckBoxVue>
    </ItemNav>
    <ItemNav name="Цена">
      <div class="nav-productCatalog__numbers">
        <MyNumberVue
          :id="'aaw'"
          :min="minPrice"
          :max="price[1]"
          :model-value="price[0]"
          :number-class="'navMenu'"
          @update:model-value="(e) => priceOne(e)"
        />
        <span></span>
        <MyNumberVue
          :id="'aaw2'"
          :min="price[0]"
          :max="maxPrice"
          :model-value="price[1]"
          :number-class="'navMenu'"
          @update:model-value="(e) => priceTwo(e)"
        />
      </div>
      <v-range-slider
        v-model="price"
        :min="minPrice"
        :max="maxPrice"
        strict
        track-size="5"
        tick-size="1"
        step="1"
        thumb-size="25"
        @end="endRange"
        @update:model-value="(e) => setPrice(e)"
      ></v-range-slider>
    </ItemNav>
    <ItemNav name="Цвет">
      <MyCheckBoxVue
        v-for="color in colors"
        :key="color[1]"
        :check-box-class="'navMenu'"
        :model-value="colorsActive"
        :value="color"
        :name="'d3'"
        :checked="false"
        @update:model-value="(e) => onSetColorsActive(e)"
      >
        <template #header
          ><div class="checkbox__button">
            <img src="@/images/catalog/check.png" alt="" /></div
        ></template>
        <div class="checkbox__color color-checkbox">
          <div
            :style="`background-color:${color[1]}`"
            class="color-checkbox__hex"
          ></div>
          <div class="color-checkbox__name">{{ color[0] }}</div>
        </div>
      </MyCheckBoxVue>
    </ItemNav>
  </div>
</template>
<script>
import { ref } from 'vue';
import MyRadioVue from '@/components/UI/MyRadio.vue';
import MyCheckBoxVue from '@/components/UI/MyCheckBox.vue';
import MyNumberVue from '@/components/UI/MyNumber.vue';
import { mapState, mapMutations } from 'vuex';
import ItemNav from './ItemNav.vue';

export default {
  components: {
    MyRadioVue,
    MyCheckBoxVue,
    MyNumberVue,
    ItemNav,
  },

  setup() {
    return {
      navMenuRef: ref(null),
    };
  },

  mounted() {
    this.setNavMenuRef(this.navMenuRef);
  },

  computed: {
    ...mapState({
      nav: (state) => state.product.nav,
      brand: (state) => state.product.brand,
      brands: (state) => state.product.brands,
      sizesActive: (state) => state.product.sizesActive,
      colorsActive: (state) => state.product.colorsActive,
      price: (state) => state.product.price,
      minPrice: (state) => state.product.minPrice,
      maxPrice: (state) => state.product.maxPrice,
      colors: (state) => state.product.colors,
      color: (state) => state.product.color,
      sizes: (state) => state.product.sizes,
      size: (state) => state.product.size,
      minPriceEnd: (state) => state.product.minPriceEnd,
      maxPriceEnd: (state) => state.product.maxPriceEnd,
    }),
  },

  methods: {
    ...mapMutations({
      setBrand: 'product/setBrand',
      setSizesActive: 'product/setSizesActive',
      setPriceOne: 'product/setPriceOne',
      setPrice: 'product/setPrice',
      setPage: 'product/setPage',
      setPriceTwo: 'product/setPriceTwo',
      setMinPriceEnd: 'product/setMinPriceEnd',
      setMaxPriceEnd: 'product/setMaxPriceEnd',
      setColorsActive: 'product/setColorsActive',
      setNavMenuRef: 'product/setNavMenuRef',
    }),

    endRange(e) {
      this.setMinPriceEnd(e[0]);
      this.setMaxPriceEnd(e[1]);
      const searchParams = new URLSearchParams(this.$route.query);
      searchParams.set('minPriceEnd', e[0]);
      searchParams.set('maxPriceEnd', e[1]);
      searchParams.set('page', 1);
      this.setPage(1);
      this.$router.push({
        path: this.$route.path,
        query: { ...Object.fromEntries(searchParams.entries()) },
      });
    },

    priceOne(e) {
      this.setPriceOne(e);
      this.setMinPriceEnd(e);
      const searchParams = new URLSearchParams(this.$route.query);
      searchParams.set('minPriceEnd', e);
      searchParams.set('page', 1);
      this.setPage(1);
      this.$router.push({
        path: this.$route.path,
        query: { ...Object.fromEntries(searchParams.entries()) },
      });
    },

    priceTwo(e) {
      this.setPriceTwo(e);
      this.setMaxPriceEnd(e);

      const searchParams = new URLSearchParams(this.$route.query);
      searchParams.set('maxPriceEnd', e);
      searchParams.set('page', 1);
      this.setPage(1);
      this.$router.push({
        path: this.$route.path,
        query: { ...Object.fromEntries(searchParams.entries()) },
      });
    },

    onSetBrand(e) {
      console.log('eee', e);

      const searchParams = new URLSearchParams(this.$route.query);
      searchParams.set('brand', e);
      searchParams.set('page', 1);
      this.setPage(1);
      this.$router.push({
        path: this.$route.path,
        query: { ...Object.fromEntries(searchParams.entries()) },
      });
      this.setBrand(e);
    },

    onSetSizesActive(e) {
      this.setSizesActive(e);
      const searchParams = new URLSearchParams(this.$route.query);
      searchParams.set('sizesActive', JSON.stringify(e));
      searchParams.set('page', 1);
      this.setPage(1);
      this.$router.push({
        path: this.$route.path,
        query: { ...Object.fromEntries(searchParams.entries()) },
      });
    },

    onSetColorsActive(e) {
      this.setColorsActive(e);
      const searchParams = new URLSearchParams(this.$route.query);
      searchParams.set('colorsActive', JSON.stringify(e));
      searchParams.set('page', 1);
      this.setPage(1);
      this.$router.push({
        path: this.$route.path,
        query: { ...Object.fromEntries(searchParams.entries()) },
      });
    },
  },
};
</script>
<style lang="scss">
.nav-productCatalog {
  box-sizing: border-box;
  padding: em(10);
  font-size: 16px;
  position: absolute;

  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: $tablet) {
    font-size: 14px;
  }
  @media (max-width: $mobile) {
    width: 200px;
    font-size: 10px;
  }
  @media (max-width: $mobileSmall) {
    font-size: 11px;
    width: 160px;
  }

  display: flex;
  flex-direction: column;
  gap: em(37);
  z-index: 4;
  width: 321px;
  top: 0px;
  transition: transform 0.3s ease 0s;
  background: #fff;

  &.active {
    transition: transform 0.3s ease 0s;

    transform: translate(0, -110%);
  }

  &__item {
  }
  &__numbers {
    margin-bottom: em(20);
    display: flex;
    align-items: center;
    gap: em(20);
    span {
      width: 12px;
      flex: 0 0 12px;
      height: 1px;
      background: #bdbdbd;
      display: flex;
      align-items: center;
    }
  }
  &__group {
    display: flex;
    flex-direction: column;
    gap: em(10);
  }
  &__name {
    font-size: em(16);
    font-weight: 600;
    line-height: em(25, 16); /* 156.25% */
    letter-spacing: -0.32px;
    margin-bottom: em(18, 16);
  }
  &__slider {
  }
}

.v-slider__container {
  .v-slider-track__background {
    background: #e0e0e0;
    border-radius: 0px;
  }
}
.v-slider-track {
  height: 5px !important;
}
.v-slider-track__fill {
  background: #eb5757 !important;
}
.v-slider-thumb__surface {
  box-sizing: border-box;
  background: #fff !important;
  border: 4px solid #eb5757;
  @media (max-width: $mobile) {
    width: em(20) !important;
    height: em(20) !important;
  }
}
.v-slider-thumb__ripple {
  @media (max-width: $mobile) {
    width: em(20) !important;
    height: em(20) !important;
  }
}
</style>
