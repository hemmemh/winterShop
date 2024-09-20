<template>
  <main class="Admin__main">
    <AdminBodyVue />
    <MyModalVue
      modal-class="admin"
      :model-value="modal"
      @update:model-value="changeModal"
    >
      <TypeModalVue v-if="modalActive == 'type'" />
      <BrandModalVue v-if="modalActive == 'brand'" />
      <ProductModalVue v-if="modalActive == 'product'" />
    </MyModalVue>
  </main>
</template>
<script setup>
import MyModalVue from '../UI/MyModal.vue';
import AdminBodyVue from './adminBody/AdminBody.vue';
import { computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';

const TypeModalVue = defineAsyncComponent(
  () => import('./modals/TypeModal.vue')
);
const BrandModalVue = defineAsyncComponent(
  () => import('./modals/BrandModal.vue')
);
const ProductModalVue = defineAsyncComponent(
  () => import('./modals/ProductModal.vue')
);
const store = useStore();

const changeModal = (e) => {
  store.commit('admin/setModal', e);
  console.log(modalActive, '4t');
};
const modalActive = computed(() => store.state.admin.modalActive);
const modal = computed(() => store.state.admin.modal);
</script>
<style lang="scss">
.Admin {
  &__main {
    flex: 1 1 auto;
    margin-top: rem(150);
    @media (max-width: $mobile) {
      margin-top: rem(50);
    }
  }
}
</style>
