<template lang="">
  <div class="infoRating__item item-infoRating">
    <div class="item-infoRating__value">{{ value }}</div>
    <div class="item-infoRating__star">
      <img src="@/images/product/right/onStar.png" alt="" />
    </div>
    <div ref="barRef" class="item-infoRating__barCover">
      <div
        :style="{ width: barWidth + 'px' }"
        class="item-infoRating__bar"
      ></div>
    </div>
    <div class="item-infoRating__count">
      {{ product.ratings.filter((e) => e.rate === value).length }}
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  props: {
    value: {
      type: Boolean,
      default: 1,
    },
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    return {
      barRef: ref(null),
    };
  },
  data() {
    return {
      load: false,
    };
  },
  computed: {
    barWidth() {
      if (!this.load) {
        return 0;
      } else {
        return (
          (this.product.ratings.filter((e) => e.rate === this.value).length /
            this.product.ratings.length) *
          this.barRef.offsetWidth
        );
      }
    },
  },
  mounted() {
    this.load = true;
  },
};
</script>
<style lang="scss">
.item-infoRating {
  display: flex;
  align-items: center;
  &__value {
    flex: 0 0 em(13);
    font-size: em(16);
    font-weight: 400;
    line-height: em(18, 16); /* 156.25% */
    letter-spacing: -0.32px;
    margin-right: em(13);
  }

  &__star {
    width: em(16);
    height: em(15);
    margin-right: em(21);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__barCover {
    width: em(239);
    background: #e0e0e0;
    height: 2px;
    margin-right: em(26);
  }

  &__bar {
    width: em(209);
    background: $hoverColor;
    height: 2px;
  }

  &__count {
    font-size: em(16);

    font-weight: 400;
    line-height: em(18, 16); /* 156.25% */
    letter-spacing: -0.32px;
  }

  &__averageValue {
    font-size: em(90);
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.8px;
    margin-bottom: em(15, 90);
  }

  &__rating {
  }
}
</style>
