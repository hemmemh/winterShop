<template lang="">
  <div class="Product__left">
    <div class="Product__images images-product">
      <div class="images-product__carousel">
        <swiper
          :space-between="10"
          :slides-per-view="5"
          :modules="modules"
          :scrollbar="{
            hide: false,
          }"
          :direction="'vertical'"
          class="imagesProduct-carousel"
          @swiper="setThumbsSwiper"
        >
          <swiper-slide
            v-for="image in JSON.parse(product.images)"
            :key="image"
          >
            <div class="images-product__slide">
              <div class="images-product__slideCover">
                <img :src="`${API_URL}/${product.name}/${image}`" alt="" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="imagesProduct__sliderBody">
        <swiper
          :slides-per-view="1"
          :thumbs="{ swiper: thumbsSwiper.value }"
          :modules="modules"
          class="imagesProduct-slider"
        >
          <swiper-slide
            v-for="image in JSON.parse(product.images)"
            :key="image"
          >
            <div class="images-product__slide">
              <div class="images-product__slideCover">
                <img :src="`${API_URL}/${product.name}/${image}`" alt="" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="Product__info info-product">
      <h3 class="info-product__name">Описание</h3>
      <p class="info-product__text">{{ product.description }}</p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';
import { API_URL } from '../../../../utils/config';
import { mapState } from 'vuex';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState({
      product: (state) => state.productItem.product,
    }),
  },
  setup() {
    return {
      modules: [Thumbs, Scrollbar],
      thumbsSwiper: ref({}),
    };
  },
  data() {
    return {
      API_URL: API_URL,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper.value = swiper;
    },
  },
};
</script>
<style lang="scss">
.images-product {
  position: relative;
  display: flex;

  @media (max-width: $tablet) {
    gap: em(0);
  }
  &__cover {
    position: relative;
    flex: 1 1 auto;
  }
  &__absolute {
  }
  &__slide {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__slideCover {
    box-sizing: border-box;
  }
}
.imagesProduct-carousel {
  @include adaptiveValue('font-size', 16, 9, $containerWidth, 991.98);
  @media (max-width: $tablet) {
    @include adaptiveValue('font-size', 18, 8.5, 991.98, 479);
  }
  @media (max-width: $mobileSmall) {
    display: none;
  }
  height: em(705);
  width: em(152);
  .swiper-slide {
    cursor: pointer;
    box-sizing: border-box;
    width: em(118);
    border: 1px solid var(--Grey, #fff);
    &-thumb-active {
      box-sizing: border-box;
      border: 1px solid var(--Grey, #ced4d7);
      background: var(--Light-Grey, #f9f9f9);
    }
  }
  .images-product__slideCover {
    width: 87/118 * 100%;
  }
  .images-product__slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-scrollbar {
    border-radius: 0px;
    width: em(6);
    .swiper-scrollbar-drag {
      background: $hoverColor;
      border-radius: 0px;
    }
  }
}
.imagesProduct-slider {
  cursor: pointer;
  .swiper-wrapper {
    width: 100%;
  }
  .images-product__slideCover {
    padding: 0 0 100% 0;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
}

.imagesProduct__sliderBody {
  min-width: 0px;
  width: 100%;
  flex: 0 1 auto;
}

.info-product {
  margin-top: em(50);
  @media (max-width: $mobile) {
    margin-top: em(20);
  }
  &__name {
    color: $mainColor;

    font-size: em(21);
    font-style: normal;
    font-weight: 500;
    line-height: em(35, 21); /* 166.667% */
    letter-spacing: -0.42px;
  }

  &__text {
    color: $mainColor;
    font-size: em(16);
    font-weight: 400;
    line-height: em(30, 16); /* 187.5% */
    letter-spacing: -0.32px;
  }
}
</style>
