<template lang="">
  <section class="Catalog__type types-catalog">
    <div class="types-catalog__container">
      <div class="types-catalog__body">
        <swiper
          :slides-per-view="4"
          :space-between="20"
          :autoplay="autoplay"
          :modules="modules"
          :breakpoints="breakpoints"
          class="types-catalog__sliders"
        >
          <swiper-slide v-for="el in types" :key="el._id">
            <SlideTypeVue :el="el" />
          </swiper-slide>
        </swiper>
        <NavigationTypeVue />
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import { ref } from 'vue';
import SlideTypeVue from './components/SlideType.vue';
import { getAllTypes } from '../../../http/typesApi';
import NavigationTypeVue from './components/NavigationType.vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
    SlideTypeVue,
    NavigationTypeVue,
  },

  setup() {
    return {
      modules: [Navigation, Autoplay],
      typesLeft: ref(null),
      typesRight: ref(null),
      breakpoints: {
        640: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 9,
          spaceBetween: 28,
        },
      },
      autoplay: {
        delay: 2500,
        stopOnLastSlide: true,
        pauseOnMouseEnter: true,
      },
    };
  },

  data() {
    return {
      types: [],
    };
  },

  mounted() {
    getAllTypes().then((data) => {
      this.types = data;
    });
  },
};
</script>
<style lang="scss">
.types-catalog {
  margin-top: em(50);
  @media (max-width: $mobile) {
    margin-top: em(20);
    font-size: 14px;
  }
  &__container {
  }

  &__body {
    position: relative;
  }

  &__sliders {
  }

  &__slider {
  }

  &__navigation {
  }
  .swiper-slide {
    overflow: visible;
  }

  .navigation-mainSlider {
    @media (max-width: 1512px) {
      display: none;
    }
    pointer-events: none;
    z-index: 2;
    position: absolute;
    width: 100%;
    top: 40%;
    left: 0;
    transform: translate(0, -50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: $mobile) {
      display: none;
    }
    &__arrow {
      transition: all 0.3s ease 0s;
      overflow: hidden;
      &.swiper-button-disabled {
        transition: all 0.3s ease 0s;
        background: rgba($color: #1e1e1e, $alpha: 0.3);
        &::before {
          color: #fff;
        }
      }
      pointer-events: visible;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: rgba($color: #fff, $alpha: 0.9);
      height: rem(32);
      width: rem(54);

      &._left {
        transform: translate(-100%, 0);

        @media (max-width: rem($maxWidthContainer)) {
        }
      }
      &._right {
        transform: rotate(180deg) translate(-100%, 0);
        @media (max-width: rem($maxWidthContainer)) {
          margin-right: 20px;
        }
      }
      &::before {
        transition: all 0.3s ease 0s;
        font-size: rem(40);
        @media (max-width: $mobile) {
          font-size: rem(30);
        }
      }
    }
  }
}
.slider-typesCatalog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: em(10);
  &.active {
    .slider-typesCatalog__image {
      transition: all 0.3s ease 0s;
      border: solid $hoverColor 1px;
    }

    .slider-typesCatalog__name {
      transition: all 0.3s ease 0s;
      color: $hoverColor;
    }
  }
  &:hover {
    .slider-typesCatalog__image {
      transition: all 0.3s ease 0s;
      border: solid $hoverColor 1px;
    }

    .slider-typesCatalog__name {
      transition: all 0.3s ease 0s;
      color: $hoverColor;
    }
  }
  &__body {
    overflow: visible;
    cursor: pointer;
    padding: 0 0 100% 0;
    width: 100%;
    position: relative;
    border-radius: 50%;
    transition: all 0.3s ease 0s;

    @media (any-hover: hover) {
    }
  }
  &__image {
    transition: all 0.3s ease 0s;
    border: solid #f9f9f9 1px;
    background: #f9f9f9;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 77/123 * 100%;
    }
  }

  &__name {
    transition: all 0.3s ease 0s;
    font-size: em(14);
    font-style: normal;
    font-weight: 400;
    line-height: em(25, 14); /* 178.571% */
    letter-spacing: -0.28px;
  }
}
</style>
