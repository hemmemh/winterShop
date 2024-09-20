<template lang="">
  <section v-once class="Home__action action-home">
    <div class="action-home__container">
      <div class="action-home__body">
        <ItemVue name="НАЗВАНИЕ АКЦИИ №1" src-image="1.png" />
        <ItemVue name="НАЗВАНИЕ АКЦИИ №2" src-image="2.png" />
      </div>
    </div>
  </section>
</template>
<script>
import ItemVue from './components/Item.vue';

export default {
  components: {
    ItemVue,
  },
};
</script>

<style lang="scss">
.action-home {
  margin-top: rem(50);
  @media (max-width: $mobile) {
    margin-top: rem(20);
  }
  &__container {
  }

  &__body {
    display: flex;
    gap: rem(26);
    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }

  &__item {
  }
}
</style>
