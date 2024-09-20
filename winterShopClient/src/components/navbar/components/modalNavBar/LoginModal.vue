<template lang="">
  <div
    class="loginModal__side _left"
    :class="{ hide: loginNavBarChange && !login }"
  >
    <div class="loginModal__name">Вход</div>
    <div class="loginModal__inputs">
      <div class="loginModal__inputCover">
        <div class="loginModal__inputName">Номер телефона или email</div>
        <MyInputVue
          v-model="email"
          :input-class="emailTest ? 'login active' : 'login'"
          @update:model-value="setEmail"
        />
      </div>
      <div class="loginModal__inputCover">
        <div class="loginModal__inputName">Пароль</div>
        <MyInputVue v-model="password" input-class="login" />
      </div>
    </div>

    <MyButtonVue class-name="login" @click="onLogin">Войти</MyButtonVue>
    <div v-if="errorEl" class="loginModal__error">{{ errorText }}</div>

    <div
      class="loginModal__change"
      :class="{ active: loginNavBarChange }"
      @click="setLogin(false)"
    >
      Зарегистрироваться
    </div>
    <div class="loginModal__close" @click="setLoginNavBar(false)"></div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { EMAIL_REGEXP } from '../../../../utils/config';
import MyButtonVue from '../../../UI/MyButton.vue';
import MyInputVue from '../../../UI/MyInput.vue';
export default {
  components: {
    MyButtonVue,
    MyInputVue,
  },

  computed: {
    ...mapState({
      loginNavBarChange: (state) => state.navbar.loginNavBarChange,
      login: (state) => state.navbar.login,
      count: (state) => state.basket.count,
      loves: (state) => state.basket.loves,
    }),
  },

  data() {
    return {
      email: '',
      password: '',
      emailExp: EMAIL_REGEXP,
      emailTest: false,
      errorText: '',
      errorEl: false,
    };
  },
  methods: {
    setEmail(e) {
      this.email = e;
      console.log(e);
      if (!this.emailExp.test(e) && e) {
        this.emailTest = true;
        this.errorText = 'ошибка при валидации';
      } else {
        this.emailTest = false;
      }
    },

    ...mapMutations({
      setLoader: 'navbar/setLoader',
      SetLoginNavBar: 'navbar/SetLoginNavBar',
      setAuth: 'navbar/setAuth',
      setLoves: 'basket/setLoves',
      setCount: 'basket/setCount',
      setUser: 'user/setUser',
      setLogin: 'navbar/setLogin',
      setLoginNavBarChange: 'navbar/setLoginNavBarChange',
      setSuccessfull: 'navbar/setSuccessfull',
      setSuccessText: 'navbar/setSuccessText',
    }),
    ...mapActions({
      onLoginAction: 'navbar/onLogin',
    }),

    async onLogin() {
      if (!this.password || !this.email) {
        this.errorText = 'пустые поля';
        this.errorEl = true;
        return;
      }

      if (this.emailTest) {
        this.errorText = 'ошибка при валидации';
        this.errorEl = true;
        return;
      }
      this.setLoader(true);
      let { email, password, errorText, errorEl } = await this.onLoginAction({
        email: this.email,
        password: this.password,
        errorText: this.errorText,
        errorEl: this.errorEl,
      });
      this.email = email;
      this.password = password;
      this.errorText = errorText;
      this.errorEl = errorEl;
    },
  },
};
</script>
<style lang="scss">
.loginModal {
  display: flex;
  @media (max-width: 520px) {
    font-size: 14px;
  }
  &__load {
    &.active {
      display: block;
    }
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.8);
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &__error {
    font-size: em(16);
    font-style: normal;
    font-weight: 500;
    line-height: em(35, 21); /* 166.667% */
    letter-spacing: -0.42px;
    margin-top: em(12);
    color: $hoverColor;
  }
  &__side {
    padding: em(40) em(70);
    @media (max-width: 520px) {
      padding: em(20) em(40);
    }

    &._right {
      border: 1px solid #f2f2f2;
      background: #f9f9f9;
    }
    &.hide {
      display: none;
    }
  }

  &__inputCover {
  }
  &__inputs {
    display: flex;
    flex-direction: column;
    gap: em(25);
    margin-bottom: em(40);
  }
  &__name {
    font-size: em(21);
    font-style: normal;
    font-weight: 500;
    line-height: em(35, 21); /* 166.667% */
    letter-spacing: -0.42px;
    margin-bottom: em(25);
  }

  &__inputCover {
  }
  &__input {
    transition: all 0.3s ease 0s;
    border: 1px solid #ced4d7;
    background: #fff;
    padding: em(15) em(10);
    font-size: em(14);
    width: em(352);
    font-weight: 500;
    line-height: em(20, 14); /* 166.667% */
    &:focus {
      transition: all 0.3s ease 0s;
      border: 1px solid $hoverColor;
    }
  }
  &__inputName {
    color: #828b8d;

    font-size: em(12);

    font-weight: 500;
    line-height: em(20, 12); /* 166.667% */
    letter-spacing: -0.24px;
    margin-bottom: em(5);
  }

  &__change {
    cursor: pointer;
    font-size: em(12);
    display: none;
    font-weight: 500;
    line-height: em(30, 12); /* 166.667% */
    letter-spacing: -0.24px;
    margin-bottom: em(5);
    transition: all 0.3s ease 0s;
    @media (any-hover: hover) {
      &:hover {
        transition: all 0.3s ease 0s;
        color: $hoverColor;
      }
    }
    &.active {
      display: inline-block;
    }
  }
  &__close {
    @media (any-hover: hover) {
      &:hover {
        &::before,
        &::after {
          transition: all 0.3s ease 0s;
          background: $hoverColor;
        }
      }
    }
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    background: $mainColor;
    width: 30px;
    height: 30px;

    &::before,
    &::after {
      transition: all 0.3s ease 0s;
      content: '';
      display: block;
      width: 25px;
      height: 2px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
