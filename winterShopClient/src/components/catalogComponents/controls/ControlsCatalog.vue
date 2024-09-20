<template lang="">
  <section class="Catalog__contols controls-catalog">
    <div class="controls-catalog__container">
      <TypeVue />
      <div class="controls-catalog__body">
        <FiltrVue />
        <SortVue />
      </div>
    </div>
  </section>
</template>
<script>
import TypeVue from './components/Type.vue';
import FiltrVue from './components/Filtr.vue';
import SortVue from './components/Sort.vue';
export default {
  components: {
    TypeVue,
    FiltrVue,
    SortVue,
  },
};
</script>
<style lang="scss">
.controls-catalog {
  margin-top: em(50);
  font-size: 16px;
  @media (max-width: $tablet) {
    font-size: 14px;
  }
  @media (max-width: $mobile) {
    margin-top: em(20);
    font-size: 13px;
  }
  @media (max-width: $mobileSmall) {
    font-size: 11px;
  }

  &__body {
    display: flex;
    justify-content: space-between;
    @media (max-width: $mobile) {
      font-size: 10px;
    }
  }
}
</style>
