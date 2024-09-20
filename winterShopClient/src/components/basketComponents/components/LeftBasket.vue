<template lang="">
  <div v-if="basket.length" class="Basket__left">
    <h2 class="Basket__title">Корзина</h2>
    <div class="Basket__items">
      <TransitionGroup name="basket">
        <BasketItemVue
          v-for="itemBasket in basket"
          :key="itemBasket.product._id"
          :item="itemBasket"
          @remove-item="removeItem"
        />
      </TransitionGroup>
    </div>
  </div>
</template>
<script>
import BasketItemVue from '@/components/elements/BasketItem.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  components: {
    BasketItemVue,
  },

  data() {
    return {
      basket: [],
      loaded: false,
    };
  },

  computed: {
    ...mapState({
      totalSum: (state) => state.basket.totalSum,
    }),
  },

  methods: {
    ...mapMutations({
      setCount: 'basket/setCount',
      setTotalSum: 'basket/setTotalSum',
      setView: 'basket/setView',
    }),
    ...mapActions({
      setBasket: 'basket/setBasket',
    }),
    removeItem(e) {
      this.basket = e.basketItems;
      this.setCount(this.basket.length);
    },
  },

  async mounted() {
    this.basket = (await this.setBasket(this.$store.state.user.user.id)) || [];
  },
};
</script>
<style lang="scss">
.Basket {
  &__title {
    font-size: em(21);
    font-style: normal;
    font-weight: 700;
    line-height: em(30, 21);
    margin-bottom: em(25);
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: em(10);
  }
  .basket-enter-active,
  .basket-leave-active {
    transition: all 0.5s ease;
  }
  .basket-enter-from,
  .basket-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
