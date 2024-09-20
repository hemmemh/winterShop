<template>
  <div class="Admin__modal modal-admin">
    <div class="modal-admin__name">Добавить тип</div>
    <MyInputVue
      v-model="nameType"
      input-class="admin"
      placeholder="*имя типа"
      :placeholder-on="true"
    />
    <div class="modal-admin__addImage">
      <MyFileVue @file-click="fileClick">
        <MyButtonVue class-name="login"
          >Добавить изображение для типа</MyButtonVue
        >
      </MyFileVue>
      <div class="modal-admin__imageCover">
        <div v-if="imageType" class="modal-admin__image">
          <img :src="imageType" alt="" />
        </div>
      </div>
    </div>
    <MyButtonVue class-name="login" @click="setType">Добавить</MyButtonVue>
  </div>
</template>
<script setup>
import MyButtonVue from '../../UI/MyButton.vue';
import MyFileVue from '../../UI/MyFile.vue';
import MyInputVue from '../../UI/MyInput.vue';
import useType from '@/hooks/useType.js';
import { ref } from 'vue';
import store from '@/store';

const fileType = ref(null);
const imageType = ref(null);
const nameType = ref('');

const fileClick = (e) => {
  const fileReader = new FileReader();
  fileType.value = e[0];
  fileReader.readAsDataURL(e[0]);
  fileReader.onloadend = () => {
    imageType.value = fileReader.result;
  };
};

const setType = () => {
  useType(nameType.value, fileType.value)
    .then(() => {
      nameType.value = '';
      fileType.value = null;
      imageType.value = null;
      store.commit('admin/setModal', false);
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>
<style lang="scss">
.modal-admin {
  padding: em(30) em(20);
  display: flex;
  flex-direction: column;
  gap: em(40);
  .MyFile {
    margin-bottom: em(30);
  }
  &__images {
    display: flex;
    flex-wrap: wrap;
    gap: em(10);
    max-width: em(350);
  }
  &__spoilers {
    display: flex;
    flex-wrap: wrap;
    gap: em(20);
    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }
  &__image {
    width: em(200);
    height: em(200);
    position: relative;
    img {
      z-index: 1;
      object-fit: contain;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
  &__color {
    position: relative;
  }
  &__colorPicker {
    z-index: 4;
    position: absolute;
    bottom: 120%;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease 0s;
    pointer-events: none;
    &.active {
      opacity: 1;
      transition: all 0.3s ease 0s;
      pointer-events: inherit;
    }
  }
  &__name {
  }
  &__imageCover {
    display: flex;
    justify-content: center;
  }

  .loginModal__close {
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

  &__colors {
    display: flex;
    flex-direction: column;
    gap: em(10);
  }

  &__colorsItem {
    padding: em(5) em(10);
    border-bottom: 1px solid #000;
    display: flex;
    position: relative;
    align-items: center;
    :first-child {
      flex: 1 1 auto;
    }
  }

  .loginModal__close {
    position: relative;
    top: inherit;
    right: inherit;
    margin-left: em(30);
  }
}
</style>
