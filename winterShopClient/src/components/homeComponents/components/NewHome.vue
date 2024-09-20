<template lang="">
  <section v-if="loaded" class="Home__new new-home">
    <div class="new-home__container">
      <div class="new-home__body">
        <h2 class="new-home__title title-home">Новинки</h2>
        <div class="new-home__products">
          <swiper
            :navigation="{
              prevEl: newLeft,
              nextEl: newRight,
            }"
            :slides-per-view="1.7"
            :space-between="10"
            :breakpoints="breakpoints"
            :modules="modules"
            class="newSliderWraper-home"
          >
            <swiper-slide
              v-for="product in products.responce"
              :key="product._id"
            >
              <ItemVue
                :product="product"
                :in-loves="
                  loves?.find((el) => el.product._id == product._id)
                    ? true
                    : false
                "
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="new-home__navigation navigation-newSlider">
          <div
            ref="newLeft"
            class="navigation-newSlider__arrow _left _icon-arrow"
          ></div>
          <div
            ref="newRight"
            class="navigation-newSlider__arrow _right _icon-arrow"
          ></div>
        </div>
      </div>
    </div>
  </section>
  <Loader />
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import ItemVue from '../../elements/Item.vue';
import { getAllproduct } from '../../../http/productApi';
import { getLoves } from '@/http/lovesApi';
import store from '@/store';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ItemVue,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
      newRight: ref(null),
      newLeft: ref(null),
    };
  },
  data() {
    return {
      products: [],
      loves: [],
      loaded: false,
      breakpoints: {
        479.98: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
    };
  },
  mounted() {
    getAllproduct().then((data) => {
      this.products = data;
    });
    getLoves({ id: store.state.user.user.loves }).then((data) => {
      this.loves = data.lovesItems;
      this.loaded = true;
    });
  },
};
</script>
<style lang="scss">
.new-home {
  position: relative;
  margin-top: rem(100);
  @media (max-width: $mobile) {
    margin-top: rem(20);
  }

  &__body {
    position: relative;
  }

  &__title {
    margin-bottom: rem(48);
    @media (max-width: $mobile) {
      margin-bottom: rem(20);
    }
  }
}
.title-home {
  color: #000;
  font-size: rem(32);
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  text-align: center;
}

.navigation-newSlider {
  @media (max-width: $mobile) {
    display: none;
  }
  pointer-events: none;
  z-index: 2;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__arrow {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &.swiper-button-disabled {
      transition: all 0.3s ease 0s;

      &::before {
        color: rgba($color: #000000, $alpha: 0.4);
      }
    }
    pointer-events: visible;
    display: flex;
    align-items: center;
    justify-content: center;

    height: rem(32);
    width: rem(32);
    @media (max-width: $tablet) {
      height: rem(32);
      width: rem(32);
    }
    @media (max-width: $mobile) {
      height: rem(40);
      width: rem(20);
    }

    &._left {
      transform: translate(-100%, 0);
      @media (max-width: rem(1440)) {
        transform: translate(0, 0);
      }
    }
    &._right {
      transform: rotate(180deg) translate(-100%, 0);
      @media (max-width: rem(1440)) {
        transform: rotate(180deg) translate(0, 0);
      }
    }
    &::before {
      transition: all 0.3s ease 0s;
      font-size: rem(40);
      color: #000;
      @media (max-width: $mobile) {
        font-size: rem(30);
      }
    }
  }
}
</style>
