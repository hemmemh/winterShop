<template lang="">
  <section v-once class="Catalog__action action-catalog">
    <div class="action-catalog__container">
      <div class="action-catalog__body">
        <ItemActionVue name="Название акции" src-image="1.png" />
        <ItemActionVue name="Название акции" src-image="2.png" />
        <ItemActionVue name="Название акции" src-image="3.png" />
      </div>
    </div>
  </section>
</template>
<script>
import ItemActionVue from './components/ItemAction.vue';

export default {
  components: {
    ItemActionVue,
  },
};
</script>
<style lang="scss">
.action-catalog {
  @media (max-width: $tablet) {
    font-size: 12px;
  }
  @media (max-width: $mobile) {
    font-size: 12px;
  }
  background: $mainColor;

  &__body {
    display: flex;
    gap: em(27);
    padding: em(20) 0 em(50) 0;
    @media (max-width: $tablet) {
      padding: em(10) 0 em(20) 0;
    }
  }
  &__item {
    &:last-child {
      @media (max-width: $mobile) {
        display: none;
      }
    }
  }
}
</style>
