<template lang="">
  <nav class="body-navbar__actions actions-navbar _media-max">
    <div
      v-if="!auth"
      class="actions-navbar__action _icon-user-winter"
      @click="SetLoginNavBar(true)"
    >
      <span class="actions-navbar__text">ВОЙТИ</span>
    </div>
    <div
      v-else
      class="actions-navbar__action _icon-user-winter"
      @click="onLogOut"
    >
      <span class="actions-navbar__text">ВЫЙТИ</span>
    </div>
    <div
      class="actions-navbar__action _icon-star-winter _media"
      @click="$router.push('/love')"
    >
      <span class="actions-navbar__text">ИЗБРАННОЕ</span>
      <span
        v-if="loves"
        :class="
          lovesActive ? 'actions-navbar__count active' : 'actions-navbar__count'
        "
        >{{ loves }}</span
      >
    </div>
    <div
      class="actions-navbar__action _icon-cart-winter _media"
      @click="$router.push('/basket')"
    >
      <span class="actions-navbar__text">КОРЗИНА</span>
      <span
        v-if="count"
        :class="
          countActive ? 'actions-navbar__count active' : 'actions-navbar__count'
        "
        >{{ count }}</span
      >
    </div>
    <div
      v-if="$route.path === '/catalog'"
      class="actions-navbar__action _icon-search-winter"
      @click="setSearch(!search)"
    >
      <span class="actions-navbar__text">ПОИСК</span>
    </div>
  </nav>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import { logout } from '../../../../../http/userApi';

export default {
  methods: {
    ...mapMutations({
      SetLoginNavBar: 'navbar/SetLoginNavBar',
      setUser: 'user/setUser',
      setCount: 'basket/setCount',
      setLoves: 'basket/setLoves',
      setAuth: 'navbar/setAuth',
      setSearch: 'navbar/setSearch',
    }),
    onLogOut(e) {
      logout(e).then(() => {
        localStorage.removeItem('Auth');
        this.setUser({});
        this.setCount(0);
        this.setLoves(0);
        this.setAuth(false);
      });
    },
  },
  data() {
    return {
      countActive: false,
      lovesActive: false,
    };
  },
  computed: {
    ...mapState({
      search: (state) => state.navbar.search,
      auth: (state) => state.navbar.auth,
      count: (state) => state.basket.count,
      loves: (state) => state.basket.loves,
    }),
  },
  watch: {
    count() {
      this.countActive = true;
      setTimeout(() => {
        this.countActive = false;
      }, 500);
    },
    loves() {
      this.lovesActive = true;
      setTimeout(() => {
        this.lovesActive = false;
      }, 500);
    },
  },
};
</script>
<style lang="scss">
.actions-navbar {
  display: flex;
  gap: 25px;
  position: relative;
  z-index: 101;
  @media (max-width: $mobile) {
    gap: 15px;
  }
  &._media-max {
    @media (max-width: $mobile) {
      justify-content: flex-end;
      flex: 0 0 33.333%;
    }
  }
  &._media {
    display: none;
    flex: 0 0 33.333%;
    @media (max-width: $mobile) {
      display: flex;
      align-items: center;
    }
  }

  &__action {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 0.3s ease 0s;
    position: relative;
    @media (any-hover: hover) {
      &:hover {
        .actions-navbar__text,
        &:before {
          transition: all 0.3s ease 0s;
          color: #eb5757;
        }
      }
    }
    &._icon-user-winter {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: $mobile) {
        &::before {
          display: none;
        }
      }
      .actions-navbar__text {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
      }
    }
    @media (max-width: $mobile) {
      span {
        display: none;
      }
    }
    &._media {
      display: flex;
      @media (max-width: $mobile) {
        display: none;
      }
    }
    &._icon-search-winter {
      &::before {
        font-size: 20px;
      }
    }
    &::before {
      transition: all 0.3s ease 0s;
      display: block;
      font-size: 24px;
      line-height: 24px;
      @media (max-width: $mobile) {
        font-size: 20px;
        line-height: 20px;
      }
      text-align: center;
    }
  }
  &__text {
    transition: all 0.3s ease 0s;
    display: block;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: 10px; /* 125% */
    letter-spacing: 0.16px;
    text-transform: uppercase;
  }
  &__count {
    &.mobile {
      display: flex;
      width: 13px;
      height: 13px;
      font-size: 11px;
    }
    @media (any-hover: hover) {
    }
    &.active {
      animation: count 0.3s ease-out forwards;
      @keyframes count {
        0% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(0, -5px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    }
    position: absolute;
    top: -30%;
    right: -20%;
    background: $hoverColor;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 10px; /* 125% */
    letter-spacing: 0.16px;
    text-transform: uppercase;
  }
}
</style>
