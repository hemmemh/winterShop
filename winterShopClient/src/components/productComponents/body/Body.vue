<template lang="">
  <section v-if="loaded" class="Product__body">
    <LeftProductVue />
    <RightProductVue />
  </section>
</template>
<script>
import store from '@/store';
import { mapActions, mapState } from 'vuex';
import LeftProductVue from './components/LeftProduct.vue';
import RightProductVue from './components/RightProduct.vue';

export default {
  components: {
    LeftProductVue,
    RightProductVue,
  },

  methods: {
    ...mapActions({
      getProduct: 'productItem/getProduct',
    }),
  },
  mounted() {
    this.getProduct({
      id: this.$route.params.id,
      userId: store.state.user.user.id,
    });
  },

  computed: {
    ...mapState({
      loaded: (state) => state.productItem.loaded,
    }),
  },
};
</script>

<style lang="scss">
.Product {
  &__body {
    display: flex;
    gap: em(63);
    @media (max-width: $tablet) {
      flex-direction: column;
      gap: em(0);
    }
  }

  &__left {
    flex: 1 1 auto;
    min-width: 0;
  }

  &__right {
    flex: 0 0 em(420);
    @media (max-width: 1200px) {
      flex: 0 0 em(380);
    }
    @media (max-width: $tablet) {
      font-size: 14px;
    }
    @media (max-width: $mobile) {
      font-size: 14px;
    }
  }
}
</style>
