<template lang="">
  <div class="events-home__item item-eventsHome">
    <div class="item-eventsHome__cover">
      <div class="item-eventsHome__body">
        <div class="item-eventsHome__image">
          <img src="@/images/home/events/1.png" alt="" />
        </div>
        <div class="item-eventsHome__content content-eventsHome">
          <div class="content-eventsHome__image">
            <img src="@/images/home/events/3.png" alt="" />
          </div>
          <div class="content-eventsHome__title">Программа лояльности</div>
          <div class="content-eventsHome__text">
            Зарабатывайте баллы и получайте преимущества
          </div>
          <MyButtonVue :class-name="'home'">Вступить в клуб</MyButtonVue>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyButtonVue from '@/components/UI/MyButton.vue';

export default {
  components: {
    MyButtonVue,
  },
};
</script>
<style lang="scss">
.item-eventsHome {
  flex: 1 1 auto;
  @media (max-width: $mobile) {
    width: 100%;
  }
  @media (max-width: $mobileSmall) {
    width: 100%;
  }
  &__cover {
    padding: 0 0 789/668 * 100% 0;
    @media (max-width: $mobile) {
      padding: 0 0 45% 0;
    }
    @media (max-width: $mobileSmall) {
      padding: 0 0 789/668 * 100% 0;
    }
    position: relative;
  }

  &__body {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    img {
      object-fit: cover;
      @media (max-width: $mobile) {
        object-position: 20% 20%;
      }

      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    &._two {
      img {
        @media (max-width: $mobile) {
          object-position: initial;
        }
      }
    }
  }
}

.content-eventsHome {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    max-width: em(152);
    img {
      object-fit: contain;
      width: 100%;
    }
    &._two {
      @media (max-width: $mobile) {
        max-width: 40px;
      }
    }
    margin-bottom: em(25);
    @media (max-width: $mobile) {
      margin-bottom: em(10);
    }
  }

  &__title {
    color: #fff;
    font-size: em(32);
    font-weight: 700;
    line-height: em(40, 32); /* 125% */
    margin-bottom: em(15, 32);
  }

  &__text {
    color: #fff;
    font-size: em(16);
    font-style: normal;
    font-weight: 500;
    line-height: em(25, 16); /* 156.25% */
    margin-bottom: em(25, 16);
  }

  &__form {
    display: flex;
    background: #fff;
    padding: em(17) em(24) em(17) em(17);
    width: em(401);
  }

  &__mailIcon {
    display: flex;
    align-items: center;
    margin-right: em(12);
    &::before {
      font-size: em(16);
    }
  }

  &__input {
    flex: 1 1 auto;
    color: $mainColor;
    font-size: em(14);
    font-style: normal;
    font-weight: 500;
    line-height: em(25, 14); /* 178.571% */
    letter-spacing: -0.28px;
    &::placeholder {
      color: $mainColor;
    }
  }

  &__send {
    &::before {
      font-size: em(20);
    }
  }
}
</style>
