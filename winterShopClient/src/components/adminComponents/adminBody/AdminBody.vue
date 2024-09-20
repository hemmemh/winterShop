<template>
  <div class="Admin__container">
    <div class="Admin__body">
      <MyButtonVue class-name="login" @click="setModalFun('type')"
        >Добавить тип</MyButtonVue
      >
      <MyButtonVue class-name="login" @click="setModalFun('brand')"
        >Добавить бренд</MyButtonVue
      >
      <MyButtonVue class-name="login" @click="setModalFun('product')"
        >Добавить продукт</MyButtonVue
      >
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
import MyButtonVue from '../../UI/MyButton.vue';

const store = useStore();
const setModalFun = (e) => {
  store.commit('admin/setModal', true);
  store.commit('admin/setModalActive', e);
};
</script>

<style lang="scss">
.Admin {
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__body {
    margin-top: rem(50);
    width: em(400);
    display: flex;
    flex-direction: column;
    gap: em(30);
  }
}
</style>
