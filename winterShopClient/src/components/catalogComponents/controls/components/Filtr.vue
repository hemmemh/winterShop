<template lang="">
  <div
    class="controls-catalog__filtr _icon-arrow"
    :class="{ active: nav }"
    @click="setNav(!nav)"
  >
    показать фильтры
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Filtr',
  computed: {
    ...mapState({
      nav: (state) => state.product.nav,
    }),
  },
  methods: {
    ...mapMutations({
      setNav: 'product/setNav',
    }),
  },
};
</script>

<style lang="scss">
.controls-catalog__filtr {
  box-sizing: border-box;
  &::before {
    font-size: em(24);
    transform: rotate(-90deg) translate(0, 15%);
    line-height: em(20, 24); /* 166.667% */
    transition: all 0.3s ease 0s;
    transform-origin: center;
  }
  &.active {
    &::before {
      font-size: em(24);
      transform: rotate(90deg) translate(0, 15%);
      line-height: em(20, 24); /* 166.667% */
      transform-origin: center;
    }
  }
  cursor: pointer;
  font-size: em(12);
  border-radius: 4px;
  background: #f9f9f9;
  padding: em(12, 12) em(20, 12);
  display: flex;
  gap: em(20, 12);
  width: 321px;
  @media (max-width: $mobile) {
    width: 200px;
  }
  @media (max-width: $mobileSmall) {
    width: 160px;
  }
  font-style: normal;
  font-weight: 600;
  line-height: em(20, 12); /* 166.667% */
  letter-spacing: -0.24px;
  text-transform: uppercase;
}
</style>
