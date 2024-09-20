<template lang="">
  <div class="controls-catalog__sort">
    <p class="controls-catalog__sortText">Сортировать по:</p>
    <MySpoilerVue v-model="spoiler" :spoiler-class="'navMenu'">
      <template #header>
        <div class="controls-catalog__sortButton _header _icon-arrow">
          {{ sortValue }}
        </div>
      </template>
      <div
        class="controls-catalog__sortButton _dev"
        :class="{ active: sort == 'date' }"
        @click="onSetSort('date')"
      >
        Новинки
      </div>
      <div
        class="controls-catalog__sortButton _dev"
        :class="{ active: sort == 'price' }"
        @click="onSetSort('price')"
      >
        Цена
      </div>
      <div
        class="controls-catalog__sortButton _dev"
        :class="{ active: sort == 'rating' }"
        @click="onSetSort('rating')"
      >
        Рейтинг
      </div>
    </MySpoilerVue>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import MySpoilerVue from '../../../UI/MySpoiler.vue';

export default {
  methods: {
    ...mapMutations({
      setSort: 'product/setSort',
      setPage: 'product/setPage',
    }),

    onSetSort(e) {
      this.setSort(e);
      this.setPage(1);
      const searchParams = new URLSearchParams(this.$route.query);
      searchParams.set('sort', JSON.stringify(e));
      searchParams.set('page', 1);
      this.$router.push({
        path: this.$route.path,
        query: { ...Object.fromEntries(searchParams.entries()) },
      });
    },
  },

  computed: {
    ...mapState({
      sort: (state) => state.product.sort,
    }),
    sortValue() {
      switch (this.sort) {
        case 'date':
          return 'новинки';
        case 'rating':
          return 'рейтинг';
        case 'price':
          return 'цена';
        default:
          return 'нет данных';
      }
    },
  },

  components: {
    MySpoilerVue,
  },
};
</script>
<style lang="scss">
.controls-catalog__sort {
  display: flex;
  align-items: center;
  gap: em(15);
}

.controls-catalog__sortText {
  color: #828b8d;
  font-size: em(14);
  font-style: normal;
  font-weight: 400;
  line-height: em(25, 14); /* 178.571% */
  letter-spacing: -0.28px;
  @media (max-width: $mobile) {
    display: none;
  }
}
</style>
